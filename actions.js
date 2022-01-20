const defaultVolumePosition = 22;
const defaultHeadUpAndDownPosition = 0;
const defaultHeadLeftAndRightPosition = 90;
const defaultEyesLeftAndRightPosition = 90;
const defaultBaseBlueLedPosition = 255;
const defaultBaseRedLedPosition = 255;

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
        sendSoundCommand("c1");
    });

    $("#custom2Btn").click( function() {
        sendSoundCommand("c2");
    });

    $("#custom3Btn").click( function() {
        sendSoundCommand("c3");
    });

    $("#custom4Btn").click( function() {
        sendSoundCommand("c4");
    });

    // ACTION SPEECH

    $('#speech-commands').change( function() {
        speechCommand = $(this).val();
        
        // Update speech selection text
        var text = "You selected: " + $(this).find('option:selected').text();
        $('#speechCommandSelection').text(text);

        console.log(speechCommand);
    });

    $('#movement-commands').change( function() {
        movementCommand = $(this).val();
        
        // Update movement selection text
        var text = "You selected: " + $(this).find('option:selected').text();
        $('#movementCommandSelection').text(text);

        console.log(movementCommand);
    });

    $("#sendSpeechCommandBtn").click( function() {
        sendSpeechCommand();
    });

    // ACTION MOVEMENT

    $("#sendActionCommandBtn").click( function() {
        sendMovementCommand();
    });

    // MANUAL ACTIONS

    // VOLUME
    $("#volume-label").click(function() {
        let volume = $("#volume-range").val(defaultVolumePosition);
        $("#volume-label").text("Volume: " + volume.val());
        // Send command 
        var command = "V_" + volume.val() + "_C";
        logCommand(command);
        sendActionCommand(command);
    });

    $("#volume-range").on('input', function() {
        $("#volume-label").text("Volume: " + $(this).val());
    });

    $("#volume-range").on('change',function(){
        // Send command 
        var command = "V_" + $(this).val() + "_C";
        logCommand(command);
        sendActionCommand(command);
    });

    // BLUE BASE LEDS
    $("#base-blue-led-label").click(function() {
        let baseBlueLed = $("#base-blue-led-range").val(defaultBaseBlueLedPosition);
        $("#base-blue-led-label").text("Base Blue Leds Brightness: " + baseBlueLed.val());
        // Send command 
        var command = "B_" + baseBlueLed.val() + "_L";
        logCommand(command);
        sendActionCommand(command);
    });

    $("#base-blue-led-range").on('input', function() {
        $("#base-blue-led-label").text("Base Blue Leds Brightness: " + $(this).val());
    });

    $("#base-blue-led-range").on('change',function(){
        // Send command 
        var command = "B_" + $(this).val() + "_L";
        logCommand(command);
        sendActionCommand(command);
    });

    // RED BASE LEDS
    $("#base-red-led-label").click(function() {
        let baseRedLed = $("#base-red-led-range").val(defaultBaseRedLedPosition);
        $("#base-red-led-label").text("Base Red Leds Brightness: " + baseRedLed.val());
        // Send command 
        var command = "R_" + baseRedLed.val() + "_L";
        logCommand(command);
        sendActionCommand(command);
    });

    $("#base-red-led-range").on('input', function() {
        $("#base-red-led-label").text("Base Red Leds Brightness: " + $(this).val());
    });

    $("#base-red-led-range").on('change',function(){
        // Send command 
        var command = "R_" + $(this).val() + "_L";
        logCommand(command);
        sendActionCommand(command);
    });

    // HEAD UP AND DOWN

    $("#headUpAndDown-label").click(function() {
        let headUpAndDown = $("#headUpAndDown-range").val(defaultHeadUpAndDownPosition);
        $("#headUpAndDown-label").text("Move Head Up & Down: " + headUpAndDown.val());
        // Send command 
        var command = "S_" + headUpAndDown.val() + "_N";
        logCommand(command);
        sendActionCommand(command);
    });

    $("#headUpAndDown-range").on('input', function() {
        $("#headUpAndDown-label").text("Move Head Up & Down: " + $(this).val());
    });

    $("#headUpAndDown-range").on('change',function(){
        // Send command 
        var command = "S_" + $(this).val() + "_N";
        logCommand(command);
        sendActionCommand(command);
    });

    // HEAD LEFT AND RIGHT

    $("#headLeftAndRight-label").click(function() {
        let headLeftAndRight = $("#headLeftAndRight-range").val(defaultHeadLeftAndRightPosition);
        $("#headLeftAndRight-label").text("Move Head Left & Right: " + headLeftAndRight.val());
        // Send command 
        var command = "S_" + headLeftAndRight.val() + "_H";
        logCommand(command);
        sendActionCommand(command);
    });

    $("#headLeftAndRight-range").on('input', function() {
        $("#headLeftAndRight-label").text("Move Head Left & Right: " + $(this).val());
    });

    $("#headLeftAndRight-range").on('change',function(){
        // Send command 
        var command = "S_" + $(this).val() + "_H";
        logCommand(command);
        sendActionCommand(command);
    });

    // EYES LEFT AND RIGHT

    $("#eyesLeftAndRight-label").click(function() {
        let eyesLeftAndRight = $("#eyesLeftAndRight-range").val(defaultEyesLeftAndRightPosition);
        $("#eyesLeftAndRight-label").text("Move Eyes Left & Right: " + eyesLeftAndRight.val());
        // Send command 
        var command = "S_" + eyesLeftAndRight.val() + "_E";
        logCommand(command);
        sendActionCommand(command);
    });

    $("#eyesLeftAndRight-range").on('input', function() {
        $("#eyesLeftAndRight-label").text("Move Eyes Left & Right: " + $(this).val());
    });

    $("#eyesLeftAndRight-range").on('change',function(){
        // Send command 
        var command = "S_" + $(this).val() + "_E";
        logCommand(command);
        sendActionCommand(command);
    });

});
