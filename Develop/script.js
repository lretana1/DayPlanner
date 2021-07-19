var today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(today);

function(){
    var currtime =moment().hour();
    $(".time-block").each(function(){
        var timeblock =parseint($(this).attr("id").split("hour")[1]);
    })
}
