// var format = 1;
// var TimeHolder = 0; // Initialize TimeHolder for the stopwatch
// var stopChecker = 0; // Flag to check if the stopwatch is stopped

// function SetDay(DD) {
//     $(".weekdays span").removeClass('active'); // Clear previous active
//     $(".weekdays span:nth-child(" + (DD + 1) + ")").addClass('active'); // Correct indexing for Sun-Sat week
// }

// function resetTimer() {
//     TimeHolder = 0; // Reset the stopwatch time
//     $('.S1').removeClass().addClass('S1 show0');
//     $('.S2').removeClass().addClass('S2 show0');
//     $('.M1').removeClass().addClass('M1 show0');
//     $('.M2').removeClass().addClass('M2 show0');
//     $('.H1').removeClass().addClass('H1 show0');
//     $('.H2').removeClass().addClass('H2 show0');
// }

// function Run24hr(S1, S2, M1, M2, H1, H2) {
//     $('.S1').removeClass().addClass('S1 show' + S1);
//     $('.S2').removeClass().addClass('S2 show' + S2);
//     $('.M1').removeClass().addClass('M1 show' + M1);
//     $('.M2').removeClass().addClass('M2 show' + M2);
//     $('.H1').removeClass().addClass('H1 show' + H1);
//     $('.H2').removeClass().addClass('H2 show' + H2);
// }

// function Run12hr(S1, S2, M1, M2, H1, H2, HH) {
//     if (HH >= 12) {
//         $(".formats span:nth-child(2)").addClass('active'); // pm
//         $(".formats span:nth-child(1)").removeClass('active'); // am
//     } else {
//         $(".formats span:nth-child(1)").addClass('active'); // am
//         $(".formats span:nth-child(2)").removeClass('active'); // pm
//     }

//     // Update time display
//     $('.S1').removeClass().addClass('S1 show' + S1);
//     $('.S2').removeClass().addClass('S2 show' + S2);
//     $('.M1').removeClass().addClass('M1 show' + M1);
//     $('.M2').removeClass().addClass('M2 show' + M2);
//     $('.H1').removeClass().addClass('H1 show' + H1);
//     $('.H2').removeClass().addClass('H2 show' + H2);
// }

// function StopWatch(TimeHolder) {
//     var HH = Math.floor(TimeHolder / 3600),
//         MM = Math.floor((TimeHolder - (HH * 3600)) / 60),
//         SS = Math.floor(TimeHolder - HH * 3600 - MM * 60);
//     var S1 = Math.floor(SS / 10),
//         S2 = SS % 10,
//         M1 = Math.floor(MM / 10),
//         M2 = MM % 10,
//         H1 = Math.floor(HH / 10),
//         H2 = HH % 10;
//     Run24hr(S1, S2, M1, M2, H1, H2);
// }

// function update_time() {
//     var dt = new Date(),
//         HH = dt.getHours(),
//         MM = dt.getMinutes(),
//         SS = dt.getSeconds(),
//         DD = dt.getDay();

//     SetDay(DD);

//     var S1 = Math.floor(SS / 10),
//         S2 = SS % 10,
//         M1 = Math.floor(MM / 10),
//         M2 = MM % 10,
//         H1, H2;

//     if (format == 1) {
//         H1 = Math.floor(HH / 10);
//         H2 = HH % 10;
//         Run24hr(S1, S2, M1, M2, H1, H2);
//     } else if (format == 2) {
//         var adjustedHH = HH % 12 || 12;
//         H1 = Math.floor(adjustedHH / 10);
//         H2 = adjustedHH % 10;
//         Run12hr(S1, S2, M1, M2, H1, H2, HH);
//     } else if (format == 3 && stopChecker === 0) {
//         TimeHolder++;
//         StopWatch(TimeHolder);
//     } else if (format === 4 && stopChecker === 0) {
//         TimeHolder--;

//         if(TimeHolder === 0 ){
//         AlarmOut();
//         }
//         else{
//             StopWatch(TimeHolder)
//         }
//     } else {
//         StopWatch(TimeHolder);
//     }

//     setTimeout(update_time, 1000);
// }

// $('.type span').on('click', function () {
//     $('.type .active').removeClass('active');
//     $(this).addClass('active');

//     var T = $(this).html();
//     if (T == '24hr') {
//         format = 1;
//         $('.H1').fadeIn();
//         $('.formats span').removeClass('active');
//     } else {
//         format = 2;
//     }
// });

// $('.fa-stopwatch').on('click', function () {
//     $('body').removeClass('.BgAnimation');
//     $('h1').fadeIn();
    
