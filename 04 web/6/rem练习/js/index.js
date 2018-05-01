window.onload=function(){

    function setRem(){
        var w=document.documentElement.clientWidth;
        if(w>640){
            w=640;
        }
        document.querySelector('html').style.fontSize=w/20+'px';
    }
    setRem();
    window.onresize=function(){
        setRem();
    }
}