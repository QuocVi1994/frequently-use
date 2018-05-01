( function( global ){
    var document = global.document;
        function Table( options ){
        // 使用混入式继承来实现给Table对象添加属性
        extend( this, tableSettings, options );
        this.load();
    }
    Table.prototype = {
        load: function(){
            var self = this;
            // 1 创建请求对象
            var xhr = new ( window.XMLHttpRequest || window.ActiveXObject )( 'XMLHTTP' );
            
            // 2 调用open方法
            xhr.open( this.type.toLowerCase(), this.url, this.async );

            // 3 监听请求状态
            xhr.onreadystatechange = function(){
                var state = xhr.readyState,
                    status = xhr.status;

                if( state == 4 ){
                    if( status >= 200 && status < 300 || status == 304 ){
                        // success
                        self.tableData = JSON.parse( xhr.responseText );
                        self.draw();
                    } else {
                        // fail
                        console.log( { "message": "请求失败" } );
                    }
                }
            };
            // 4 发送请求
            xhr.send();
        },
        draw: function(){
            var table = document.createElement( 'table' );
            table.className = this.tableClass;
            table.appendChild( this.drawHead() );
            table.appendChild( this.drawBody() );

            document.querySelector( this.target ).appendChild( table );
        },
        drawHead: function(){
            var thead = document.createElement( 'thead' ),
                tr = document.createElement( 'tr' ),
                th;

            var i = 0,
                l = this.model.length,
                obj;

            // 添加序号列
            th = document.createElement( 'th' );
            th.innerHTML = '序号';
            tr.appendChild( th );

            for( ; i < l; i++ ){
                // 当前列的配置信息
                obj = this.model[ i ];
                th = document.createElement( 'th' );
                // 列的文本内容就是当前对象的text属性值
                th.innerHTML = obj.text;
                tr.appendChild( th );
            }
            // 添加操作列
            th = document.createElement( 'th' );
            th.innerHTML = '操作';
            tr.appendChild( th );
            thead.appendChild( tr );

            return thead;
        },
        drawBody: function(){
            var tbody = document.createElement( 'tbody' ),
                tr,
                td;

            var i = 0,
                l = this.tableData.length,
                j = 0,
                k = this.model.length,
                obj;

            for( ; i < l; i++ ){
                // 当前行所有列的数据
                obj = this.tableData[ i ];
                tr = document.createElement( 'tr' );
                // 添加序号
                td = document.createElement( 'td' );
                td.innerHTML = i + 1;
                tr.appendChild( td );
                for( j = 0; j < k; j++ ){
                    td = document.createElement( 'td' );
                    // 获取当前列的数据渲染属性
                    /*var prop = this.model[ j ].prop;
                    td.innerHTML = obj[ prop ] == null ? '' : obj[ prop ];*/
                    td.innerHTML = obj[ this.model[ j ].prop ] == null ? 
                            '' : 
                            obj[ this.model[ j ].prop ];
                    tr.appendChild( td );
                }
                // 添加操作
                td = document.createElement( 'td' );
                td.innerHTML = '<a href="javascript:void(0);">删除</a>';
                tr.appendChild( td );

                tbody.appendChild( tr );
            }

            return tbody;
        }
    };
    var tableSettings = {
        url: window.location.href,
        type: 'GET',
        async: true,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        tableData: null,
        tableClass: 'grid-table'
    };
    // 工厂函数
    function table( options ){
        // 参数校验
        try {
            if( !( options && options.target && options.model ) ){
                throw new Error( '参数异常' );
            }
        } catch( err ){
            console.log( err );
            return null;
        }

        return new Table( options );
    }

    function extend( target ){
        if( !target ){
            return;
        }

        var args = arguments,
            i = 1,
            l = args.length;

        var k,
            obj; // 临时存储被继承对象

        for( ; i < l; i++ ){
            obj = args[ i ];
            for( k in obj ){
                target[ k ] = obj[ k ];
            }
        }

        return target;
    }
    // 将table工厂函数暴漏给用户
    global.table = table;
} )( window );

var t = table( {
    target: '#list',
    url: 'data.json',
    model: [ 
        { text: '姓名', prop: 'name'}, 
        { text: '金币数', prop: 'count' }, 
        { text: '性别', prop: 'gender' }, 
        { text: '年龄', prop: 'age' }, 
        { text: '邮箱', prop: 'email' }, 
        { text: '详细信息', prop: 'details' }
    ]
} );

console.log( t );// Table对象