//     if (!($('.timeHolder').hasClass('StopWatch'))) {
//         format = 3; // Set to stopwatch mode
//         resetTimer(); // Reset timer
//         stopChecker = 1; // Start stopwatch
//         $('.timeHolder').removeClass().addClass('timeHolder StopWatch'); // Correct class name
//         $('.numbers').fadeIn();
//         $('.pause').removeClass('active');
//         $('.start').addClass('active');
//         TimeHolder = 0; // Reset the timeHolder to 0
//     } else {
//         stopChecker = 0; // Pause stopwatch when clicked again
//         $('.start').removeClass('active');
//         $('.pause').addClass('active');
//     }
// });

// $('.start').on('click',function(){
//     $('body').removeClass('.BgAnimation')
//     if(format === 3){
//         stopChecker = 0;
//         $(this).removeClass('active')
//         $('.pause').addClass('active')
//     }
//     else if(format ===4){
//         TimeHolder=$('.countDown input').val()
//         if(TimeHolder=0){
//             stopChecker=0;
//             resetTimer()
//             $(this).removeClass('active')
//             $('.pause').addClass('active')
//             $('.countDown').addClass('Disnone')
//             $('numbers').fadeIn(0);
//         }
//     }
// })
// $('.pause').on('click', function(){
//     stopChecker = 1;  // Add semicolon
//     $(this).removeClass('active');
//     $('.start').addClass('active');
// });
// $('.stop').on('click', function(){
//     $('body').removeClass('.BgAnimation')
//     if(format ===3){
//         stopChecker=1
//         TimeHolder = 0
//         resetTimer()
//         $('.pause').removeClass('active')
//         $('.start').addClass('active')
//     }
//     else if(format === 4){
//         resetTimer()
//         stopChecker = 1

//         $('.countDown').removeClass('Disnone')
//         $('numbers').fadeIn(0);
//         $('.countDown input').val("")
//         $('.pause').removeClass('active')
//         $('.start').addClass('active')
        
        
//     }
// });


// $('.fa-solid.fa-clock').on('click', function(){
//     $('body').removeClass('.BgAnimation');
    
//     if ($('.type .active').html() === '12hr') {
//         format = 2;
//     } else {
//         format = 1; 
//     }
    
//     stopChecker = 0;
//     $('.timeHolder').removeClass().addClass('timeHolder'); // Correct targeting of the timeHolder class
//     $('.numbers').fadeIn(0);
// });

// $('.fa-regular.fa-clock').on('click',function(){
//     $('body').removeClass('.BgAnimation')
//     $('H1').fadeIn()
//     if (!($('.timeHolder').hasClass('countDwn'))) {
//         $('.timeHolder').removeClass().addClass('timeHolder countDwn')
//         format =4
//         resetTimer();
//         stopChecker=1
//         stopChecker = 1
//         $('.countDown').removeClass('disNone')
//         $('timeHolder').addClass('countdwn')
//         $('.numbers').fadeOut(0)
//         $('pause').removeClass('active')
//         $('.start').addClass('active')
//     }
// })
// function AlarmOut(){
//     $('body').addClass('.BgAnimation')
//     resetTimer()
//     stopChecker=1
// }
// update_time();


var format = 1, TimeHolder = 0, stopChecker = 0;
function SetDay(DD) {
    $(".weekdays span:nth-child("+((DD+1)%7)+")").addClass('active')
}
function resetTimer(){
    $('.S1').removeClass().addClass('S1 show0')
    $('.S2').removeClass().addClass('S2 show0')
    $('.M1').removeClass().addClass('M1 show0')
    $('.M2').removeClass().addClass('M2 show0')
    $('.H1').removeClass().addClass('H1 show0')
    $('.H2').removeClass().addClass('H2 show0')
}

function Run24hr(S1,S2,M1,M2,H1,H2){
    $('.S1').removeClass().addClass('S1 show' +S1)
    $('.S2').removeClass().addClass('S2 show' +S2)

    $('.M1').removeClass().addClass('M1 show' +M1)
    $('.M2').removeClass().addClass('M2 show' +M2)

    $('.H1').removeClass().addClass('H1 show' +H1)
    $('.H2').removeClass().addClass('H2 show' +H2)
}
function Run12hr(S1,S2,M1,M2,HH){
    if (HH>12) {
        HH=HH-12
        $(".formats span:nth-child(2)").addClass('active');
    }
    else{
        $(".formats span:nth-child(1)").addClass('active');
    }
    var H1 = Math.floor(HH/10),
        H2 = HH%10;
    $('.S1').removeClass().addClass('S1 show' +S1)
    $('.S2').removeClass().addClass('S2 show' +S2)
    
    $('.M1').removeClass().addClass('M1 show' +M1)
    $('.M2').removeClass().addClass('M2 show' +M2)    
    if(H1 === 0){
        $('.H1').fadeOut(0)
    }
    else{
        $('.H1').fadeIn().removeClass().addClass('H1 show'+H1)
    }

    $('.H2').removeClass().addClass('H2 show' + H2);
}
function StopWatch(TimeHolder){
    var HH = Math.floor(TimeHolder/3600), 
        MM = Math.floor((TimeHolder - (HH*3600))/60),
        SS = Math.floor(TimeHolder-HH*3600-MM*60);
    
    var S1 = Math.floor(SS/10),
        S2 = SS%10,
        M1 = Math.floor(MM/10),
        M2 = MM%10,
        H1 = Math.floor(HH/10),
        H2 = HH%10;    
    Run24hr(S1,S2,M1,M2,H1,H2)
}

