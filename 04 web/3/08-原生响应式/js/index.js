window.onload=function(){
    var btn=document.querySelector('.m-btn');
    var ul=document.querySelector('.nav-left');
    btn.onclick=function(){
        ul.classList.toggle('hidden-xs');
    }
}
