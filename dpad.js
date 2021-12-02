$(function() {

  // DPAD
  $("#d-up").click( function() {
        logAction("d-up");
  });

  $("#d-down").click( function() {
        logAction("d-down");
  });

  $("#d-left").click( function() {
        logAction("d-left");
  });

  $("#d-right").click( function() {
        logAction("d-right");
  });

  // OPAD
  $("#o-up").click( function() {
        logAction("o-up");
  });

  $("#o-down").click( function() {
        logAction("o-down");
  });

  $("#o-left").click( function() {
        logAction("o-left");
  });

  $("#o-right").click( function() {
        logAction("o-right");
  });

  function logAction(action) {
    console.log(action);
  }

});