function checkuppercase(){
    let a = document.getElementById("input").value;
    
    if (a.match(/^[A-Z]/g)==null)
    document.getElementById("print").innerHTML = "First character is Lowecase";
    else
    document.getElementById("print").innerHTML ="First character is Uppercase";
}