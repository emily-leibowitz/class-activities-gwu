$('.tab').on("click", function(){
  if ($(this).hasClass("tab1")) {
    $(".tab1").addClass("active");
    $(".tab2").removeClass("active");
    $("#tabContent1").css("display","block");
    $("#tabContent2").css("display","none");
  }
  else if ($(this).hasClass("tab2")) {
    $(".tab1").removeClass("active");
    $(".tab2").addClass("active");
    $("#tabContent1").css("display","none");
    $("#tabContent2").css("display","block");
  }
});
