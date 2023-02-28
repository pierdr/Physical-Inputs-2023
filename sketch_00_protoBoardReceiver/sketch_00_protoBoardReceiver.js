const NUM_BUTTONS = 6;
const NUM_ANALOG_SENSORS = 2;


var buttonsArray = [];
var analogSensorsArray = [];
var encoderValue;
let incomingData = -1;

function setup() {
  createCanvas(400, 400);
  //noLoop();
  // Example usage
  var input = "B0,0,0,0,0,0,A0,65,E-40";
  var decoded = decodeString(input);


  // Initialize the arrays for buttons and analog sensors
  for (var i = 0; i < NUM_BUTTONS; i++) {
    buttonsArray[i] = 0;
  }
  for ( i = 0; i < NUM_ANALOG_SENSORS; i++) {
    analogSensorsArray[i] = 0;
  }
  encoderValue = 0;

  // Start the serial communication
  serial = new p5.SerialPort();
  console.log('p5.serialport.js ' + serial.version);
  serial.list();
  serial.openPort("/dev/cu.usbmodemHIDPC1");


  // When our serial port is opened and ready for read/write

  // when we connect to the underlying server
  serial.on('connected', gotServerConnection);

  // when we get a list of serial ports that are available
  serial.on('list', gotList);

  // When we some data from the serial port
  serial.on('data', receiveData);

  // When or if we get an error
  serial.on('error', gotError);

  // When our serial port is opened and ready for read/write
  serial.on('open', gotOpen);

  serial.on('close', gotClose);

  // Callback to get the raw data, as it comes in for handling yourself
  serial.on('rawdata', gotRawData);
}

function receiveData() {
  let message = serial.readLine();
  // remove any trailing whitespace
  trim(message);
  // if the string is empty, do no more
  if (!message) {
    return;
  }

  decodeString(message);
}

function draw() {
  background(220);

  // Display the values of analog sensors
  fill(0);
  text("Analog Sensors:", 10, 20);
  for (var i = 0; i < NUM_ANALOG_SENSORS; i++) {
    text(analogSensorsArray[i], 10, 40 + 20 * i);
  }

  // Display the states of buttons
  text("Buttons:", 150, 20);
  for ( i = 0; i < NUM_BUTTONS; i++) {
    text(buttonsArray[i], 150, 40 + 20 * i);
  }

  // Display the state of the encoder
 
  text("Encoder:", 300, 20);
  text(encoderValue, 300, 40);
}



function decodeString(input) {


  // Split the input string into 3 parts: B values, A values, and encoder value
  var parts = input.split("A");
  var secStr = parts[1].split("E");
  var aValues = secStr[0].split(",");
  var bValues = parts[0].substring(1).split(",");
  
  encoderValue = parseInt(secStr[1]);
  

  // Convert the B values into integers and store them in the buttonsArray
  for (var i = 0; i < bValues.length; i++) {
    if (bValues[i]!="")
    {
      buttonsArray[i] = parseInt(bValues[i]);
    }
  }

  // Convert the A values into integers and store them in the analogSensorsArray
  for (i = 0; i < aValues.length; i++) {
    if (aValues[i]!="")
    {
      analogSensorsArray[i] = parseInt(aValues[i]);
    }
  }
}