function update_time(){
    var dt = new Date(), 
        HH = dt.getHours(), 
        MM = dt.getMinutes(), 
        SS = dt.getSeconds(), 
        DD = dt.getDay();
    SetDay(DD)
    var S1 = Math.floor(SS/10),
        S2 = SS%10,
        M1 = Math.floor(MM/10),
        M2 = MM%10,
        H1 = Math.floor(HH/10),
        H2 = HH%10;
    
    if (format === 1) {
        Run24hr(S1,S2,M1,M2,H1,H2);
    }    
    else if(format === 2){
        Run12hr(S1,S2,M1,M2,HH);
    }
    else if(format === 3 && stopChecker === 0 ){
        TimeHolder++;
        StopWatch(TimeHolder);
    }
    else if(format === 4 && stopChecker === 0){
        TimeHolder--;
        AlarmOut();
    }
    else{
        StopWatch(TimeHolder);
    }


    setTimeout(update_time,1000);
}

$('.type span').on('click',function(){

    $('.type .active').removeClass('active');
    $(this).addClass('active');

    var T = $(this).html()
    if(T === '24hr'){
        format = 1;
        $('.H1').fadeIn();
        $('.formats span').removeClass('active');
    }
    else{
        format = 2;
    }
})

$('.fa-stopwatch').on('click',function(){
    $('.body').removeClass('BgAnimation');
    $('.H1').fadeIn();
    if(!($('.timeHolder').hasClass('StopWatch'))){
        format = 3;
        resetTimer();
        stopChecker = 1;
        $('.timeHolder').removeClass().addClass('timeHolder StopWatch');
        $('.numbers').fadeIn(0);
        $('.pause').removeClass('active');
        $('.start').addClass('active');
        TimeHolder = 0;
    }
})

var format = 1, TimeHolder = 0, stopChecker = 0;
function SetDay(DD) {
    $(".weekdays span:nth-child("+((DD+1)%7)+")").addClass('active')
}
function resetTimer(){
    $('.S1').removeClass().addClass('S1 show0')
    $('.S2').removeClass().addClass('S2 show0')
    $('.M1').removeClass().addClass('M1 show0')
    $('.M2').removeClass().addClass('M2 show0')
    $('.H1').removeClass().addClass('H1 show0')
    $('.H2').removeClass().addClass('H2 show0')
}

function Run24hr(S1,S2,M1,M2,H1,H2){
    $('.S1').removeClass().addClass('S1 show' +S1)
    $('.S2').removeClass().addClass('S2 show' +S2)

    $('.M1').removeClass().addClass('M1 show' +M1)
    $('.M2').removeClass().addClass('M2 show' +M2)

    $('.H1').removeClass().addClass('H1 show' +H1)
    $('.H2').removeClass().addClass('H2 show' +H2)
}
function Run12hr(S1,S2,M1,M2,HH){
    if (HH>12) {
        HH=HH-12
        $(".formats span:nth-child(2)").addClass('active');
    }
    else{
        $(".formats span:nth-child(1)").addClass('active');
    }
    var H1 = Math.floor(HH/10),
        H2 = HH%10;
    $('.S1').removeClass().addClass('S1 show' +S1)
    $('.S2').removeClass().addClass('S2 show' +S2)
    
    $('.M1').removeClass().addClass('M1 show' +M1)
    $('.M2').removeClass().addClass('M2 show' +M2)    
    if(H1 === 0){
        $('.H1').fadeOut(0)
    }
    else{
        $('.H1').fadeIn().removeClass().addClass('H1 show'+H1)
    }

    $('.H2').removeClass().addClass('H2 show' + H2);
}
function StopWatch(TimeHolder){
    var HH = Math.floor(TimeHolder/3600), 
        MM = Math.floor((TimeHolder - (HH*3600))/60),
        SS = Math.floor(TimeHolder-HH*3600-MM*60);
    
    var S1 = Math.floor(SS/10),
        S2 = SS%10,
        M1 = Math.floor(MM/10),
        M2 = MM%10,
        H1 = Math.floor(HH/10),
        H2 = HH%10;    
    Run24hr(S1,S2,M1,M2,H1,H2)
}

