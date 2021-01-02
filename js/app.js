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
    
    /* função que chama o modal assim que a index é carregada */
    function callModal(){
        $(".modal").modal({
            fadeDuration: 500,
            clickClose: true
        })
    }
    
    callModal();

})
