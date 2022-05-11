
var products = [{ "id": 101, "name": "Basket Ball", "image": "basketball.png", "price": 150 }, { "id": 102, "name": "Football", "image": "football.png", "price": 120 }, { "id": 103, "name": "Soccer", "image": "soccer.png", "price": 110 }, { "id": 104, "name": "Table Tennis", "image": "table-tennis.png", "price": 130 }, { "id": 105, "name": "Tennis", "image": "tennis.png", "price": 100 }];
$(document).ready(function () {

    for (let i = 0; i < products.length; i++) {
        var txt = '<div id=' + products[i].id + ' class="product"><img src=' + products[i].image + '></img><h3 class="title"><a class="prodid" href="#">Product ' + products[i].id + '</a></h3><span>Price: $' + products[i].price + '.00</span><a class="add-to-cart"  pid="' + i + '" href="#">Add To Cart</a>';
        $("#products").append(txt);
    }
    $(".add-to-cart").click(function () {
            $("#empty1").attr("type", "button");
            $("#Total").attr("type", "button");
            $("#myTableHead").attr("style", "display:block");
            var pid = $(this).attr("pid");
            addToCart(pid);
      });
  
    function addToCart(i) {
       var temp= 0;

       temp=$("#id" + i).attr("status");

        if (temp != "exist") {
            row = '<tr class="'+products[i].id+'"><td>' + products[i].id + '</td><td>' + products[i].name + '</td><td>' + products[i].price + '</td><td><input class="manual" status="exist" id="id' + i + '"type="text" value="1"></td><td><button onClick="deleteRow(this.id)" class="del" id=' + products[i].id + '>Delete</button>';
            $("tbody").append(row);
            
         
        }
        else {
      
            var currentQuantity = $("#id" + i).val();
            $("#id" + i).val(++currentQuantity);
           
       
        }
    }
    $("#Total").click(function(){
        var total=0;
        for(var xx=0;xx<products.length;xx++)
      
        {
            if($("#id" + xx).val()!== undefined)
            {    
                var ff=products[xx].price;
                    total+=$("#id" + xx).val()*ff;
            }
        }
        $("#Total").val(total);

    })
    $("#empty1").click(function () {
        $("#myTable").empty();
    
    });
   

    
});
function deleteRow(r){
        // var ff=$(this).attr("id");
         $("."+r).remove();
}





