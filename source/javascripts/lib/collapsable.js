$(document).ready(function(){
  $(".panelheader").click(function(){
    $(this).next().toggleClass("active");
  });
});