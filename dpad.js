const HEADYMAX = 70;
const HEADYMIN = 0;

const HEADXMIN = 20;
const HEADXMAX = 160;

const EYESMIN = 0;
const EYESMAX = 180;

const JAWMAX = 40;
const JAWMIN = 0;

var headUpAndDown = 0;
var headLeftAndRight = 90;
var eyesLeftAndRight = 90;
var jawUpAndDown = 0;

$(function() {

  // DPAD
  $("#d-up").click( function(e) {
    e.preventDefault();
    logAction("d-up");
    if (headUpAndDown < HEADYMAX) {

      headUpAndDown += 5;
      var command = "S_" + headUpAndDown + "_N";
      console.log(command);
      sendCommand(command);
    }
  });

  $("#d-down").click( function(e) {
    e.preventDefault();
    logAction("d-down");
    
    if (headUpAndDown > HEADYMIN) {

      headUpAndDown -= 5;
      var command = "S_" + headUpAndDown + "_N";
      console.log(command);
      sendCommand(command);
    }
  });

  $("#d-left").click( function(e) {
    e.preventDefault();
    logAction("d-left");
    
    if (headLeftAndRight > HEADXMIN) {
      headLeftAndRight -= 5;
      var command = "S_" + headLeftAndRight + "_H";
      console.log(command);
      sendCommand(command);
    }

  });

  $("#d-right").click( function(e) {
    e.preventDefault();
    logAction("d-right");

    if (headLeftAndRight < HEADXMAX) {
      headLeftAndRight += 5;
      var command = "S_" + headLeftAndRight + "_H";
      console.log(command);
      sendCommand(command);
    }
  });

  // OPAD
  $("#o-up").click( function(e) {
    e.preventDefault();
    logAction("o-up");

    if (jawUpAndDown < JAWMAX) {
      jawUpAndDown += 1;
      var command = "S_" + jawUpAndDown + "_J";
      console.log(command);
      sendCommand(command);
    }
  });

  $("#o-down").click( function(e) {
    e.preventDefault();
    logAction("o-down");

    if (jawUpAndDown > JAWMIN) {
      jawUpAndDown -= 1;
      var command = "S_" + jawUpAndDown + "_J";
      console.log(command);
      sendCommand(command);
    }
  });

  $("#o-left").click( function(e) {
    e.preventDefault();
    logAction("o-left");

    if (eyesLeftAndRight > EYESMIN) {
      eyesLeftAndRight -= 1;
      var command = "S_" + headLeftAndRight + "_E";
      console.log(command);
      sendCommand(command);
    }
  });

  $("#o-right").click( function(e) {
    e.preventDefault();
    logAction("o-right");

    if (eyesLeftAndRight < EYESMAX) {
      eyesLeftAndRight += 1;
      var command = "S_" + headLeftAndRight + "_E";
      console.log(command);
      sendCommand(command);
    }
  });

  function logAction(action) {
    console.log(action);
  }

  function sendCommand(command) {
    const encoder = new TextEncoder('utf-8');
    const commandToSend = encoder.encode(command);
    myCharateristic.writeValueWithoutResponse(commandToSend);
  }


});