$(function() {
    // LEDS

    $("#redLed1Btn").click( function() {
        $me = $(this);
        $me.toggleClass('off');
        if($me.is(".off")){
            $me.html("On");
            sendLedCommand("red_led_1_on");
        }else {
            $me.html("Off");
            sendLedCommand("red_led_1_off");
        }
    });

    $("#redLed2Btn").click( function() {
        $me = $(this);
        $me.toggleClass('off');
        if($me.is(".off")){
            $me.html("On");
            sendLedCommand("red_led_2_on");
        }else {
            $me.html("Off");
            sendLedCommand("red_led_2_off");
        }
    });

    $("#blueLed1Btn").click( function() {
        $me = $(this);
        $me.toggleClass('off');
        if($me.is(".off")){
            $me.html("On");
            sendLedCommand("blue_led_1_on");
        }else {
            $me.html("Off");
            sendLedCommand("blue_led_1_off");
        }
    });

    $("#blueLed2Btn").click( function() {
        $me = $(this);
        $me.toggleClass('off');
        if($me.is(".off")){
            $me.html("On");
            sendLedCommand("blue_led_2_on");
        }else {
            $me.html("Off");
            sendLedCommand("blue_led_2_off");
        }
    });

    $("#allBlueLedBtn").click( function() {
        $me = $(this);
        $me.toggleClass('off');
        if($me.is(".off")){
            $me.html("All Blue On");
            $("#blueLed1Btn").html("On");
            $("#blueLed2Btn").html("On");
            sendLedCommand("blue_led_on");
        }else {
            $me.html("All Blue Off");
            $("#blueLed1Btn").html("Off");
            $("#blueLed2Btn").html("Off");
            sendLedCommand("blue_led_off");
        }
    });

    $("#allRedLedBtn").click( function() {
        $me = $(this);
        $me.toggleClass('off');
        if($me.is(".off")){
            $me.html("All Red On");
            $("#redLed1Btn").html("On");
            $("#redLed2Btn").html("On");
            sendLedCommand("red_led_on");
        }else {
            $me.html("All Red Off");
            $("#redLed1Btn").html("Off");
            $("#redLed2Btn").html("Off");
            sendLedCommand("red_led_off");
        }
    });

    $("#eyeLedsBtn").click( function() {
        $me = $(this);
        $me.toggleClass('off');
        if($me.is(".off")){
            $me.html("Eyes On");
            sendLedCommand("eyes_on");
        }else {
            $me.html("Eyes Off");
            sendLedCommand("eyes_off");
        }
    });

    $("#plasmaLed1Btn").click( function() {
        sendLedCommand("plasma_1");
    });

    $("#plasmaLed2Btn").click( function() {
        sendLedCommand("plasma_2");
    });

    $("#plasmaLed3Btn").click( function() {
        sendLedCommand("plasma_3");
    });

    $("#plasmaLed4Btn").click( function() {
        sendLedCommand("plasma_4");
    });

    $("#plasmaRandomLedBtn").click( function() {
        sendLedCommand("plasma_random");
    });

    // SOUNDS

    $("#t1Btn").click( function() {
        sendSoundCommand("t1");
    });

    $("#t2Btn").click( function() {
        sendSoundCommand("t2");
    });

    $("#t3Btn").click( function() {
        sendSoundCommand("t3");
    });

    $("#t4Btn").click( function() {
        sendSoundCommand("t4");
    });

    $("#t5Btn").click( function() {
        sendSoundCommand("t5");
    });

    $("#t6Btn").click( function() {
        sendSoundCommand("t6");
    });

    $("#custom1Btn").click( function() {
        sendSoundCommand("custom1");
    });

    $("#custom2Btn").click( function() {
        sendSoundCommand("custom2");
    });

    $("#custom3Btn").click( function() {
        sendSoundCommand("custom3");
    });

    $("#custom4Btn").click( function() {
        sendSoundCommand("custom4");
    });

    // ACTION SPEECH

    $("#sendSpeechCommandBtn").click( function() {
        sendSpeechCommand();
    });

    // ACTION MOVEMENT

    $("#sendActionCommandBtn").click( function() {
        sendMovementCommand();
    });

    // // DPAD
    // $("#d-up").click( function(e) {
    //     e.preventDefault();
    //     logAction("d-up");
    // });

    // $("#d-down").click( function(e) {
    //     e.preventDefault();
    //     logAction("d-down");
    // });

    // $("#d-left").click( function(e) {
    //     e.preventDefault();
    //     logAction("d-left");
    // });

    // $("#d-right").click( function(e) {
    //     e.preventDefault();
    //     logAction("d-right");
    // });

    // // OPAD
    // $("#o-up").click( function(e) {
    //     e.preventDefault();
    //     logAction("o-up");
    // });

    // $("#o-down").click( function(e) {
    //     e.preventDefault();
    //     logAction("o-down");
    // });

    // $("#o-left").click( function(e) {
    //     e.preventDefault();
    //     logAction("o-left");
    // });

    // $("#o-right").click( function(e) {
    //     e.preventDefault();
    //     logAction("o-right");
    // });

    // function logAction(action) {
    //     console.log(action);
    // }

});
