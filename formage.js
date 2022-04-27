function calculate(){
    age = document.getElementById("age").value 
    weight = document.getElementById("weight").value 
    if(age>=5 && age <=7)
    {
        if(weight >=15 && weight <= 20){
            document.getElementById("k").innerHTML = "Keep it up";
            document.getElementById("k").style.color="Green";
        }
        else if(weight<15){
            document.getElementById("k").innerHTML = "you are underweight";
            document.getElementById("k").style.color="Red";
        }
        else if(weight>20){
            document.getElementById("k").innerHTML = "you are overweight";
            document.getElementById("k").style.color="Red";
        }
        else{
            document.getElementById("k").innerHTML = "wrong credentials!";
            document.getElementById("k").style.color="Red";
        }
    }
    else if(age>=8 && age<=10)
    {

        if(weight >=21 && weight <= 25){
            document.getElementById("k").innerHTML = "Keep it up";
            document.getElementById("k").style.color="Green";
        }
        else if(weight<21){
            document.getElementById("k").innerHTML = "you are underweight";
            document.getElementById("k").style.color="Red";
        }
        else if(weight>25){
            document.getElementById("k").innerHTML = "you are overweight";
            document.getElementById("k").style.color="Red";
        }
        else{
            document.getElementById("k").innerHTML = "wrong credentials!";
            document.getElementById("k").style.color="Red";
        }
    }
    else if(age>=11 && age<=15)
    {

        if(weight >=26 && weight <= 30){
            document.getElementById("k").innerHTML = "Keep it up";
            document.getElementById("k").style.color="Green";
        }
        else if(weight<26){
            document.getElementById("k").innerHTML = "you are underweight";
            document.getElementById("k").style.color="Red";
        }
        else if(weight>30){
            document.getElementById("k").innerHTML = "you are overweight";
            document.getElementById("k").style.color="Red";
        }
        else{
            document.getElementById("k").innerHTML = "wrong credentials!";
            document.getElementById("k").style.color="Red";
        }
    } 
    
    else if(age>=16 && age<=20)
    {

        if(weight >=31 && weight <= 40){
            document.getElementById("k").innerHTML = "Keep it up";
            document.getElementById("k").style.color="Green";
        }
        else if(weight<31){
            document.getElementById("k").innerHTML = "you are underweight";
            document.getElementById("k").style.color="Red";
        }
        else if(weight>40){
            document.getElementById("k").innerHTML = "you are overweight";
            document.getElementById("k").style.color="Red";
        }
        else{
            document.getElementById("k").innerHTML = "wrong credentials!";
            document.getElementById("k").style.color="Red";
        }
    }
   else {
    document.getElementById("k").innerHTML = "wrong credentials!";
    document.getElementById("k").style.color="Red";
   }

    


}
