$("button").click(function(){
    var q1=$("#input1").val();
    var answer1=parseInt(q1);
    var q2=$("#input2").val();
    var answer2=parseInt(q2);
    var q3=$("#input3").val();
    var answer3=parseInt(q3);
    $("p").text("In the year 2020 you will have made $" + (((answer1*answer2)*52)+answer3) ); 

});
