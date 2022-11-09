//calculate total
function score() {
    var total = 0;
    var input = document.form1.singleInput;
    console.log(input)

    for (var i = 0; i < input.length; i++) {
        if (input[i].checked) {
            total += parseInt(input[i].value);
        }
    }

    var display = Math.round(100 - (100 / 45) * total);
    window.alert("Your score is " + display);

}

//reset
function uncheck() {
    var input = document.querySelectorAll('.singleInput');
    for (var x = 0; x < input.length; x++) {
        input[x].checked = false;
    }
}