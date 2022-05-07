//const product=[
//{"Name":"Dufflebag",
//"size":["small","large"],
//"color":["red","green"],
//"price"}


function price(idName)
{
  
  var price=$("#"+idName).val();
  var amt=$("#"+idName).attr("tar");
  $("#"+amt).html(price);

}