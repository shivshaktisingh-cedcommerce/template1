function myFunction() 
{
    var counter=0;
    const product = ["Samsung", "Galaxy", "64", "15000","Nokia", "S730", "128", "22000","Xiaomi", "Note", "32", "12000","Motorola", "G10", "32", "15000","Apple", "S12", "64", "25000"];
    var table = document.getElementById("proTable");
    for(var i=0;i<5;i++)
    {
        for(var j=0;j<4;)
        {
            var row = proTable.insertRow(+proTable.rows.length - 1);
            var cell1 = row.insertCell(j);
            cell1.innerHTML = product[counter];
            counter++;
            j++;
            var cell2 = row.insertCell(j);
            cell2.innerHTML = product[counter];
            counter++;
            j++;
            var cell3 = row.insertCell(j);
            cell3.innerHTML = product[counter];
            counter++;
            j++;
            var cell4 = row.insertCell(j);
            cell4.innerHTML = product[counter];
            counter++;
            j++;

        }
    }
}