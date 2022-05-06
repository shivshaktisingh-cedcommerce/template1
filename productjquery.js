$(document).ready(function(){
const products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"	
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"
}];


 
   
    
    $(document).ready(function(){
      $("#brand").change(function(){
        var table = document.getElementById("myTable"); 
        table.innerHTML="";
        for(let i=0;i<products.length;i++){
            if ($('#brand').val() == products[i].brand){
                console.log(products[i].brand);
            var row = "<tr><td> "+products[i].id+" </td><td> "+products[i].name+" </td><td> "+products[i].brand+"</td><td>"+products[i].os+" </td><td> <button type='button'>X</button> </td</tr>";
            $("#myTable").append(row); 
        }
    }
      });
    });

   
 
  
 
        $("#os1").change(function(){
            
            var table = document.getElementById("myTable"); 
            table.innerHTML="";
            for(let i=0;i<products.length;i++){
            if ($('#os1').val() == products[i].os){
            var row = "<tr><td> "+products[i].id+" </td><td> "+products[i].name+" </td><td> "+products[i].brand+"</td><td>"+products[i].os+" </td><td> <button type='button'>X</button></td></tr>";
            $("#myTable").append(row); 
          }
        }
        });


        $("#srch").click(function(){
      
        var table = document.getElementById("mynewTable"); 
            table.innerHTML="";
            for(let i=0;i<products.length;i++){
            if ($('#search').val() == products[i].name || $('#search').val() == products[i].id){
            var row = "<tr><td> "+products[i].id+" </td><td> "+products[i].name+" </td><td> "+products[i].brand+"</td><td>"+products[i].os+" </td></tr>";
                $("#mynewTable").append(row);  
            }
        }
      });
     
      $("#divInner") .on("click","button",function(){
        $(this).parent().parent().hide();
      });
    
    });


  