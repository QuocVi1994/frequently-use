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
        var obj = this.tableData[ 0 ];

        for( var k in obj ){
            th = document.createElement( 'th' );
            th.innerHTML = k;
            tr.appendChild( th );
        }
        thead.appendChild( tr );

        return thead;
    },
    drawBody: function(){
        var tbody = document.createElement( 'tbody' ),
            tr,
            td;

        var i = 0,
            l = this.tableData.length,
            k,
            obj;

        for( ; i < l; i++ ){
            obj = this.tableData[ i ];
            tr = document.createElement( 'tr' );
            for( k in obj ){
                td = document.createElement( 'td' );
                td.innerHTML = obj[ k ];
                tr.appendChild( td );
            }
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
        if( !( options && options.target ) ){
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

var t = table( {
    target: '#list',
    url: 'data.json'
} );

console.log( t );// Table对象