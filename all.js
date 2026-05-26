
// INDEX.HTML : HEADER

let nav = document.querySelector('.nav-container');

document.addEventListener('scroll', ()=>{
    if(scrollY > 55){
        nav.classList.add('sticky');
    }
    else{
        nav.classList.remove('sticky');
    }      
})

//LIENS ENTRE ELEMENTS DE LA BARRE DE NAV
// function 

const pageActive = window.location.pathname;
let nav_item = document.querySelectorAll('.item');

nav_item.forEach(itm =>{
    const p = itm.querySelector('a');
    if(p.href.includes(pageActive)){
        itm.classList.add('is-active');
    }

})

// ASIDE NAVIGATION

// function
function active_cleaner(x){
    x.forEach(itm =>{
        itm.classList.remove('active');
    })
};

let nav_link = document.querySelectorAll('.nav-aside ul a');
let blocs = document.querySelectorAll('.aside-linked .link');
let x = document.querySelector('.aside-linked').offsetTop;
//QUAND JE CLIQUE
nav_link.forEach(itm =>{
    itm.addEventListener('click' , ()=>{
        nav_link.forEach(x =>{
            x.classList.remove('active');
            itm.setAttribute('class','active');
        })
        
    })
})
// QUAND JE DEFILE
window.onscroll = ()=>{
    blocs.forEach(item =>{
        let top = window.scrollY;
        let offset = item.offsetTop + x - 40;
        let height = item.offsetHeight;
        let id = item.getAttribute('id');
        if(top > offset && top < height + offset){
            nav_link.forEach(item =>{
                item.classList.remove('active');
                document.querySelector('.nav-aside ul a[href*='+id+']').classList.add('active');
            })
        }
    })
}

function f(){
    var x = document.querySelectorAll('.form_1 .b input');
    var bool = false;
    x.forEach(elem => {
       if(elem.value === ""){
        bool = true;
       }
       else{
        bool = false;
       } 
    });
    if(bool === false){
        alert('vous avez reussi votre inscription. \nVous allez recevoir plus de details dans votre mail .');
    }
}