var number = 0;

function addGuest(){
    number++

    var container = document.getElementById("rvsp");
    var newInput = document.createElement("p");

    var newLabel = newInput.appendChild(document.createElement("label"));
    newLabel.innerHTML = "Convidado " + number;

    container.appendChild(newInput);

    var input = document.createElement("input");
    input.type = "text";
    input.name = "convidado "+(number);
    input.className += "w-100";
    newLabel.appendChild(input);
}