function update_time(){
    var dt = new Date(), 
        HH = dt.getHours(), 
        MM = dt.getMinutes(), 
        SS = dt.getSeconds(), 
        DD = dt.getDay();
    SetDay(DD)
    var S1 = Math.floor(SS/10),
        S2 = SS%10,
        M1 = Math.floor(MM/10),
        M2 = MM%10,
        H1 = Math.floor(HH/10),
        H2 = HH%10;
    
    if (format === 1) {
        Run24hr(S1,S2,M1,M2,H1,H2);
    }    
    else if(format === 2){
        Run12hr(S1,S2,M1,M2,HH);
    }
    else if(format === 3 && stopChecker === 0 ){
        TimeHolder++;
        StopWatch(TimeHolder);
    }
    else if(format === 4 && stopChecker === 0){
        TimeHolder--;
        if(TimeHolder===0){
            AlarmOut();
        }
        else{
            StopWatch(TimeHolder);
        }
       
    }
    else{
        StopWatch(TimeHolder);
    }


    setTimeout(update_time,1000);
}

$('.type span').on('click',function(){

    $('.type .active').removeClass('active');
    $(this).addClass('active');

    var T = $(this).html()
    if(T === '24hr'){
        format = 1;
        $('.H1').fadeIn();
        $('.formats span').removeClass('active');
    }
    else{
        format = 2;
    }
})

$('.fa-stopwatch').on('click',function(){
    $('.body').removeClass('BgAnimation');
    $('.H1').fadeIn();
    if(!($('.timeHolder').hasClass('StopWatch'))){
        format = 3;
        resetTimer();
        stopChecker = 1;
        $('.timeHolder').removeClass().addClass('timeHolder StopWatch');
        $('.numbers').fadeIn(0);
        $('.pause').removeClass('active');
        $('.start').addClass('active');
        TimeHolder = 0;
    }
})

$('.start').on('click',function(){
    $('.body').removeClass('BgAnimation'); 
    if(format===3){
        stopChecker=0;
        $(this).removeClass('active');
        $('.pause').addClass('active');
    }
    else if(format===4){
        TimeHolder =$('.countDown input').val();
        if (TimeHolder>0) {
            stopChecker=0;
            resetTimer();
            $(this).removeClass('active');
            $('.pause').addClass('active');
            $('.countDown').addClass('Disnone');
            $('.numbers').fadeIn(0);
        }
    }
})

$('.pause').on('click',function(){
    stopChecker=1;
    $(this).removeClass('active');
    $('.start').addClass('active');
})
$('.stop').on('click',function(){
    $('.body').removeClass('BgAnimation'); 
    if(format ===3){
        stopChecker=1;
        TimeHolder=0;
        resetTimer();
        $('.pause').removeClass('active');
        $('.start').addClass('active');
    }
    else if(format ===4){
        resetTimer();
        stopChecker=1;
        $('.countDown').removeClass('.Disnone');
        $('.numbers').fadeIn(0);
        $('.countDown input').val("")
        $('.pause').removeClass('active');
        $('.start').addClass('active');
    }
})
$('.fa-solid.fa-clock').on('click', function () {
    $('.body').removeClass('BgAnimation'); 
    stopChecker = 0;

    if ($('.type .active').html() === '12hr') {
        format = 2;
        $('.formats span').removeClass('active'); // Ensure AM/PM indicators reset
    } else {
        format = 1;
    }

    $('.timeHolder').removeClass().addClass('timeHolder');
    $('.numbers').fadeIn(0);
    $('.formats').fadeIn(0);  // Restore AM/PM display
    $('.type').fadeIn(0);      // Restore the 12hr/24hr selection

    // Reapply the 'active' class to the correct type
    $('.type span').removeClass('active');
    if (format === 1) {
        $('.type span:contains("24hr")').addClass('active');
    } else {
        $('.type span:contains("12hr")').addClass('active');
    }
});

$('.fa-regular.fa-clock').on('click', function(){
    $('body').removeClass('BgAnimation');
    $('h1').fadeIn();
    
    if (!$('.timeHolder').hasClass('countDwn')) {
        $('.timeHolder').removeClass().addClass('timeHolder countDwn'); // Fix class name
        format = 4;
        resetTimer();
        stopChecker = 1;
        $('.countDown').removeClass('Disnone'); // Fix class name
        $('.numbers').fadeOut(0);
        $('.pause').removeClass('active');
        $('.start').addClass('active');
    }
});

function AlarmOut(){
    $('body').addClass('.BgAnimation') // Incorrect class removal
    resetTimer()
    stopChecker=1
}

 

update_time()
