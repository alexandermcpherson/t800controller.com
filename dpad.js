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
  });

  $("#d-right").click( function(e) {
    e.preventDefault();
    logAction("d-right");
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

});