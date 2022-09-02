    function logar(){
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
    
        if(email == "luis.cerutti@gmail.com" && password == "123456"){
            alert("sucesso")
            location.href = "index.html"
        }else{
            alert("Úsusario ou Senha incorretos")
        }
    }
