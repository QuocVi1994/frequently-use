function Baby( options ){
    // 属性
    this.width = options.width || 40;
    this.height = options.height || 65;
    this.frame = options.frame || 0;
    this.direction = options.direction || 0;
    this.imgSrc = options.imgSrc;
    this.image = new Image();
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.step = options.step || 1;
    this.context = options.context;

    this.timer = null;
    this.isWalking = false;

    this.init();
}

// 方法
Baby.prototype = {
    constructor: Baby,
    update: function(){
        // 获取canvas的宽和高
        var w = this.context.canvas.width, 
            h = this.context.canvas.height;

        // 1 更新帧
        this.frame = ++this.frame % 4;
        // 2 更新baby的位置
        switch( this.direction ){
            case 0: // down
                this.y += this.step;
                if( this.y >= h ){
                    this.y = -this.height - 10;
                }
                break;
            case 1: // left
                this.x -= this.step;
                if( this.x <= -this.width ){
                    this.x = w + 10;
                }
                break;
            case 2: // right
                this.x += this.step;
                if( this.x >= w ){
                    this.x = -this.width - 10;
                }
                break;
            case 3: // up
                this.y -= this.step;
                if( this.y <= -this.height ){
                    this.y = h + 10;
                }
                break;
        }
    }, // 更新状态
    draw: function(){
        var context = this.context;
        var w = context.canvas.width,
            h = context.canvas.height;
        // 1 清除画布
        context.clearRect( 0, 0, w, h );
        // 2 绘制小人图片
        context.drawImage( this.image, 
                this.frame * this.width, this.direction * this.height, this.width, this.height,
                this.x, this.y, this.width, this.height );
    },   // 根据状态绘制baby图片
    start: function(){
        var self = this;
        this.isWalking = true;
        this.timer = window.setInterval( function(){
            self.update();
            self.draw();
        }, 80 );
    },  // 开始动画
    stop: function(){
        this.isWalking = false;
        window.clearInterval( this.timer );
    },   // 停止动画
    bind: function(){
        var self = this;
        window.document.addEventListener( 'keydown', function( e ){
            // keycode
            var keycode = e.keyCode;
            // 1 判断是否按下空格建
            if( keycode == 32 ){
                if( self.isWalking ){
                    self.stop();
                } else {
                    self.start();
                }
            }

            console.log( keycode );

            // 2 如果动画已经停止了，那么下面代码不需要执行
            if( !self.isWalking ){
                return;
            }
            
            // 3 如果正在执行动画, 去监听键盘。改变方向
            switch( keycode ){
                case 38:
                case 87: // up
                    self.direction = 3;
                    break;
                case 39:
                case 68: // right
                    self.direction = 2;
                    break;
                case 40:
                case 83: // down
                    self.direction = 0;
                    break;
                case 37:
                case 65: // left
                    self.direction = 1;
                    break;
            }
        } );
    },   // 事件绑定
    init: function(){
        var self = this;
        // 图片加载完成后，绑定事件并绘制一次图片。
        this.image.addEventListener( 'load', function(){
            self.bind();
            self.draw();
        } );
        this.image.src = this.imgSrc;
    }    // 初始化动画（保证图片已加载）
}
// 测试用例
new Baby( {
    imgSrc: './imgs/NPCrabbitbaby.png',
    context: document.getElementById( 'canvas' ).getContext( '2d' ),
    step: 5
} );