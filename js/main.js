document.getElementById("answer").onclick = function () {
    dengiEl = document.getElementById("dengi").value;
    kursEl = document.getElementById("kurs").value;
    document.getElementById("otvet").innerHTML = eval(dengiEl / kursEl);
}