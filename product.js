function myFunction()
{
    pid=document.getElementById("pid").value;
    pname=document.getElementById("pname").value;
    pprice=document.getElementById("pprice").value;
    var table = document.getElementById("myTable");
    var row = myTable.insertRow(+myTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    
    cell1.innerHTML = pid;
    cell2.innerHTML = pname;
    cell3.innerHTML = pprice;
}
   
