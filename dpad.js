const HEADYMAX = 70;
const HEADYMIN = 0;

const HEADXMIN = 20;
const HEADXMAX = 160;

const EYESMIN = 0;
const EYESMAX = 180;

var headUpAndDown = 0;
var headLeftAndRight = 90;
var eyesLeftAndRight = 90;

$(function() {

  // DPAD
  $("#d-up").click( function(e) {
    e.preventDefault();
    logAction("d-up");
    headUpAndDown += 5;
    if (headUpAndDown <= HEADYMAX) {
      
      var command = "S_" + headUpAndDown + "_N";
      console.log(command);
      sendHeadLeftAndRightCommand(command);
    }
  });

  $("#d-down").click( function(e) {
    e.preventDefault();
    logAction("d-down");
    headUpAndDown -= 5;
    if (headUpAndDown >= HEADYMIN) {
      
      var command = "S_" + headUpAndDown + "_N";
      console.log(command);
      sendHeadLeftAndRightCommand(command);
    }
  });

  $("#d-left").click( function(e) {
    e.preventDefault();
    logAction("d-left");
    headLeftAndRight -= 5;
    if (headLeftAndRight >= HEADXMIN) {
      
      var command = "S_" + headLeftAndRight + "_H";
      console.log(command);
      sendHeadLeftAndRightCommand(command);
    }

  });

  $("#d-right").click( function(e) {
    e.preventDefault();
    logAction("d-right");
    headLeftAndRight += 5;
    if (headLeftAndRight <= HEADXMAX) {
      
      var command = "S_" + headLeftAndRight + "_H";
      console.log(command);
      sendHeadLeftAndRightCommand(command);
    }
  });

  // OPAD
  $("#o-up").click( function(e) {
    e.preventDefault();
    logAction("o-up");
  });

  $("#o-down").click( function(e) {
    e.preventDefault();
    logAction("o-down");
  });

  $("#o-left").click( function(e) {
    e.preventDefault();
    logAction("o-left");
  });

  $("#o-right").click( function(e) {
    e.preventDefault();
    logAction("o-right");
  });

  function logAction(action) {
    console.log(action);
  }

  function sendHeadLeftAndRightCommand(command) {
    const encoder = new TextEncoder('utf-8');
    const commandToSend = encoder.encode(command);
    myCharateristic.writeValueWithoutResponse(commandToSend);
  }

});