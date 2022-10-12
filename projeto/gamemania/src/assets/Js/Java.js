 $(document).ready(function(){

    $("#voltar").click(()=>{
        scrollTo(0,0)
    })
})

function abrirMenu() {
    document.getElementById("menu").style.width = "350px";
}
function fecharMenu() {
    document.getElementById("menu").style.width = "0px";
}


