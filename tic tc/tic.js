var flag=1;
        function myFunc1(){
            if(flag==1){
                document.getElementById("b1").value = "X";
                document.getElementById("b1").disabled = true;
                flag=0;
             }
             else{
                document.getElementById("b1").value = "0";
                document.getElementById("b1").disabled = true;
                flag=1;
            }
        }
        function myFunc2(){
            if(flag==1){
                document.getElementById("b2").value = "X";
                document.getElementById("b2").disabled = true;
                flag=0;
             }
             else{
                document.getElementById("b2").value = "0";
                document.getElementById("b2").disabled = true;
                flag=1;
            }
        }
        function myFunc3(){
            if(flag==1){
                document.getElementById("b3").value = "X";
                document.getElementById("b3").disabled = true;
                flag=0;
             }
             else{
                document.getElementById("b3").value = "0";
                document.getElementById("b3").disabled = true;
                flag=1;
            }
        }
        function myFunc4(){
            if(flag==1){
                document.getElementById("b4").value = "X";
                document.getElementById("b4").disabled = true;
                flag=0;
             }
             else{
                document.getElementById("b4").value = "0";
                document.getElementById("b4").disabled = true;
                flag=1;
            }
        }
        function myFunc5(){
            if(flag==1){
                document.getElementById("b5").value = "X";
                document.getElementById("b5").disabled = true;
                flag=0;
             }
             else{
                document.getElementById("b5").value = "0";
                document.getElementById("b5").disabled = true;
                flag=1;
            }
        }
        function myFunc6(){
            if(flag==1){
                document.getElementById("b6").value = "X";
                document.getElementById("b6").disabled = true;
                flag=0;
             }
             else{
                document.getElementById("b6").value = "0";
                document.getElementById("b6").disabled = true;
                flag=1;
            }
        }
        function myFunc7(){
            if(flag==1){
                document.getElementById("b7").value = "X";
                document.getElementById("b7").disabled = true;
                flag=0;
             }
             else{
                document.getElementById("b7").value = "0";
                document.getElementById("b7").disabled = true;
                flag=1;
            }
        }
        function myFunc8(){
            if(flag==1){
                document.getElementById("b8").value = "X";
                document.getElementById("b8").disabled = true;
                flag=0;
             }
             else{
                document.getElementById("b8").value = "0";
                document.getElementById("b8").disabled = true;
                flag=1;
            }
        }
        function myFunc9(){
            if(flag==1){
                document.getElementById("b9").value = "X";
                document.getElementById("b9").disabled = true;
                flag=0;
             }
             else{
                document.getElementById("b9").value = "0";
                document.getElementById("b9").disabled = true;
                flag=1;
            }
        }
        function reset() {
            location.reload();
        }

        function commonfunction() {
            var b1, b2, b3, b4, b5, b6, b7, b8, b9;

            b1 = document.getElementById("b1").value;
            b2 = document.getElementById("b2").value;
            b3 = document.getElementById("b3").value;
            b4 = document.getElementById("b4").value;
            b5 = document.getElementById("b5").value;
            b6 = document.getElementById("b6").value;
            b7 = document.getElementById("b7").value;
            b8 = document.getElementById("b8").value;
            b9 = document.getElementById("b9").value;
            if ((b1 == 'X') && (b2 == 'X') && (b3 == 'X')) {
                document.getElementById('print').innerHTML = "Player X Won";
                document.getElementById("b4").disabled = true;
                document.getElementById("b5").disabled = true;
                document.getElementById("b6").disabled = true;
                document.getElementById("b7").disabled = true;
                document.getElementById("b8").disabled = true;
                document.getElementById("b9").disabled = true;
                window.alert('Player X won');
               }
            else if ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')) {
                document.getElementById('print').innerHTML = "Player X Won";
                document.getElementById("b2").disabled = true;
                document.getElementById("b3").disabled = true;
                document.getElementById("b5").disabled = true;
                document.getElementById("b6").disabled = true;
                document.getElementById("b8").disabled = true;
                document.getElementById("b9").disabled = true;
                window.alert('Player X won');
               }
            else if ((b4 == 'X') && (b5 == 'X') && (b6 == 'X')) {
                document.getElementById('print').innerHTML = "Player X Won";
                document.getElementById("b1").disabled = true;
                document.getElementById("b2").disabled = true;
                document.getElementById("b3").disabled = true;
                document.getElementById("b7").disabled = true;
                document.getElementById("b8").disabled = true;
                document.getElementById("b9").disabled = true;
                window.alert('Player X won');
               }
            else if ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) {
                document.getElementById('print').innerHTML = "Player X Won";
                document.getElementById("b1").disabled = true;
                document.getElementById("b2").disabled = true;
                document.getElementById("b3").disabled = true;
                document.getElementById("b4").disabled = true;
                document.getElementById("b5").disabled = true;
                document.getElementById("b6").disabled = true;
                window.alert('Player X won');
               }
            else if ((b2 == 'X') && (b5 == 'X') && (b8 == 'X')) {
                document.getElementById('print').innerHTML = "Player X Won";
                document.getElementById("b1").disabled = true;
                document.getElementById("b3").disabled = true;
                document.getElementById("b4").disabled = true;
                document.getElementById("b6").disabled = true;
                document.getElementById("b7").disabled = true;
                document.getElementById("b9").disabled = true;
                window.alert('Player X won');
               }
            else if ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) {
                document.getElementById('print').innerHTML = "Player X Won";
                document.getElementById("b1").disabled = true;
                document.getElementById("b2").disabled = true;
                document.getElementById("b3").disabled = true;
                document.getElementById("b4").disabled = true;
                document.getElementById("b5").disabled = true;
                document.getElementById("b6").disabled = true;
                window.alert('Player X won');
               }
            else if ((b1 == 'X') && (b5 == 'X') && (b9 == 'X')) {
                document.getElementById('print').innerHTML = "Player X Won";
                document.getElementById("b2").disabled = true;
                document.getElementById("b3").disabled = true;
                document.getElementById("b4").disabled = true;
                document.getElementById("b6").disabled = true;
                document.getElementById("b7").disabled = true;
                document.getElementById("b8").disabled = true;
                window.alert('Player X won');
               }
            else if ((b3 == 'X') && (b5 == 'X') && (b7 == 'X')) {
                document.getElementById('print').innerHTML = "Player X Won";
                document.getElementById("b1").disabled = true;
                document.getElementById("b2").disabled = true;
                document.getElementById("b4").disabled = true;
                document.getElementById("b6").disabled = true;
                document.getElementById("b8").disabled = true;
                document.getElementById("b9").disabled = true;
                window.alert('Player X won');
               }
            else if ((b1 == '0') && (b2 == '0') && (b3 == '0')) {
                document.getElementById('print').innerHTML = "Player 0 Won";
                document.getElementById("b4").disabled = true;
                document.getElementById("b5").disabled = true;
                document.getElementById("b6").disabled = true;
                document.getElementById("b7").disabled = true;
                document.getElementById("b8").disabled = true;
                document.getElementById("b9").disabled = true;
                window.alert('Player 0 won');
               }
            else if ((b1 == '0') && (b4 == '0') && (b7 == '0')) {
                document.getElementById('print').innerHTML = "Player 0 Won";
                document.getElementById("b2").disabled = true;
                document.getElementById("b3").disabled = true;
                document.getElementById("b5").disabled = true;
                document.getElementById("b6").disabled = true;
                document.getElementById("b8").disabled = true;
                document.getElementById("b9").disabled = true;
                window.alert('Player 0 won');

               }
            else if ((b4 == '0') && (b5 == '0') && (b6 == '0')) {
                document.getElementById('print').innerHTML = "Player 0 Won";
                document.getElementById("b1").disabled = true;
                document.getElementById("b2").disabled = true;
                document.getElementById("b3").disabled = true;
                document.getElementById("b7").disabled = true;
                document.getElementById("b8").disabled = true;
                document.getElementById("b9").disabled = true;
                window.alert('Player 0 won');

               }
            else if ((b7 == '0') && (b8 == '0') && (b9 == '0')) {
                document.getElementById('print').innerHTML = "Player 0 Won";
                document.getElementById("b1").disabled = true;
                document.getElementById("b2").disabled = true;
                document.getElementById("b3").disabled = true;
                document.getElementById("b4").disabled = true;
                document.getElementById("b5").disabled = true;
                document.getElementById("b6").disabled = true;
                window.alert('Player 0 won');

               }
            else if ((b2 == '0') && (b5 == '0') && (b8 == '0')) {
                document.getElementById('print').innerHTML = "Player 0 Won";
                document.getElementById("b1").disabled = true;
                document.getElementById("b3").disabled = true;
                document.getElementById("b4").disabled = true;
                document.getElementById("b6").disabled = true;
                document.getElementById("b7").disabled = true;
                document.getElementById("b9").disabled = true;
                window.alert('Player 0 won');

               }
            else if ((b7 == '0') && (b8 == '0') && (b9 == '0')) {
                document.getElementById('print').innerHTML = "Player 0 Won";
                document.getElementById("b1").disabled = true;
                document.getElementById("b2").disabled = true;
                document.getElementById("b3").disabled = true;
                document.getElementById("b4").disabled = true;
                document.getElementById("b5").disabled = true;
                document.getElementById("b6").disabled = true;
                window.alert('Player 0 won');

               }
            else if ((b1 == '0' || b1 == '0') && (b5 == '0' || b5 == '0') && (b9 == '0' || b9 == '0')) {
                document.getElementById('print').innerHTML = "Player 0 Won";
                document.getElementById("b2").disabled = true;
                document.getElementById("b3").disabled = true;
                document.getElementById("b4").disabled = true;
                document.getElementById("b6").disabled = true;
                document.getElementById("b7").disabled = true;
                document.getElementById("b8").disabled = true;
                window.alert('Player 0 won');

               }
            else if ((b3 == '0' || b3 == '0') && (b5 == '0' || b5 == '0') && (b7 == '0' || b7 == '0')) {
                document.getElementById('print').innerHTML = "Player 0 Won";
                document.getElementById("b1").disabled = true;
                document.getElementById("b2").disabled = true;
                document.getElementById("b4").disabled = true;
                document.getElementById("b6").disabled = true;
                document.getElementById("b8").disabled = true;
                document.getElementById("b9").disabled = true;
                window.alert('Player 0 won');

               }
            else if((b1 == '0' || b1 == 'X') && (b2 == '0' || b2 == 'X' ) && (b3 == '0' || b3 == 'X') && (b4 == '0' || b4 == 'X') && (b5 == '0' || b5 == 'X') && (b6 == '0' || b6 == 'X')  && (b7 == '0'|| b7 == 'X') && (b8 == '0' || b8 == 'X') && (b9 == 'X' || b9 == '0'))
            {
                document.getElementById('print').innerHTML="Match Tie";
                window.alert("Match Tie");
            }
            else{
                if (flag==1)
                {
                    document.getElementById('print').innerHTML="Player X turns";
   
                }
                else{
                    document.getElementById('print').innerHTML="Player 0 turns";

                }
            }

        }
