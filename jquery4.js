
$(document).ready(function(){
    $("#add").click(function(){
        var row = "<tr><td><input type='text'placeholder= 'Enter class'>  </td><td><input type='text'placeholder= 'Enter board'> </td><td><input type='text'placeholder= 'Enter marks'> </td><td> <input type='text'placeholder= 'Enter division'></td><td> </td><td> </td></tr>";
        $("table tbody").append(row);
        });
      });

$(document).ready(function(){
    $('#delete').click(function(){
   
    
    $('#delete').click(function(){
        var rowCount = $('#myTable tr').length;
        if(rowCount>1)
        {
            $('#myTable tr:last').remove();
        }
    });
   
});
});

