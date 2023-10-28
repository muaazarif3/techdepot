let menu=document.querySelector("#menu-bar");
let navigation=document.querySelector(".navigation");
let header=document.querySelector(".header");
let heading=document.querySelector(".content")
let about=document.querySelector("#aboutus");
let contact=document.querySelector("#contactus");
let product=document.querySelector("#product");



window.onscroll =() =>{
    menu.classList.remove('fa-times');
    navigation.classList.remove('active');
   

   
    var top=window.scrollY;
    if(top >=600){
        header.classList.add('active');
    }
    else if(top >=700){
        header.classList.remove('active');
    }
    else{
        header.classList.remove('active');
    }
}


menu.addEventListener("click", ()=>{
    menu.classList.toggle('fa-times');
    navigation.classList.toggle('active');
})
about.addEventListener("click" , ()=>{
    window.scrollTo( 0 ,1700); 
});
contact.addEventListener("click" , ()=>{
    window.scrollTo( 0 ,1900); 
});
product.addEventListener("click" , ()=>{
    window.scrollTo( 0 ,600); 
});




    

    

    
