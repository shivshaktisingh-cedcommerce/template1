
$(document).ready(function(){
    $("input").keyup(function(){
      const flowers=["Lily","Lotus","Jasmine","sunflower","rose","Daisy","Tulip","Maglonia","Lavender","Flax"];
    nArray=[];
    var T=$("#suggest").val();
    for(let i=0;i<flowers.length;i++)
    {
      if(flowers[i].slice(0,T.length)==T){
        nArray.push(flowers[i]);
      }
    }
   
    
    
    $("#suggestion").text(nArray);

  });
});