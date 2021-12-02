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
  });

  $("#d-down").click( function(e) {
    e.preventDefault();
    logAction("d-down");
  });

  $("#d-left").click( function(e) {
    e.preventDefault();
    logAction("d-left");
    headLeftAndRight++;
    var command = "s_" + headLeftAndRight + "_H";

    if (headLeftAndRight <= HEADXMAX) {
      sendHeadLeftAndRightCommand(command);
    }

  });

  $("#d-right").click( function(e) {
    e.preventDefault();
    logAction("d-right");
    headLeftAndRight--;
    var command = "s_" + headLeftAndRight + "_H";

    if (headLeftAndRight >= HEADXMIN) {
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