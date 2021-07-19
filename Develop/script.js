var today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(today);

function(){
    var currtime =moment().hour();
    $(".time-block").each(function(){
        var timeblock =parseint($(this).attr("id").split("hour")[1]);
    })
}

$(document).ready(function(){
    $(".saveBtn").on("click",function(){
        var text = $(this).siblings(".desc").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time,text);
    })
})