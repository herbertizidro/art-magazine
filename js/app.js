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
            var itemTop = $(this).offset().top; /* distancia entre o item "anime" e o topo */
            if(scroll_value > itemTop - windowHeight){
                $(this).addClass("animate");
            }
        }); 
        
    }
    
    $(document).scroll(function() {
        animeScroll();
    });

    animeScroll(); /* pra que o primeiro elemento que fica mais próximo do topo da página seja animado assim que a página carregar */
    
});
