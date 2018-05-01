// 一 获取数据
// 1 创建请求对象
function createRequest() {
    // 判断浏览器是否支持XMLHttpRequest
   /* // 如果支持
    if( window.XMLHttpRequest ){
        return new window.XMLHttpRequest();
    } else { // 不支持
        return new window.ActiveXObject( 'XMLHTTP' );
    }*/
    return window.XMLHttpRequest ? 
            new window.XMLHttpRequest() : 
            new window.ActiveXObject( 'XMLHTTP' );
}

var xhr = createRequest();

// 2 调用open方法


xhr.open( 'get', 'data.json', true );

// 3 监听请求状态

xhr.onreadystatechange = function() {
    var readystate = xhr.readyState,
        status = xhr.status;

    if( readystate == 4 ){
        if( status >= 200 && status < 300 || status == 304 ){
            // success
            var data = JSON.parse( xhr.responseText );
            console.log( data );
            // 二 绘制表头
            // 表格的头显式的文本 就是 数据中对象的属性名称
            // 获取数据中第一个对象
            var obj = data[ 0 ];
            // 创建thead标签
            var thead = document.createElement( 'thead' ),
            // 创建行tr
                tr = document.createElement( 'tr' ),
                th; 

            for( var k in obj ){
                th = document.createElement( 'th' );
                th.innerHTML = k;
                // 将th添加到tr
                tr.appendChild( th );
            }

            // 将tr添加到thead
            thead.appendChild( tr );

            // 三 绘制表体

            // 创建tbody标签
            var tbody = document.createElement( 'tbody' ),
                td;

            // 遍历data
            for( var i = 0, l = data.length; i < l; i++ ){
                obj = data[ i ];
                tr = document.createElement( 'tr' );
                for( k in obj ){
                    td = document.createElement( 'td' );
                    td.innerHTML = obj[ k ];
                    // 将创建的td 添加给tr
                    tr.appendChild( td );
                }
                // 将创建的tr添加到 tbody
                tbody.appendChild( tr );
            }
            
            var table = document.createElement( 'table' );
            table.className = 'grid-table';
            table.appendChild( thead );
            table.appendChild( tbody );
            document.querySelector( '#list' ).appendChild( table );
        } else {
            // fail
            console.log( { "code": status, message: "请求失败" } );
        }
    }
};
// 4 发送请求

xhr.send();

