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

})
