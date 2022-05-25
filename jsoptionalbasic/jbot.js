function getCheckboxValue() {  
    var l1 = document.getElementById("check1");  
    var l2 = document.getElementById("check2");  
    var l3 = document.getElementById("check3");  
    var res=" ";   
  if (l1.checked == true){  
    var pl1 = document.getElementById("check1").value;  
    res = pl1 + ",";   
  }   
  if (l2.checked == true){  
    var pl2 = document.getElementById("check2").value;  
    res = res + pl2 + ",";   
  }  
  if (l3.checked == true){  
 
    var pl3 = document.getElementById("check3").value;  
    res = res + pl3 + ",";   
  }  
 
    return document.getElementById("result").innerHTML = res;  

  } 
  
  function checkButton() {    
    var getSelectedValue = document.querySelector('input[name="gender"]:checked').value;   
    document.getElementById("d5").innerHTML = getSelectedValue;
  }
  function drodownSelect(){
    var select = document.querySelector("#qualification").value; 
    document.getElementById("d11").innerHTML = select;
  }
  function display(){
      
    var fname = document.getElementById("fname").value; 
    var lname = document.getElementById("lname").value; 
    var mail = document.getElementById("mail").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var pin = document.getElementById("pin").value;
    var state = document.getElementById("state").value;
    var password = document.getElementById("password").value;
    if((fname == "") || (lname== "") || (mail=="") || (phone== "") || (dob== "") || (address=="") || (city== "") || (pin== "") || (state=="") || (password=="")){
      alert("Fields are Empty")
    }
    else{
    
    document.getElementById("d1").innerHTML = fname;
    document.getElementById("d2").innerHTML = lname;
    document.getElementById("d3").innerHTML = mail;
    document.getElementById("d4").innerHTML = phone;
    checkButton();
    document.getElementById("d6").innerHTML = dob;
    document.getElementById("d7").innerHTML = address;
    document.getElementById("d8").innerHTML = city;
    document.getElementById("d9").innerHTML = pin;
    document.getElementById("d10").innerHTML = state;
    drodownSelect();
    getCheckboxValue();
    document.getElementById("d12").innerHTML = password;
    }
}
 