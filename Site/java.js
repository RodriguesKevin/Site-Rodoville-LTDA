/* CABEÇALHO */
var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content =  document.getElementById('content')
var showSidebar =false;

function toggleSidebar()
{
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        navigationHeader.style.marginLeft='-10vw';
        navigationHeader.style.animationName="showSidebar";
        content.style.filter='blur(2px)'
        
        //true
    }
    else
    {
        navigationHeader.style.marginLeft='-100vw';
        navigationHeader.style.animationName="";
        content.style.filter=''
        
        // false
    }
}
function closeSidebar()
{
    if(showSidebar)
    {
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event){
    if(this.window.innerWidth>768 && showSidebar)
    {
        toggleSidebar();
    }
});

/* SLIDE */
let contador =1;
setInterval(function() {
    document.getElementById('slide' + contador).checked=true;
    contador++;

    if(contador >4){
        contador=1;

    }
},6000);
/*SERVIÇOS*/
document.querySelectorAll('.min_img img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}
