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
