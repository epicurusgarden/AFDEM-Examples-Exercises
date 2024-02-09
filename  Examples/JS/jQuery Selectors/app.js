$(document).ready(function() {
  $("a[hreflang|='en']").css("border", "4px dashed green");
  $("a[href ='thereissomeexample.html']").fadeOut("slow");
  $('li[class$="B"]').mouseover(function() {
    $(this).hide(3000);
  });
  $("ul>li:last").css("border", "4px dashed green");
});
