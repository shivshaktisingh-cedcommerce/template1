$(document).ready(function(){
    $(".test").click(function(){
      $(".test p:first-child").changeColor();
      $(".test p:last-child").changeColor();

    });
  });


  setInterval(function(){
      $(".test p:first-child").css("color",getRandomColor());
      $(".test p:last-child").css("color",getRandomColor());
      },5000);

    function getRandomColor(){
        var letters='0123456789ABCDEF';
        var color ='#';
        for(let i=0;i<6;i++)
        {
            color+= letters[Math.floor(Math.random() * 16)];

        }
        return color;
    }