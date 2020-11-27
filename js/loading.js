// LOADING

var myVar;

function myFunction() {
    document.querySelector('header').style.display = "none";
    document.querySelector('section').style.display = "none";
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById("loading").style.display = "none";
    $(document.body).css({
        "overflow-x": "auto",
        "overflow-y": "auto"
    });
    document.querySelector('header').style.display = "block";
    document.querySelector('section').style.display = "block";

}