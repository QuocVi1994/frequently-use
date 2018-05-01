// 创建Table对象来实现 数据驱动的大表哥
// 属性
// 数据的地址url  必需
// 请求类型type  （get | post）可选 默认为 get
// 请求方式async  可选 默认 true
// 表格样式tableClass 可选 默认 grid-table
// dom容器target 必需 
// 数据tableData 不需要使用者来指定，通过内部ajax请求自动更新
// 方法
// load 用来通过ajax请求数据
// drawHead 绘制表头
// drawBody 绘制表体
// draw     创建table标签 整个thead 和 tbody，在将table标签添加目标容器上
function Table( target, url, type, async, tableClass  ){
    // 参数校验
    try {
        if( !target || !url ){
            throw new Error( '参数异常' );
        }
    } catch( err ){
        console.log( err );
        return;
    }
    // 给Table对象添加相关属性
    this.target = target;
    this.url = url;
    this.type = type || 'get';
    this.async = async || true;
    this.tableClass = tableClass || 'grid-table';
    this.tableData = null;
    // 给Table对象添加相关方法
    this.load = function(){
        var self = this; // 缓存Table对象
        var xhr = window.XMLHttpRequest ? 
                new window.XMLHttpRequest() : 
                new window.ActiveXObject( 'XMLHTTP' );
                
        xhr.open( this.type.toLowerCase(), this.url, this.async );
        xhr.onreadystatechange = function(){
            var state = xhr.readyState,
                status = xhr.status;

            if( state == 4 ){
                if( status >= 200 && status < 300 || status == 304 ){
                    // success
                    // 将请求到的数据 赋值给Table对象的相应属性
                    self.tableData = JSON.parse( xhr.responseText );
                    // 开始绘制table
                    // console.log( this );
                    self.draw();
                } else {
                    // fail
                    console.log( { "code": status, "message": "fail" } );
                }
            }
        };
        xhr.send();
    };
    this.drawHead = function(){
        var thead = document.createElement( 'thead' ),
            tr = document.createElement( 'tr' ),
            th;

        var k;

        for( k in this.tableData[ 0 ] ){
            th = document.createElement( 'th' );
            th.innerHTML = k;
            tr.appendChild( th );
        }

        thead.appendChild( tr );

        return thead;
    };
    this.drawBody = function(){
        var tbody = document.createElement( 'tbody' ),
            tr,
            td;

        var i = 0,
            l = this.tableData.length;

        var k, 
            obj; // 临时存储data数据的对象

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
    };
    this.draw = function(){
        var table = document.createElement( 'table' );
        table.className = this.tableClass;
        table.appendChild( this.drawHead() );
        table.appendChild( this.drawBody() );
        document.querySelector( this.target ).appendChild( table );
    }; 
    // 在创建Table对象后，立即调用load方法，去加载数据并绘制table
    this.load();
}

new Table( '#list', 'data.json' );