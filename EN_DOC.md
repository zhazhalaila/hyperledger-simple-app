# hyperledger-simple-app

[![Build Status](https://travis-ci.org/zhazhalaila/hyperledger-simple-app.svg?branch=master)](https://travis-ci.org/zhazhalaila/hyperledger-simple-app) ![](https://img.shields.io/badge/language-javascript-blue.svg)

A simple web app base on Hyperledger Fabric.

@[DevilExileSu](https://github.com/DevilExileSu) provide the chaincode.

At the beginning, please sure you have installed Hyperledger Fabric v1.1.

<h4>Libraries</h4>

```
 npm 5.6.0
 node.js v8.11.3
 angularjs 1.4.3
```

<h4>Install & Config</h4>

Step 1

```
git clone https://github.com/zhazhalaila/hyperledger-simple-app.git
```

Into source-app folder

Step 2

```
npm install
```

Step 3

```
./startFabric.sh
If permission denied, execute chmod a+x startFabric.sh
After that, if permission denied, into basci-network folder execute chmod a+x start.sh
```

 Step 4
 ```
 node registerAdmin.js
 node registerUser.js
 node server.js
 ```
 
 Access `http://localhost:8000`
 
 This is no initializtion information. So you should write web form to insure you can query food information.
 
 For web form, i don't use javascript script to ensure what you write is right, so you should cram the form.
 
 For a same food ID, transit information can add many times, but batching and food information can only add one time.
 
 <h4>URL & JSON Format</h4>
 
 Get food information
 
`http://localhost:8000/source/:id`

```
{"FoodName":"Apple","FoodSpec":"123456","FoodMFGDate":"2018-8-24","FoodEXPDate":"10day","FoodLOT":"123","FoodQSID":"456","FoodMFRSName":"lalala","FoodProPrice":"2","FoodProPlace":"zhengzhou"}
```

Get batching information

`http://localhost:8000/part/:id`

```
[{"IngID":"1","IngName":"a"},{"IngID":"2","IngName":"b"},{"IngID":"3","IngName":"c"},{"IngID":"4","IngName":"d"},{"IngID":"5","IngName":"e"}]
```

Get transit information

`http://localhost:8000/transit/:id`

```
[{"LogDepartureTm":"14:20","LogArrivalTm":"16:40","LogMission":"Store","LogDeparturePl":"zhengzhou","LogDest":"wuhan","LogToSeller":"lalala","LogStorageTm":"1day","LogMOT":"truck","LogCopName":"shunfeng","LogCost":"10"},{"LogDepartureTm":"16:50","LogArrivalTm":"18:50","LogMission":"Store","LogDeparturePl":"wuhan","LogDest":"guangzhou","LogToSeller":"lalala","LogStorageTm":"1day","LogMOT":"truck","LogCopName":"shunfeng","LogCost":"10"}]
```

<h4>Deployment on server</h4>

Just need change `server.js` script

```javascript
var port = process.env.PORT || 3389; //port should change to your server security port

app.listen(port, '0.0.0.0', function(){
  console.log("Live on port: " + port);
});
```

<h4>Reference</h4>

[Education](https://github.com/hyperledger/education/tree/master/LFS171x)
  
[Writing Your First Application](https://hyperledger-fabric.readthedocs.io/en/release-1.1/write_first_app.html)
