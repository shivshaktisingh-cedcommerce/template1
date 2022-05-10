var product=[];
$(document).ready(function(){
    $("#add_product").click(function(){
      var productSku=$("#product_sku").val();
      var productName=$("#product_name").val();
      var productPrice=$("#product_price").val();
      var productQuantity=$("#product_quantity").val();
      $("#product_sku").css("border", "1px solid black");
      $("#product_name").css("border", "1px solid black");
      $("#product_price").css("border", "1px solid black");
      $("#product_quantity").css("border", "1px solid black");
      if((productSku=="" || productName=="" || productPrice == "" || productQuantity == ""))
     {
      alert("Empty fields are not allowed");
      $(".error"). css("display", "block");
      return;
     }
     else
     {
     if((isNaN(productSku)))
     {
     alert("SKU should be integer only");
     $("#product_sku").css("border", "1px solid red");
     $(".error"). css("display", "block");
     return;
     }
     if(!(typeof(productName) === "string"))
     {
     alert("product name should be string only");
     $("#product_name").css("border", "1px solid red");
     $(".error"). css("display", "block");
     return;
     }
     if((isNaN(productPrice)))
     {
     alert("product price should be integer only");
     $("#product_price").css("border", "1px solid red");
     $(".error"). css("display", "block");
     return;
     }
     if(isNaN(productQuantity))
     {
     alert("productQuantity should be integer only");
     $("#product_quantity").css("border", "1px solid red");
     $(".error"). css("display", "block");
     return;
     }
     else
     {
     displayData();
    
     }    
   }
  function displayData()
    {
      $('#myTable').append( '<tr><td>' + productSku +   '</td><td>'  + productName +'</td><td>$' +productPrice+ '.00</td><td>' +productQuantity+ '</td><td><a class="edit" href = "#">Edit</a><a class="delete" href = "#">Delete</a></td></tr>');
      $("#success"). css("display", "block");
      $("#product_sku").css("border", "1px solid black");
      $("#product_name").css("border", "1px solid black");
      $("#product_price").css("border", "1px solid black");
      $("#product_quantity").css("border", "1px solid black");
     // $("#product_sku").val()="";
     // $("#product_name").val()="";
     // $("#product_price").val()="";
     // $("#product_quantity").val()="";
      product.push([productSku,productName,productprice,productQuantity]);
      
    }
 });

    $("#myTable").on("click", ".delete", function() {
      if (!confirm("Are you sure you want to delete?")) return;
      $(this).closest("tr").remove();
    });  

    $("#notification").on("click", ".close", function() {
      $(this).closest("div").remove();
    });    
    
      $("#myTable").on("click",".edit",function(){
      $("#product_sku").val($(this).closest('tr').children().first().text());
      $("#product_name").val($(this).closest('tr').children().first().next().text());
      $("#product_price").val($(this).closest('tr').children().first().next().next().text());
      $("#product_quantity").val($(this).closest('tr').children().first().next().next().next().text());
      $("#add_product").val("Update");
      let temp=[];
      let productNewSku=$("#product_sku").val();
      let productNewName=$("#product_name").val();
      let productNewPrice=$("#product_price").val();
      let productNewQuantity=$("#product_quantity").val();
      var row_index = $(this).parent().parent().index('tr');
      $(this).parent().parent().remove();
      var html = '<td>'+productNewSku+'</td><td>'+productNewName+'</td><td>'+productNewPrice+'</td><td>'+productNewQuantity+'</td>';
      $('table > tbody > tr').eq(row_index).next(html);
      $("#add_product").val("ADD PRODUCT");

      
      
    // $(this).parents(row_index).find("td:eq(0)").text(productNewSku);
    // $(this).parents(row_index).find("td:eq(1)").text(productNewName);
    // $(this).parents(row_index).find("td:eq(2)").text(productNewPrice);
    // $(this).parents(row_index).find("td:eq(3)").text(productNewQuantity);
   // $(this).closest('tr').children().first().html(productNewSku);
  // $(this).closest('tr').children().first().next().html(productNewName);
    //$(this).closest('tr').children().first().next().next().html(productNewPrice);
    //$(this).closest('tr').children().first().next().next().html(productNewQuantity);
    
    });

    
   

});