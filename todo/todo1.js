var count=0;
    function submit(sign){
        var input1 = document.getElementById("new-task").value;
       
        if(sign=='Add')
        {   
            var addLi=' <li id="li' + count + '"><input  id="' + count + '" onChange="completed(this.id)" type="checkbox"><label id="label' + count + '">' + input1 + '</label><button onClick="edit(' + count + ')" class="edit' + count + '">Edit</button><button onClick="deleteData(' + count + ')" class="delete' + count + '">Delete</button></li>';
              
            var oldLi=document.getElementById("incomplete-tasks").innerHTML;
            var newLi = oldLi +addLi;
            document.getElementById("incomplete-tasks").innerHTML=newLi;
            count++;
            document.getElementById("new-task").value="";

        }
        else{
          //  document.getElementById("submit").setAttribute("onClick", "submit('Add')");
            document.getElementById("submit").innerHTML = "Add";
            document.getElementById("label" + sign).innerHTML = input1;
        }
    }
    function completed(checkid){
        var compData= document.getElementById("label"+checkid).innerHTML;
        var addLiComp = '<li id="li' + checkid + '"><input type="checkbox" checked><label  id="label' + checkid + '">' + compData + '</label><button onClick="edit(' + checkid + ')" class="edit' + checkid + '">Edit</button><button onClick="deleteData(' + checkid + ')" class="delete' + checkid + '">Delete</button></li>';
        document.getElementById("li" +checkid).innerHTML="";
        var oldComp = document.getElementById("completed-tasks").innerHTML;
        var newComp = oldComp + addLiComp;
        document.getElementById("completed-tasks").innerHTML=newComp;
        document.getElementById("li" + checkid).setAttribute("id", "");
    }

    function edit(editid) {
      var editData = document.getElementById("label" + editid).innerHTML;
      document.getElementById("new-task").value = editData;
      document.getElementById("submit").innerHTML = "Update";
      document.getElementById("submit").setAttribute("onClick", "submit(" + editid + ")");
    }
    function deleteData(deleteid){
      document.getElementById("li" + deleteid).innerHTML = "";
    }