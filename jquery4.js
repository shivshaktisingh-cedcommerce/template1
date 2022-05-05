
$(document).ready(function(){
    $("#add").click(function(){
        var row = "<tr><td><input type='text'placeholder= 'Enter class'>  </td><td><input type='text'placeholder= 'Enter board'> </td><td><input type='text'placeholder= 'Enter marks'> </td><td> <input type='text'placeholder= 'Enter division'></td><td> </td><td> </td></tr>";
        $("table tbody").append(row);
        });
      });

$(document).ready(function(){
    $('#delete').click(function(){
   
    
    $('#delete').click(function(){
        //$('#myTable tr:last').remove();
        $('#myTable tr').slice(-1).remove();
    });
   
});
});

