employee=[];
employee[0]={IdOfEmp:"ID",Name:"Name",Salary:0}
employee[1]={IdOfEmp:1,Name:"John",Salary:8000};
employee[2]={IdOfEmp:2,Name:"Mark",Salary:9000};
employee[3]={IdOfEmp:3,Name:"Yash",Salary:10000};

function tableHeading(){
    var table = document.getElementById("displayHeadingTable");
    table.innerHTML="";
    var row = displayHeadingTable.insertRow(displayHeadingTable.rows.length - 1);  
    var cell1 = row.insertCell(0);
    cell1.innerHTML = "ID";

    var cell2 = row.insertCell(1);
    cell2.innerHTML = "NAME";

    var cell3 = row.insertCell(2);
    cell3.innerHTML = "SALARY";

    var cell4 = row.insertCell(3);
    cell4.innerHTML = "ACTION";
    

}

function addEntriesByUser(){
    var idOfEmployeeEnteredByUser = document.getElementById("id1").value;
    var nameOfEmployeeEnteredByUser = document.getElementById("Name1").value;
    var salaryOfEmployeeEnteredByUser = document.getElementById("salary1").value;
    tableHeading();
    var row = displayTable.insertRow(displayTable.rows.length - 1);  
    var cell1 = row.insertCell(0);
    cell1.innerHTML = idOfEmployeeEnteredByUser;
    
    var cell2 = row.insertCell(1);
    cell2.innerHTML = nameOfEmployeeEnteredByUser;
    
    var cell3 = row.insertCell(2);
    cell3.innerHTML = salaryOfEmployeeEnteredByUser;
    
    var cell4 = row.insertCell(3);
    cell4.innerHTML = "<button id='delete' onclick='deleteRow(this)'>Delete</button>";
      
}
function deleteRow(r) {
   var i = r.parentNode.parentNode.rowIndex;
   document.getElementById("displayTable").hidden(i);
 }

function objectcall(){
  class employee{
    constructor(ID , name , salary)
    {
       this.ID=ID;
       this.name=name;
       this.salary=salary;
    }

}
  let emp = new employee(1, "JOHN",8000);
  var table = document.getElementById("task2displayHeadingTable");
  table.innerHTML="";
  var row = task2displayHeadingTable.insertRow(task2displayHeadingTable.rows.length - 1);  
  var cell1 = row.insertCell(0);
  cell1.innerHTML = "ID";

  var cell2 = row.insertCell(1);
  cell2.innerHTML = "NAME";

  var cell3 = row.insertCell(2);
  cell3.innerHTML = "SALARY";

  var row = objectTable.insertRow(objectTable.rows.length - 1);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = emp.ID;

  var cell2 = row.insertCell(1);
  cell2.innerHTML = emp.name;

  var cell3 = row.insertCell(2);
  cell3.innerHTML = emp.salary;

  const txt = '{"ID":"1", "name":"JOHN", "salary":"8000"}';
  const obj = JSON.parse(txt);
  document.getElementById("demo").innerHTML = obj.ID + "  " + obj.name + "  " + obj.salary;

  const txt1 ={
             id:"1",
             name:"JOHN",
            salary:"8000",
            get test(){
            return this.id + this.name + this.salary}
         }
  document.getElementById("this").innerHTML = txt1.test;
}


function errorH()
{   
  var table = document.getElementById("updatedSalaryHeadingTable");
  table.innerHTML="";
  var row = updatedSalaryHeadingTable.insertRow(updatedSalaryHeadingTable.rows.length - 1);  
  var cell1 = row.insertCell(0);
  cell1.innerHTML = "ID";

  var cell2 = row.insertCell(1);
  cell2.innerHTML = "NAME";

  var cell3 = row.insertCell(2);
  cell3.innerHTML = "SALARY";

  var cell4 = row.insertCell(3);
  cell4.innerHTML = "UpdatedSlary";
   
   try {
    
     for(let i=1;i<employee.length;i++){
     var row = updatedSalaryTable.insertRow(-1);
     var cell1 = row.insertCell(0);
     cell1.innerHTML = employee[i].IdOfEmp;

     var cell2 = row.insertCell(1);
     cell2.innerHTML = employee[i].Name;

     var cell3 = row.insertCell(2);
     cell3.innerHTML = employee[i].Salary;
     
     var cell4 = row.insertCell(3);
     cell4.innerHTML = employee[i].Salary * 1.10;
     if ((employee[i].Salary * 1.10) > 10000) throw "error: Salary of an employee name " + employee[i].Name + " having salary more than 10000 ";
  
   }
}
     catch(err) {
     document.getElementById("demo1").innerHTML = err;
   }
   
}



function salaryPercentage(){
  var table = document.getElementById("percentHeadingTable");
  table.innerHTML="";
  var row = percentHeadingTable.insertRow(percentHeadingTable.rows.length - 1);  
  var cell1 = row.insertCell(0);
  cell1.innerHTML = "ID";

  var cell2 = row.insertCell(1);
  cell2.innerHTML = "NAME";

  var cell3 = row.insertCell(2);
  cell3.innerHTML = "SALARY";

  var cell4 = row.insertCell(3);
  cell4.innerHTML = "15%Salary";
   for(let i=1;i<employee.length;i++)
   {
    var salary;
    salary = () => {
    return (15/100)*employee[i].Salary;
  }
  var row = percentHeadingTable.insertRow(-1);  
  var cell1 = row.insertCell(0);
  cell1.innerHTML = employee[i].IdOfEmp;

  var cell2 = row.insertCell(1);
  cell2.innerHTML = employee[i].Name;

  var cell3 = row.insertCell(2);
  cell3.innerHTML = employee[i].Salary;

  var cell4 = row.insertCell(3);
  cell4.innerHTML = salary();
}
  
}

 


function debuggingFunction(){
  if(employee[0].Salary <= 0) {
    debugger;
    document.getElementById("demo3").innerHTML = employee[0].Salary;
  }
}

  

function addCheckDetails(){
   var name1 = document.getElementById("Name2").value;
   let regex = /^[A-Za-z]+$/;
   
   try{
      if(!name1.match(regex))  throw "string contain numbers or whitespaces";
   }

   catch(err)
   {
       document.getElementById("demo4").innerHTML = err;
   }

}


function useStrictHere(){
   "use strict";
   var salary="SALARY";
   for( let i=0;i<employee.length;i++)
   {
      if (employee[i].Salary>0){
         salary=30000;
      }
   var row = useStrictTable.insertRow(-1);  
   var cell1 = row.insertCell(0);
   cell1.innerHTML = employee[i].IdOfEmp;
 
   var cell2 = row.insertCell(1);
   cell2.innerHTML = employee[i].Name;
 
   var cell3 = row.insertCell(2);
   cell3.innerHTML = salary;
   }

}
