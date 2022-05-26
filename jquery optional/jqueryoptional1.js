   
user=[];
user[0]={id:"1",firstname:"keshav",lastname:"mishra",password:"Keshav123",confirm_password:"Keshav123",contact:7488140460,email:"keshavlx@gmail.com",usertype:"Admin"};
user[1]={id:"2",firstname:"sumit",lastname:"gangwar",password:"Sumit123",confirm_password:"Sumit123",contact:7852373483,email:"sumitlx@gmail.com",usertype:"User"};
user[2]={id:"3",firstname:"sachin",lastname:"kush",password:"Sachin123",confirm_password:"Sachin123",contact:7852376783,email:"sachinlx@gmail.com",usertype:"User"};

function pushdata(){
     // at least one number, one lowercase and one uppercase letter
    // at least six characters
    var passwordValidationExpression = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    var emailValidationExpression = /\S+@\S+\.\S+/;
    var nameValidationExpression = /^[a-zA-Z]+$/;
    var id = document.getElementById("idofid").value;
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var user_type = document.querySelector("#user_type").value;
   
   
    if((id=="") || (firstname=="") || (lastname=="") || (password=="") || (confirm_password=="") || (contact=="") || (email=="")){
          alert("Fields are Empty");
          return;
      }
    for(let i=0;i<user.length;i++){
        if((id==user[i].id) || (email==user[i].email)){
            alert("ID and Email must be unique");
            return;
        }
    }
    if(!(firstname.match(nameValidationExpression))){
        alert("Firstname must contain alphabets");
        return;
    }
    if(!(lastname.match(nameValidationExpression))){
        alert("Lastname must contain alphabets");
        return;
    }
    if(!(password.match(passwordValidationExpression))){
        alert("Paaword must have at least one number, one lowercase and one uppercase letter at least six characters");
        return;
    }
    if (confirm_password!=password){
        alert("confirm password is different from password");
        return;
    }
    if((isNaN(contact)) || (!(contact.length==10))){
        alert(" Contact number must be 10 digit number only");
        return;
    }
    if(!(email.match(emailValidationExpression))){ 
        alert("Type correct email Id");
        return;
    }
   
    else{
        user.push({'id':id,'firstname':firstname,'lastname':lastname,'password':password,'confirm_pasword':confirm_password,'contact':contact,'email':email,'usertype':user_type});
        alert("Successfully Registered");
        document.getElementById("idofid").value="";
        document.getElementById("fname").value="";
        document.getElementById("lname").value="";
        document.getElementById("password").value="";
        document.getElementById("confirm_password").value="";
        document.getElementById("contact").value="";
        document.getElementById("email").value="";
    }
    console.log(user);
}

function authentication(){
   
    var loginEmail = document.getElementById("loginemail").value;
    var loginPassword = document.getElementById("loginpassword").value;
    document.getElementById("loginemail").value="";
    document.getElementById("loginpassword").value="";
    for(let k=0;k<user.length;k++){
      
        if((loginEmail==user[k].email) && (loginPassword==user[k].password) && (user[k].usertype=="User")){
        
            document.getElementById("welcomemsg").innerHTML="........Welcome User.......";
        }
        else if((loginEmail==user[k].email) && (loginPassword==user[k].password) && (user[k].usertype=="Admin")){
            document.getElementById('tableData').style.display = 'block';
            var table = document.getElementById("data");
            table.innerHTML="";
            for(let j=0;j<user.length;j++){
                var row = data.insertRow(-1);
                var cell1 = row.insertCell(0);
                cell1.innerHTML = user[j].id;
             
                var cell2 = row.insertCell(1);
                cell2.innerHTML = user[j].firstname;
             
                var cell3 = row.insertCell(2);
                cell3.innerHTML = user[j].lastname;
             
                var cell4 = row.insertCell(3);
                cell4.innerHTML = user[j].password;

                var cell5 = row.insertCell(4);
                cell5.innerHTML = user[j].confirm_password;

                var cell6 = row.insertCell(5);
                cell6.innerHTML = user[j].contact;

                var cell7 = row.insertCell(6);
                cell7.innerHTML = user[j].email;

                var cell8 = row.insertCell(7);
                cell8.innerHTML = user[j].usertype;

                var cell9 = row.insertCell(8);
                cell9.innerHTML = "<input type='button' onclick='remove(this);' value='Remove'><input type='button' class='edit' value='Edit'>";
            }
        }
       
    }
   
}


function remove(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tableData").deleteRow(i);

}
$(document).ready(function(){
   $("#tableData").on("click",".edit",function(){
   $("#idofid").val(($(this).closest('tr').children().first().text()));
   $("#fname").val(($(this).closest('tr').children().first().next().text()));
   $("#lname").val(($(this).closest('tr').children().first().next().next().text()));
   $("#password").val(($(this).closest('tr').children().first().next().next().next().text()));
   $("#confirm_password").val(($(this).closest('tr').children().first().next().next().next().next().text()));
   $("#contact").val(($(this).closest('tr').children().first().next().next().next().next().next().text()));
   $("#email").val(($(this).closest('tr').children().first().next().next().next().next().next().next().text()));
   document.getElementById("data").deleteRow(this); 
})
})


