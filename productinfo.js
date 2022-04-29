function myFunction() 
{
    
    const product=[];
    product[0]={company:"samsung",model:"Galaxy",memory:"64",price:"15000"};
    product[1]={company:"Nokia",model:"S730",memory:"128",price:"22000"};
    product[2]={company:"xiaomi",model:"note",memory:"32",price:"12000"};
    product[3]={company:"motorola",model:"G10",memory:"32",price:"15000"};
    product[4]={company:"Apple",model:"S12",memory:"64",price:"25000"};
    var table = document.getElementById("proTable");
    for(var i=0;i<5;i++)
    {
        for(var j=0;j<1;j++)
        {
            var row = proTable.insertRow(+proTable.rows.length - 1);
            var cell1 = row.insertCell(0);
            cell1.innerHTML = product[i].company;
            
            var cell2 = row.insertCell(1);
            cell2.innerHTML = product[i].model;
            
            var cell3 = row.insertCell(2);
            cell3.innerHTML = product[i].memory;
            
            var cell4 = row.insertCell(3);
            cell4.innerHTML = product[i].price;
            

        }
    }
}