total=0;
 product=[];
 product[0]={company:"samsung",model:"galaxy",memory:64,price:15000};
 product[1]={company:"nokia",model:"S730",memory:128,price:22000};
 product[2]={company:"xiaomi",model:"note",memory:32,price:12000};
 product[3]={company:"motorola",model:"G10",memory:32,price:15000};
 product[4]={company:"apple",model:"S12",memory:64,price:25000};
 
 product[0].quantity=20;
 product[1].quantity=20;
 product[2].quantity=20;
 product[3].quantity=20;
 product[4].quantity=20;



 /////task 1 of creating table using onload function and displaying all the data




 function displayTable() {
  for( i=0;i<5;i++){ 
    var row = disTable.insertRow(disTable.rows.length - 1);
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


//// task 2 of searching table on basis of product or model or memory or price starts here


function searching(){
  comp = document.getElementById("pro").value;
  search = document.getElementById("sea").value;
  for(i=0;i<5;i++){
    if(comp=="company"){
      if(search==product[i].company){
        var table = document.getElementById("sTable");
        table.innerHTML="";
        for(var j=0;j<1;j++){
          var row = sTable.insertRow(sTable.rows.length - 1);
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
    else if (comp=="model"){
      if (search==product[i].model){
        var table = document.getElementById("sTable");
        table.innerHTML="";
        var row = sTable.insertRow(sTable.rows.length - 1);
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
    else if (comp=="memory"){ 
      var table = document.getElementById("sTable"); 
      table.innerHTML="";
      for(k=0;k<5;k++){
        if (search==product[k].memory){
          var row = sTable.insertRow(sTable.rows.length - 1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = product[k].company;
 
          var cell2 = row.insertCell(1);
          cell2.innerHTML = product[k].model;
 
          var cell3 = row.insertCell(2);
          cell3.innerHTML = product[k].memory;
 
          var cell4 = row.insertCell(3);
          cell4.innerHTML = product[k].price; 
        } 
      }
    }
    else if (comp=="price"){
      var table = document.getElementById("sTable"); 
      table.innerHTML="";
      for(k=0;k<5;k++){
        if (search==product[k].price){
          var row = sTable.insertRow(sTable.rows.length - 1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = product[k].company;
 
          var cell2 = row.insertCell(1);
          cell2.innerHTML = product[k].model;
 
          var cell3 = row.insertCell(2);
          cell3.innerHTML = product[k].memory;
 
          var cell4 = row.insertCell(3);
          cell4.innerHTML = product[k].price; 
         }
      }
    }
  }
}

 //task 3 of orderBy function started here

function orderBy(){ 
   var table = document.getElementById("broTable"); 
   table.innerHTML="";
   order = document.getElementById("order").value;
   search = document.getElementById("bro").value;
   table.innerHTML="";
   for(i=0;i<5;i++){
     if(order=="Ascending"){
       if(search=="company"){ 
         for(var i=0;i<5;i++){ 
           product.sort(function(x,y){
             let a=x.company.toUpperCase();
             let b=y.company.toUpperCase();
             return a==b?0:a>b?1:-1;
           });
           var row = broTable.insertRow(broTable.rows.length - 1);
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
       else if (search=="model"){ 
         for(var i=0;i<5;i++){
           product.sort(function(x,y){
             let a=x.model.toUpperCase();
             let b=y.model.toUpperCase();
             return a==b?0:a>b?1:-1;
           });
           var row = broTable.insertRow(+broTable.rows.length - 1);
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
      else if (search=="memory"){ 
        for(var i=0;i<5;i++){
          product.sort(function(a, b) {
            return a - b;
          });
          var row = broTable.insertRow(broTable.rows.length - 1);
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
      else if(search="price"){ 
        for(var i=0;i<5;i++){
          product.sort(function(a, b) {
            return a - b;
          });
          var row = broTable.insertRow(broTable.rows.length - 1);
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
    else {
      if (search=="company"){ 
        for(var i=0;i<5;i++){
          product.sort(function(x,y){
            let a=x.company.toUpperCase();
            let b=y.company.toUpperCase();
            return a==b?0:a>b?-1:1;
          });
          var row = broTable.insertRow(broTable.rows.length - 1);
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
      else if (search=="model"){ 
        for(var i=0;i<5;i++){
          product.sort(function(x,y){
            let a=x.model.toUpperCase();
            let b=y.model.toUpperCase();
            return a==b?0:a>b?-1:1;
          });
          var row = broTable.insertRow(broTable.rows.length - 1);
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
      else if (search=="memory"){ 
        for(var i=0;i<5;i++){
          product.sort(function(a, b) {
            return b - a;
          });
          var row = broTable.insertRow(broTable.rows.length - 1);
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
      else if(search == "price"){ 
        for(var i=0;i<5;i++){
          product.sort(function(a, b) {
            return b - a;
          });
          var row = broTable.insertRow(broTable.rows.length - 1);
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
  }
}



 //task 4 adNewProduct function started here



function addNewProduct(){
  var company = document.getElementById("company").value;
  var model = document.getElementById("model").value;
  var memory = document.getElementById("memory").value;
  var price = document.getElementById("price").value;
  var table = document.getElementById("npTable"); 
  table.innerHTML="";
  product.push({'company':company,'model':model,'memory':memory,'price':price});
  for(i=0;i<6;i++){
    var row = npTable.insertRow(npTable.rows.length - 1);
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


//task 5 adding and generating bill function



function addingquan(){
  var set = document.getElementById("cm").value;
  var quantit = document.getElementById("num").value;
  if(set=="samsung galaxy"){
    total = total + quantit * product[0].price; 
    var row = addTable.insertRow(addTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[0].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = quantit;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = quantit * product[0].price;
  }
  else if(set=="nokia S730"){
    total = total + quantit * product[1].price;
    var row = addTable.insertRow(addTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[1].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = quantit;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = quantit * product[1].price;
  }
  else if(set=="xiaomi note"){
    total = total + quantit*product[2].price;
    var row = addTable.insertRow(addTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[2].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = quantit;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = quantit * product[2].price;
  }
 
  else if(set=="motorola g10"){
    total = total + quantit * product[3].price;
    var row = addTable.insertRow(addTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[3].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = quantit;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = quantit * product[3].price;
  }
  else if(set=="apple S12"){
    total = total + quantit * product[4].price;
    var row = addTable.insertRow(addTable.rows.length -1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[4].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = quantit;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = quantit * product[4].price;
  }
}


function billingquan(){
  var row = billTable.insertRow(billTable.rows.length - 1);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = "Total";
  cell1.width="150px";
 
  var cell2 = row.insertCell(1);
  cell2.innerHTML = total;
 }

////////task 6 of deleting a row by checkbox started here

 function del(){
  var checkarr=[];
    if(!document.getElementById("sam1").checked){
    checkarr.push(0);
    }
    if(!document.getElementById("nokia1").checked){
    checkarr.push(1);
    }
    if(!document.getElementById("xiaomi1").checked){
    checkarr.push(2);
    }
    if(!document.getElementById("motorola1").checked){
    checkarr.push(3);
    }
    if(!document.getElementById("apple1").checked){
    checkarr.push(4);
    }
    let text ="<table>";
    for(i=0;i<checkarr.length;i++){
      text+= "<tr><td>" + checkarr[i].company + "</td><td>" + checkarr[i].model + "</td><td>" + checkarr[i].memory + "</td><td>" + checkarr[i].price + "</td></tr>";
    }
    text+="</table>";
    document.getElementById("demo").innerHTML = text;
 
}
 
/////task 7 updating quantity

function updatequan(){
  var companyname = document.getElementById("comp1").value;
  var quanti = document.getElementById("numbe").value;
  if(companyname=="samsung"){
    var row = qTable.insertRow(qTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[0].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = product[0].model;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = product[0].memory;
 
    var cell4 = row.insertCell(3);
    cell4.innerHTML = product[0].price;

    var cell5 = row.insertCell(4);
    cell5.innerHTML = quanti;
  }
  else if(companyname=="nokia"){
    var row = qTable.insertRow(qTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[1].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = product[1].model;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = product[1].memory;
 
    var cell4 = row.insertCell(3);
    cell4.innerHTML = product[1].price;

    var cell5 = row.insertCell(4);
    cell5.innerHTML = quanti;
  }
  else if(companyname=="apple"){
    var row = qTable.insertRow(qTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[2].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = product[2].model;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = product[2].memory;
 
    var cell4 = row.insertCell(3);
    cell4.innerHTML = product[2].price;

    var cell5 = row.insertCell(4);
    cell5.innerHTML = quanti;
  }
  else if(companyname=="xiaomi"){
    var row = qTable.insertRow(qTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[3].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = product[3].model;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = product[3].memory;
 
    var cell4 = row.insertCell(3);
    cell4.innerHTML = product[3].price;

    var cell5 = row.insertCell(4);
    cell5.innerHTML = quanti;
  }
  else if(companyname=="motorola"){
    var row = qTable.insertRow(qTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[4].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = product[4].model;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = product[4].memory;
 
    var cell4 = row.insertCell(3);
    cell4.innerHTML = product[4].price;

    var cell5 = row.insertCell(4);
    cell5.innerHTML = quanti;
  }
}


//////task 8 to give rating to product

function rating(){
  var brand = document.getElementById("brnd").value;
  var rate = document.getElementById("rt").value;
  if(brand==product[0].company){ 
    var row = rateTable.insertRow(rateTable.rows.length - 1);
 
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[0].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = product[0].model;
  
    var cell3 = row.insertCell(2);
    cell3.innerHTML = product[0].memory;
  
    var cell4 = row.insertCell(3);
    cell4.innerHTML = product[0].price;
  
    var cell5 = row.insertCell(4);
    cell5.innerHTML = rate;
  }
  else if(brand==product[1].company){ 
    var row = rateTable.insertRow(rateTable.rows.length - 1);
 
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[1].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = product[1].model;
  
    var cell3 = row.insertCell(2);
    cell3.innerHTML = product[1].memory;
  
    var cell4 = row.insertCell(3);
    cell4.innerHTML = product[1].price;
  
    var cell5 = row.insertCell(4);
    cell5.innerHTML = rate;
  }
  else if(brand==product[2].company){ 
    var row = rateTable.insertRow(rateTable.rows.length - 1);
 
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[2].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = product[2].model;
  
    var cell3 = row.insertCell(2);
    cell3.innerHTML = product[2].memory;
  
    var cell4 = row.insertCell(3);
    cell4.innerHTML = product[2].price;
  
    var cell5 = row.insertCell(4);
    cell5.innerHTML = rate;
  }
  else if(brand==product[3].company){ 
    var row = rateTable.insertRow(rateTable.rows.length - 1);
 
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[3].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = product[3].model;
  
    var cell3 = row.insertCell(2);
    cell3.innerHTML = product[3].memory;
  
    var cell4 = row.insertCell(3);
    cell4.innerHTML = product[3].price;
  
    var cell5 = row.insertCell(4);
    cell5.innerHTML = rate;
  }
  else if(brand==product[4].company){ 
    var row = rateTable.insertRow(rateTable.rows.length - 1);
 
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[4].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = product[4].model;
  
    var cell3 = row.insertCell(2);
    cell3.innerHTML = product[4].memory;
  
    var cell4 = row.insertCell(3);
    cell4.innerHTML = product[4].price;
  
    var cell5 = row.insertCell(4);
    cell5.innerHTML = rate;
  }
}
 
/////// task 9  function to find product in between choosen price


 
 function minmaxPrice(){
   var min = document.getElementById("min").value;
   var max = document.getElementById("max").value;
   var table = document.getElementById("minTable");
        table.innerHTML="";
   for(i=0;i<5;i++){
     if ((min< product[i].price) && (product[i].price<max)){
       var row = minTable.insertRow(minTable.rows.length - 1);

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


 

 

function addonemorequant(){
 
  var productmodel = document.getElementById("quanpro").value;
  var quantity1 = document.getElementById("quannum").value;
  if(productmodel=="samsung galaxy"){
    product[0].quantity = product[0].quantity - quantity1;
    var row = newquantityTable.insertRow(newquantityTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[0].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = product[0].model;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = product[0].memory;
 
    var cell4= row.insertCell(3);
    cell4.innerHTML = product[0].price;

    var cell5 = row.insertCell(4);
    cell5.innerHTML = product[0].quantity;
  }
  else if(productmodel=="nokia S730"){
    product[1].quantity = product[1].quantity - quantity1; 
    var row = newquantityTable.insertRow(newquantityTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[1].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = product[1].model;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = product[1].memory;
 
    var cell4= row.insertCell(3);
    cell4.innerHTML = product[1].price;
 
    var cell5 = row.insertCell(4);
    cell5.innerHTML = product[1].quantity;
  }
  else if(productmodel=="xiaomi note"){
    product[2].quantity = product[2].quantity - quantity1;
    var row = newquantityTable.insertRow(newquantityTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[2].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = product[2].model;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = product[2].memory;
 
    var cell4= row.insertCell(3);
    cell4.innerHTML = product[2].price;

    var cell5 = row.insertCell(4);
    cell5.innerHTML = product[2].quantity;
  }
  else if(productmodel=="motorola g10"){ 
    product[3].quantity = product[3].quantity - quantity1;
    var row = newquantityTable.insertRow(newquantityTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[3].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = product[3].model;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = product[3].memory;
 
    var cell4= row.insertCell(3);
    cell4.innerHTML = product[3].price;
 
    var cell5 = row.insertCell(4);
    cell5.innerHTML = product[3].quantity;
  }
  else if(productmodel=="apple S12"){
    product[4].quantity = product[4].quantity - quantity1;
    var row = newquantityTable.insertRow(newquantityTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[4].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = product[4].model;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = product[4].memory;
 
    var cell4= row.insertCell(3);
    cell4.innerHTML = product[4].price;
 
    var cell5 = row.insertCell(4);
    cell5.innerHTML = product[4].quantity;
  }
 


}
 
