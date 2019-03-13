var number = 0;

$(document).ready(function (){
    for (let index = 0; index < 7; index++) {
        $('#holder_'+index).hide();
    }
});

function addGuest(){    
    number++
    $('#holder_'+number).toggle();
}