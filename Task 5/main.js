function checkemail(){
    let a = document.getElementById("input").value;
    
    if (a.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g)!=null)
    document.getElementById("print").innerHTML = "It is a valid Email";
    else
    document.getElementById("print").innerHTML ="It is not a valid Email";
}
