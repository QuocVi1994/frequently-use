var canvas = document.getElementById( 'canvas' ),
    context = canvas.getContext( '2d' );

var w = canvas.width,
    h = canvas.height;

function roundRect( x, y, w, h, r ){
    context.beginPath();
    context.moveTo( x, y + r );
    context.arcTo( x, y + h, x + w, y + h, r );
    context.arcTo( x + w, y + h, x + w, y, r );
    context.arcTo( x + w, y, x, y, r );
    context.arcTo( x, y, x, y + h, r );
}
function clock(){ 
    // 0 清除画布
    context.clearRect( 0, 0, w, h );
    // 1 表盘
    roundRect( 150, 50, 300, 300, 60 );
    context.arc( w / 2, h / 2, 130, 0, 2 * Math.PI );
    context.fill();

    // 2 刻度
    context.save();
    context.lineCap = 'round';
    context.translate( w / 2, h / 2 );
    // 2.1 绘制小时的刻度
    context.save();
    for( var i = 0; i < 12; i++ ){
        context.beginPath();
        context.moveTo( 124, 0 );
        context.lineTo( 130, 0 );
        context.lineWidth = 8;
        context.lineCap = 'round';
        context.stroke();
        context.rotate( Math.PI / 6 );
    }
    context.restore();
    // 2.2 绘制分秒刻度
    context.save();
    for( i = 0; i < 60; i++ ){
        if( i % 5 != 0 ){
            context.beginPath();
            context.moveTo( 126, 0 );
            context.lineTo( 128, 0 );
            context.lineWidth = 4;
            context.lineCap = 'round';
            context.strokeStyle = 'darkred';
            context.stroke();
        }    
        context.rotate( Math.PI / 30 );
    }
    context.restore();
    // 3 数字显式
    for( i = 0; i < 12; i++ ){
        var angle = i * Math.PI / 6;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.font = 'bold 16px sans-serif';
        context.fillText( i + 3 > 12 ? i + 3 - 12 : i + 3, 
            110 * Math.cos( angle ), 110 * Math.sin( angle ) );    
    }
    // 4 品牌
    context.font = 'italic bold 18px Consola';
    context.fillText( 'clock', 0, -80 );
    // 5 时针
    // 5.1 获取当前时间以及时分秒
    var now = new Date(),
        hours = now.getHours(),
        mins = now.getMinutes(),
        secs = now.getSeconds();

    context.rotate( -Math.PI / 2 );
    context.save();
    context.rotate( ( hours + mins / 60 + secs / 3600 ) * Math.PI / 6 );
    context.beginPath();
    context.moveTo( 0, 0 );
    context.lineTo( 80, 0 );
    context.lineWidth = 8;
    context.stroke();
    context.restore();
    // 6 分针
    context.save();
    context.rotate( ( mins + secs / 60 ) * Math.PI / 30 );
    context.beginPath();
    context.moveTo( 0, 0 );
    context.lineTo( 100, 0 );
    context.lineWidth = 5;
    context.stroke();
    context.restore();
    // 7 秒针
    context.save();
    context.rotate( secs * Math.PI / 30 );
    context.beginPath();
    context.moveTo( -20, 0 );
    context.lineTo( 120, 0 );
    context.strokeStyle = 'red';
    context.lineWidth = 2;
    context.stroke();
    context.restore();
    // 8 其他
    context.fillStyle = 'red';
    context.beginPath();
    context.arc( 0, 0, 8, 0, 2 * Math.PI );
    context.fill();
    context.restore();
    window.requestAnimationFrame( clock );
}

window.requestAnimationFrame( clock );
