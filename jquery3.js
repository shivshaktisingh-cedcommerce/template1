$(document).ready(function(){
    $("#submit").click(function(){
    if ($('#fname').val() == "") {
         alert("Blank Field");
         $("#fname").css('backgrond-color','red');
    }
    else if ($('#lname').val() == "")
    {
         alert("Blank Field");
         $("#lname").css('background-color','red');
    }
});
});