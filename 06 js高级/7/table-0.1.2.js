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
                        self.bind(); // add 给table标签绑定事件
                        self.bindSort(); // add 排序功能
                    } else {
                        console.log( '请求数据失败' );
                    }
                }
            };

            // 4 发送请求
            xhr.send();
        },
        draw: function(){
            // 给Table对象添加table属性 存储table表格标签
            var table = this.table = document.createElement( 'table' );
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
                // 设置上一次排序方式
                th.setAttribute( 'data-key', -1 );
                // 设置列索引
                th.setAttribute( 'data-index', i );
                th.innerHTML = this.model[ i ].text;
                // add 设置列的宽度
                this.model[ i ].width && 
                ( th.style.width = global.parseFloat( this.model[ i ].width ) + 'px' );

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
                // 给数据行 添加索引--和tableData是对应的
                tr.setAttribute( 'data-index', i );
                // 添加序号
                td = document.createElement( 'td' );
                td.style.textAlign = 'center';
                td.innerHTML = i + 1;
                tr.appendChild( td );
                for( j = 0; j < k; j++ ){
                    td = document.createElement( 'td' );
                    // add 设置字体颜色
                    td.style.color = this.model[ j ].color || '#000';
                    // 新增 设置对齐方式
                    td.style.textAlign = this.model[ j ].align || 'center';
                    var prop = this.model[ j ].prop;
                    td.innerHTML = obj[ prop ] == null ? '' : obj[ prop ];
                    tr.appendChild( td );
                }
                // 添加删除操作
                td = document.createElement( 'td' );
                td.style.textAlign = 'center';
                td.innerHTML = '<a name="edit" href="javascript:;">编辑</a><a name="delete" href="javascript:;">删除</a>';
                tr.appendChild( td );

                tbody.appendChild( tr );
            }

            return tbody;
        },
        bindSort: function(){
            var self = this;
            // 获取thead下的tr
            var tr = document.querySelector( this.target + ' table thead tr' );
            tr.addEventListener( 'click', function( e ){
                var target = e.target,
                    sortBy,  // 按照哪个属性来排序
                    sortKey; // 升|降序（规定 1：升 -1：降）
                var index = target.getAttribute( 'data-index');
                // 判断是否为可排序的列
                // 如果是,才实现[排序]
                if( index != null ){
                    // 在th上 使用自定义属性data-key来存储上一次排序方式。如果没有上一次，默认值为 -1. 
                    //  获取本次排序方式
                    sortKey = -target.getAttribute( 'data-key' );
                    // 将本次排序方式更新到th上
                    target.setAttribute( 'data-key', sortKey );
                    // 排序字段
                    
                    var config = self.model[ index ];
                    sortBy = config.prop;
                    self.tableData.sort( function( a, b ){
                        return a[ sortBy ] > b[ sortBy ] ? sortKey : -sortKey;
                    } );
                    self.refresh();
                }                
            } );
        },
        bind: function(){
            var self = this; // 缓存Table对象
            // 1 删除功能
            // 获取表格tbody
            var tbody = document.querySelector( this.target + ' table tbody' );
            // 给tbody绑定单击事件
            tbody.addEventListener( 'click', function( e ){
                // 获取事件源
                var target = e.target,
                    flag = target.getAttribute( 'name' );
                // 如果指定name属性值，然后在根据name属性值的不同，进行处理
                if( flag ){
                     // 获取点击当前的行
                    var currentTr = e.target.parentNode.parentNode;
                    switch( flag ){
                        case 'edit':
                            break;
                        case 'delete':
                            if( global.confirm( '确认删除？' ) ){
                                // 获取要删除数据的索引
                                var index = currentTr.getAttribute( 'data-index' );
                                // 根据索引删除数组元素
                                self.tableData.splice( index, 1 );
                                self.refresh();
                            }
                            break;
                    } 
                }
            } );
        },
        refresh: function(){
            // 先删除原先的tbody
            this.table.removeChild( this.table.tBodies[ 0 ] );
            // 再重新绘制一个tbody，添加给table标签
            this.table.appendChild( this.drawBody() );
            // 重新绑定tbody点击事件
            this.bind();
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
        { text: '姓名', prop: 'name', color: 'hotpink' }, 
        { text: '金币数', prop: 'count', align: 'right', width: '60px' }, 
        { text: '性别', prop: 'gender' }, 
        { text: '年龄', prop: 'age' }, 
        { text: '邮箱', prop: 'email', width: 100 }, 
        { text: '详细信息', prop: 'details', align: 'left' }
    ]
} );