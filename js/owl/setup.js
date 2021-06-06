$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function carregar(){
    window.open("https://www.themoviedb.org/tv/82856-the-mandalorian?language=pt-BR");
}

function play(){
    window.location.href = "https://www.disneyplus.com/pt-br/welcome/the-mandalorian?cid=DSS-Search-Google-71700000075796433-&s_kwcid=AL!8468!3!494959424532!e!!g!!mandalorian&gclid=Cj0KCQjwweyFBhDvARIsAA67M73QThteevAtsSb4K3cR7T0TOJXVMVF_7hJxKU2NCjkwAFKa53n8QcQaAhvwEALw_wcB&gclsrc=aw.ds"
}