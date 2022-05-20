
function oper(operator)
{
    if(operator=="prev")
    {
      var itr=$("#current").val();
      $(".same").attr("style","display:none");
      --itr;
      if(itr==0)
      itr=7;
      $("#img"+itr).attr("style"," ");
      $("#current").val(itr);
      
    }
    if(operator=="next")
    {
        var itr=$("#current").val();
      $(".same").attr("style","display:none");
      ++itr;
      if(itr==8)
      itr=1;
      $("#img"+itr).attr("style"," ");
      $("#current").val(itr);
    }

}
