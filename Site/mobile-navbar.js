class MobileNevbar{
    constructor(mobileMenu,navList,navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList =  document.querySelector(navList);
        this.navLinks =  document.querySelectorAll(navLinks);
        this.activeClass ="active";
        
        this.handleClick= this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index)=>{
            
            link.style.animation
               ? (link.style.animation = "")
               : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animateLinks();
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if(this.mobileMenu) {
            this.addClickEvent(); 
        }
        return this;
    }
}

const mobileNevbar = new MobileNevbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNevbar.init();

let contador =1;
setInterval(function() {
    document.getElementById('slide' + contador).checked=true;
    contador++;

    if(contador >4){
        contador=1;

    }
},6000);