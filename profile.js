function login(){
    var email = document.getElementById("email").value
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    localStorage.setItem("email" , email);
    localStorage.setItem("username" , username);
    localStorage.setItem("password" , password);

    localStorage.getItem(email);
    localStorage.getItem(username);    
    localStorage.getItem(password);

}

