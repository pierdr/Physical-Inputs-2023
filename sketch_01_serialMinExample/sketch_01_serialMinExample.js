const NUM_BUTTONS = 6;
const NUM_ANALOG_SENSORS = 2;


var buttonsArray = [];
var analogSensorsArray = [];
var encoderValue;
let incomingData = -1;

function setup() {
  createCanvas(400, 400);


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
  serial.openPort("/dev/tty.usbmodemHIDPC1");

  // When we some data from the serial port
  serial.on('data', receiveData);
}


function draw() {
  background(map(analogSensorsArray[0],0,1025,0,255),map(analogSensorsArray[1],0,135,0,255),128);
  
}
