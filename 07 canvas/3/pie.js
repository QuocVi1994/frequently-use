( function( window ){
    var document = window.document;
    function Pie( options ){
        extend( this, pieSettings, options );
        this.canvas = document.createElement( 'canvas' );
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasheight;
        this.context = this.canvas.getContext( '2d' );
        this.draw();
    }
    Pie.prototype = {
        contructor: Pie,
        drawTitle: function(){
            var context = this.context;
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.font = this.font + 'px ' + this.fontFamily;
            context.fillText( this.data.title, this.x0, this.font );
        },
        drawTip: function(){
            var context = this.context;
            var list = this.data.list,
                tipAngle,
                start = this.start;

            var tipLength = this.radius + 16;

            var self = this;

            list.forEach( function( v, i ){
                var x0 = self.x0,
                    y0 = self.y0;

                var align = 'right',
                    tipExtend = -16;

                tipAngle = start + v.angle / 2;
                if( tipAngle > -Math.PI / 2 && tipAngle <= Math.PI / 2 ){
                    align = 'left';
                    tipExtend = -tipExtend;
                }
                context.beginPath();
                context.moveTo( x0, y0 );
                context.lineTo( 
                        x0 + tipLength * Math.cos( tipAngle ), 
                        y0 + tipLength * Math.sin( tipAngle ) );
                context.lineTo( 
                        x0 + tipLength * Math.cos( tipAngle ) + tipExtend,
                        y0 + tipLength * Math.sin( tipAngle ) );
                context.strokeStyle = self.colors[ i ];
                context.stroke();
                context.font = '12px Consola';
                context.textAlign = align;
                context.textBaseline = 'bottom';
                context.fillStyle = self.colors[ i ];
                context.fillText( ' ' + v.name + ' : ' + v.value + ' ', 
                        x0 + tipLength * Math.cos( tipAngle ) + tipExtend,
                        y0 + tipLength * Math.sin( tipAngle ) );
                context.textBaseline = 'top';
                context.fillText( ' Percent : ' + ( v.value * 100 / self.total ).toFixed( 2 ) + '% ', 
                        x0 + tipLength * Math.cos( tipAngle ) + tipExtend,
                        y0 + tipLength * Math.sin( tipAngle ) );
                start += v.angle; 
            } );
        },
        draw: function(){
            var x0 = this.x0,
                y0 = this.y0;
            var context = this.context,
                start = this.start;
            var list = this.data.list,
                sum = 0;

            var self = this;

            this.drawTitle();

            list.forEach( function( v ){
                sum += v.value;
            } );

            this.total = sum;
            list.forEach( function( v, i ){
               v.angle = v.value * 2 * Math.PI / sum;
               var end = start + v.angle;
               context.beginPath();
               context.moveTo( x0, y0 );
               context.arc( x0, y0, self.radius, start, end );
               context.closePath();
               context.strokeStyle = context.fillStyle = self.colors[ i ];
               context.stroke();
               context.fill();

               start = end;
            } );

            this.drawTip();

            document.querySelector( this.target ).appendChild( this.canvas );
        }
    };
    var pieSettings = {
        canvasWidth: 600,
        canvasheight: 400,
        radius: 140,
        x0: 300,
        y0: 200 + 24,
        font: 24,
        fontFamily: 'Consola',
        colors: 'darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray'.split( ',' ),
        start: -Math.PI / 2
    };
    function extend( target ){
        if( !target ){
            return;
        }

        var args = arguments,
            i = 1,
            l = args.length;

        var k, obj;

        for( ; i < l; i++ ){
            obj = args[ i ];
            for( k in obj ){
                if( obj.hasOwnProperty( k ) ){
                    target[ k ] = obj[ k ];
                }
            }
        } 

        return target;
    }

    window.Pie = Pie;
} )( window );

new Pie( {
    target: '#pie',
    data: { 
        title: '统计即时通讯工具的使用情况',
        list: [ 
            { name: 'QQ', value: 500 },           
            { name: 'feiQ', value: 50 },
            { name: 'momo', value: 200 },
            { name: 'tantan', value: 300 },
            { name: 'YY', value: 150 },
            { name: 'wechat', value: 600 },
            { name: 'DingDing', value: 100 }
        ] 
    }
} );