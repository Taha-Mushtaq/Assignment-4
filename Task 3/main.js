function checkcreditcard(){
    let a = document.getElementById("input").value;
    
    if (a.match(/^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/g)!=null)
    document.getElementById("print").innerHTML = "Credit Card is valid";
    else
    document.getElementById("print").innerHTML ="Credit Card is not valid";
}