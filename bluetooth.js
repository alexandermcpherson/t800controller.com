const bluetoothName = 'DSD TECH';
const bluetoothUUIDservice = '0000ffe0-0000-1000-8000-00805f9b34fb';
const bluetoothUUIDcharacteristic = '0000ffe1-0000-1000-8000-00805f9b34fb';

var speechCommand = "sc";
var movementCommand = "activate";
var ledCommand;
var soundCommand;
var myCharateristic;
var bluetoothDevice;
var connected = false;

$(function() {
		if (connected) {
			$("#inputs").find("input, button, submit, textarea, select").removeAttr("disabled");
			$("#inputs").addClass("enable-inputs");
			$("#disconnectBluetoothBtn").attr('disabled' , false);
			$("#reconnectBluetoothBtn").attr('disabled' , true;
		} else {
			$("#inputs").find("input, button, submit, textarea, select").attr("disabled", "disabled");
			$("#inputs").removeClass("enable-inputs");
			$("#inputs").addClass("disable-inputs");
			$("#disconnectBluetoothBtn").attr('disabled' , true);
			$("#reconnectBluetoothBtn").attr('disabled' , false;
		}
});

document.getElementById("discoverBluetoothBtn").addEventListener('click', function() {
	bluetoothDevice = null;
  	navigator.bluetooth.requestDevice({
    filters: [{
	    name: bluetoothName,
	    services: [bluetoothUUIDservice]
	  }]
  	})
  	.then(device => {
  		bluetoothDevice = device;
    	console.log('> Requested ' + device.name + ' (' + device.id + ')');
	    bluetoothDevice.addEventListener('gattserverdisconnected', onDisconnected);
	    // Attempts to connect to remote GATT Server.
	    connected = true;
			return device.gatt.connect();
  	})
  	.then(server => {
	  	return server.getPrimaryService(bluetoothUUIDservice);
	})
	.then(service => {
	  	return service.getCharacteristic(bluetoothUUIDcharacteristic);
	})
	.then(characteristic => {
		myCharateristic = characteristic;
	 })
	.catch(error => {
	    logError(error);
	});

});

// BLUETOOTH CONNECTIONS
document.getElementById("disconnectBluetoothBtn").addEventListener('click', function() {
	disconnect();
});

document.getElementById("reconnectBluetoothBtn").addEventListener('click', function() {
	reconnect();
});

function connect() {
  console.log('Connecting to Bluetooth Device...');
  return bluetoothDevice.gatt.connect()
  .then(server => {
    console.log('> Bluetooth Device connected');
  });
}

function disconnect() {
  if (!bluetoothDevice) {
    return;
  }
  console.log('Disconnecting from Bluetooth Device...');
  if (bluetoothDevice.gatt.connected) {
  	connected = false;
    bluetoothDevice.gatt.disconnect();
  } else {
    console.log('> Bluetooth Device is already disconnected');
  }
}

function onDisconnected(event) {
  // Object event.target is Bluetooth Device getting disconnected.
  console.log('> Bluetooth Device disconnected');
}

function reconnect() {
  if (!bluetoothDevice) {
    return;
  }
  if (bluetoothDevice.gatt.connected) {
    console.log('> Bluetooth Device is already connected');
    return;
  }
  connect()
  .catch(error => {
    console.log('Argh! ' + error);
  });
}

function sendLedCommand(ledCommand) {
	logCommand(ledCommand);
	const encoder = new TextEncoder('utf-8');
	const commandToSend = encoder.encode(ledCommand);
	myCharateristic.writeValueWithoutResponse(commandToSend);
}

function sendSoundCommand(soundCommand) {
	logCommand(soundCommand);
	const encoder = new TextEncoder('utf-8');
	const commandToSend = encoder.encode(soundCommand);
	myCharateristic.writeValueWithoutResponse(commandToSend);
}

function sendSpeechCommand() {
	logCommand(speechCommand);
	const encoder = new TextEncoder('utf-8');
	const commandToSend = encoder.encode(speechCommand);
	myCharateristic.writeValueWithoutResponse(commandToSend);
}

function sendMovementCommand() {
	logCommand(movementCommand);
	const encoder = new TextEncoder('utf-8');
	const commandToSend = encoder.encode(movementCommand);
	myCharateristic.writeValueWithoutResponse(commandToSend);
}

function logCommand(command) {
	console.log('Sending command: ' + command);
}	

function logError(error) {
	console.log('Error: ' + error);
}