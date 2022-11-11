function count_number_words(){
    let a = document.getElementById("input").value;
    document.getElementById("print").innerHTML = a.split(" ").length;
}