var today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(today);


$(document).ready(function(){
    $(".saveBtn").on("click",function(){
        var text = $(this).siblings(".desc").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time,text);
    }
    function tracker(){
        var now =moment().hour();
        $(".time-block").each(function{
            var timeblock = parseInt($(this).attr("id").split("hour")[1]);
             if (timeblock=== now) {
                 $(this).removeClass("future");
                 $(this).removeClass("past");
                 $(this).removeClass("present");
             }
             else if(timeblock < now) {
                $(this).removeClass("future");
                $(this).addClass("past");
                $(this).removeClass("present");
             }
             else{
                 $(this).removeClass("present");
                 $(this).addClass("future")
                 $(this).removeClass("past")
             }
        })
    })
})