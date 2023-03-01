
// We are connected and ready to go
function gotServerConnection() {
  print('connected to server');
}

// Got the list of ports
function gotList(list) {
  print('list of serial ports:');
  // list is an array of their names
  for (let i = 0; i < list.length; i++) {
    print(list[i]);
  }
}

// Connected to our serial device
function gotOpen() {
  print('serial port is open');
}

function gotClose() {
  print('serial port is closed');
  latestData = 'serial port is closed';
}

// Ut oh, here is an error, let's log it
function gotError(e) {
  print(e);
}

// we got raw from the serial port
function gotRawData(data) {


}
