$(document).ready(function(){
  $("#inner") .on("click","button",function(){
      
        var name = window. prompt("Enter the new product name: "); 
        var row = "<li> "+ name +" <button type='submit' value='+''>+</button></li>";
        $(this).parent().parent().append(row);
        });
      });