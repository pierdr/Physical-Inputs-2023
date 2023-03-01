# Physical Inputs

### Protoboard read from serial

1. download https://github.com/p5-serial/p5.serialserver
2. Open the **terminal** and navigate to this repository (cd + drag and drop the folder).
3. Install the dependencies with the command ```npm install```.
4. Start the server with the command ```node startserver.js```.



To install node on your machine just go on [https://nodejs.org/en/](https://nodejs.org/en/) and download the latest version of node.

After this you can run the sketch. 




### Errors with Node 14 and above
if you get some errors on an M1/M2 mac you might need to revert to version 14 (that works).

Here how to (write these commands on the terminal):
```sudo npm install -g n```

```sudo n 14```

```xattr -r -d com.apple.quarantine "~/PATH TO P5SERIAL SERVER/p5_serialServer/node_modules/bindings/bindings.js"
xattr -r -d com.apple.quarantine "~/PATH TO P5SERIAL SERVER/p5_serialServer/node_modules/@serialport/bindings/build/Release/bindings.node"
```


```npm rebuild``` 




