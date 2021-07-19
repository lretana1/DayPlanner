var today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(today);


$(document).ready(function(){
    $(".saveBtn").on("click",function(){
        var text = $(this).siblings(".desc").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time,text);
    })
    
    function tracker() {
        var now = moment().hour();
        
        $(".time-blk").each(function(){
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
                 $(this).addClass("future");
                 $(this).removeClass("past");
             }
        })
    }
    
    $("#hour-8 .desc").val(localStorage.getItem("hour-8"));
    $("#hour-9 .desc").val(localStorage.getItem("hour-9"));
    $("#hour-10 .desc").val(localStorage.getItem("hour-10"));
    $("#hour-11 .desc").val(localStorage.getItem("hour-11"));
    $("#hour-12 .desc").val(localStorage.getItem("hour-12"));
    $("#hour-1 .desc").val(localStorage.getItem("hour-1"));
    $("#hour-2 .desc").val(localStorage.getItem("hour-2"));
    $("#hour-3 .desc").val(localStorage.getItem("hour-3"));
    $("#hour-4 .desc").val(localStorage.getItem("hour-4"));
    $("#hour-5 .desc").val(localStorage.getItem("hour-5"));

    tracker();
})