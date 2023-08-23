const express = require("express"); // used for creating web-server
const { exec } = require("child_process");
const bodyParser = require("body-parser"); // used for parsing the JSON data
const app = express();

var allowCrossDomain = function (req, res, next) {
  // this is to avoid CORS error
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain, bodyParser.json());

app.post("/open-device", (req, res) => {
  const selectedDevice = req.body.selectedDevice; // extracts JSON data from the reuqest body
  const emulatorCommand = `emulator -avd ${selectedDevice}`; // this cmd will be used to launch the emulator based on the AVD name passed.

  exec(emulatorCommand, (error, stdout, stderr) => {
    // exec is used to execute the emulator command
    if (error) {
      res.status(500).send("Error starting emulator");
      return;
    }
    res.send("Emulator started successfully");
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
  This code sets up an Express server that listens for POST requests to the /open-device endpoint. 
  When a request is received, it attempts to start an Android emulator using the specified AVD name. 
  If the process encounters errors, it sends an error response; otherwise, it sends a success response.
  */
