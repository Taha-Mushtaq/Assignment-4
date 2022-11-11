function checkvowel(){
    let a = document.getElementById("input").value;
    let result= a.match(/[aeiou]/gi).length;
    document.getElementById("print").innerHTML = result;

}