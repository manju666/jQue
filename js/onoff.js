$(function(){
    var imgname='';
   var flag=true;
$('#onoff').click(function(){
    if(flag){
        var imgname='images/onimg.jpg';
        // 
        flag=false;
      
    }
    else{
        var imgname='images/offimg.jpg';
     flag=true;

    }
    $('img').attr("src",imgname);

});
// show hide example

$("#btnhide").click(function(){
$("#randomtext").hide(500);
});
$("#btnshow").click(function(){
    $("#randomtext").show(600);
    });
    $("#btntoggle").click(function(){
        $("#randomtext").toggle();
        });
        $("#fadein").click(function(){
            $("#im1").fadeIn();
            });
            $("#fadeout").click(function(){
                $("#im1").fadeOut();
                });
        

});