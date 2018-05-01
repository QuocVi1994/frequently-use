( function( global ){
    var document = global.document;

    function Table( options ){
        extend( this, tableSettings, options );
        this.load();
    }

    Table.prototype = {
        constructor: Table,
        load: function(){
            var self = this;
            // 1 创建请求对象
            var xhr = global.XMLHttpRequest ? 
                    new global.XMLHttpRequest() :
                    new global.ActiveXObject( 'XMLHTTP' );

            // 2 调用open方法
            xhr.open( this.type.toLowerCase(), this.url, this.async );

            // 3 监听请求状态
            xhr.onreadystatechange = function(){
                var state = xhr.readyState,
                    status = xhr.status;

                if ( state == 4 ){
                    if ( status >= 200 && status < 300 || status == 304 ){
                        self.tableData = JSON.parse( xhr.responseText );
                        self.draw();
                    } else {
                        console.log( '请求数据失败' );
                    }
                }
            };

            // 4 发送请求
            xhr.send();
        },
        draw: function(){
            var table = document.createElement( 'table' );
            // 新增 如果指定width那么就设置表格的宽度 
            /*if( this.width ){
                table.style.width = global.parseFloat( this.width ) + 'px';
            }*/
            this.width && ( table.style.width = global.parseFloat( this.width ) + 'px' );
            table.className = this.tableClass;
            table.appendChild( this.drawHead() );
            table.appendChild( this.drawBody() );

            // 从页面中获取目标容器
            document.querySelector( this.target ).appendChild( table );
        },
        drawHead: function(){
            var thead = document.createElement( 'thead' ),
                tr = document.createElement( 'tr' ),
                th;

            var i = 0,
                l = this.model.length;

            // 给表格添加序号列
            th = document.createElement( 'th' );
            th.innerHTML = '序号';
            th.style.width = '40px';
            tr.appendChild( th );

            for( ; i < l; i++ ){
                th = document.createElement( 'th' );
                th.innerHTML = this.model[ i ].text;
                tr.appendChild( th );
            }
            // 给表格添加操作列
            th = document.createElement( 'th' );
            th.innerHTML = '操作';
            th.style.width = '70px';
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
                j,
                k = this.model.length,
                obj; // 存储当前行上所有列的数据

            for( ; i < l; i++ ){
                obj = this.tableData[ i ];
                tr = document.createElement( 'tr' );
                // 添加序号
                td = document.createElement( 'td' );
                td.style.textAlign = 'center';
                td.innerHTML = i + 1;
                tr.appendChild( td );
                for( j = 0; j < k; j++ ){
                    td = document.createElement( 'td' );
                    // 新增 设置对齐方式
                    td.style.textAlign = this.model[ j ].align || 'center';
                    var prop = this.model[ j ].prop;
                    td.innerHTML = obj[ prop ] == null ? '' : obj[ prop ];
                    tr.appendChild( td );
                }
                // 添加删除操作
                td = document.createElement( 'td' );
                td.style.textAlign = 'center';
                td.innerHTML = '<a href="javascript:;">编辑</a><a href="javascript:;">删除</a>';
                tr.appendChild( td );

                tbody.appendChild( tr );
            }

            return tbody;
        }
    };

    var tableSettings = {
        url: global.location.href,
        type: 'get',
        async: true,
        tableData: null,
        tableClass: 'grid-table',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    };

    function table( options ){
        // 过滤无效参数
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
        // 判断是否传入了继承者
        if( !target ){
            return;
        }

        var args = arguments,
            i = 1,
            l = arguments.length;

        var k, obj;

        for( ; i < l; i++ ){
            obj = args[ i ];
            for( k in obj ){
                // 如果 k 所表示的属性 是 obj自身具有的，就扩展给target对象。
                if( obj.hasOwnProperty( k ) ){
                    target[ k ] = obj[ k ];
                }
            }
        }

        return target;
    }

    global.table = table;
} )( window );

table( {
    target: '#list',
    url: 'data.json',
    width: 800,
    model: [ 
        { text: '姓名', prop: 'name' }, 
        { text: '金币数', prop: 'count', align: 'right' }, 
        { text: '性别', prop: 'gender' }, 
        { text: '年龄', prop: 'age' }, 
        { text: '邮箱', prop: 'email'}, 
        { text: '详细信息', prop: 'details', align: 'left' }
    ]
} );