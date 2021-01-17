$(document).ready(function(){ /* espera a página carregar */

    /* mantém a página atual selecionada na navbar com um border-bottom - desktop */
    $(".menu-desktop li a").click(function(){
        $(".menu-desktop li a").removeClass("active")
        $(this).addClass("active");
    })

    /* mantém a página atual selecionada na navbar com um border-bottom - mobile */
    $(".menu-mobile li a").click(function(){
        $(".menu-mobile li a").removeClass("active")
        $(this).addClass("active");
    })
    
    /* função que chama o modal */
    function callModal(){
        $(".modal").modal({
            fadeDuration: 500,
            clickClose: true
        })
    }
    
    /* modal ativado em cada link da navbar abaixo */
    $(".art-page").click(function(e){
        callModal();
    })
    
    $(".writing-page").click(function(e){
        callModal();
    })
    
    $(".fashion-page").click(function(e){
        callModal();
    })
    
    $(".video-page").click(function(e){
        callModal();
    })
    
    $(".magazine-page").click(function(e){
        callModal();
    })
    
    $(".submit-page").click(function(e){
        callModal();
    })
    
    
    /* efeito scroll da página "lorem-ipsum" */
    function animeScroll(){
        
        var scroll_value = $(window).scrollTop() /* distância percorrida pelo scroll */
        var windowHeight = $(window).height() * 3/4;
        $(".anime").each(function(){
            var itemTop = $(this).offset().top; /* distancia entre o item "description-box" e o topo */
            if(scroll_value > itemTop - windowHeight){
                $(this).addClass("animate");
            }
        }); 
        
    }
    
    $(document).scroll(function() {
        animeScroll();
    });

    animeScroll();
    
    /* efeito máquina de escrever do título(h3) da página "lorem ipsum" */
    function typeWrite(e) {
        const textoArray = e.innerHTML.split('');
        e.innerHTML = ' ';
        textoArray.forEach(function (letter, i) {
            setTimeout(function () {
                e.innerHTML += letter;
            }, 80 * i);
        });
    }

    const phrase = document.querySelector('.title h3');

    typeWrite(phrase);
    
});
