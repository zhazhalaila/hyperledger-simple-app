# hyperledger-simple-app

[![Build Status](https://travis-ci.org/zhazhalaila/hyperledger-simple-app.svg?branch=master)](https://travis-ci.org/zhazhalaila/hyperledger-simple-app)

基于Hyperledger Fabric的一个极简App

chaincode 由@[DevilExileSu](https://github.com/DevilExileSu)所编写

在此之前请确保已安装Hyperledger Fabric

库版本:

  ```
  npm 5.6.0
  node.js v8.11.3
  hyperledger fabric v1.1
  angularjs 1.4.3
  ```
  
如有Bug，欢迎提出

Step 1:
  ```
  git clone https://github.com/zhazhalaila/hyperledger-simple-app.git
  ```
  
Step 2:
  ```
  npm install
  //安装时速度可能会很慢，静等即可
  ```
  
Step 3:
  ```
  ./startFabric.sh
  若遇到权限问题执行chmod a+x startFabric.sh
  若仍有问题进入basic-network文件夹下执行 chmod a+x start.sh
  ```

 Step 4:
   ```
   node registerAdmin.js
   node registerUser.js
   node server.js
   ```

访问`http://localhost:8000`

在填写表单信息时，没有做过多的处理，因此每个选项都要尽量填写（配料的表单可以不填写完）

url & json 格式

获取食品信息

`http://localhost:8000/source/:id`

```
{"FoodName":"Apple","FoodSpec":"123456","FoodMFGDate":"2018-8-24","FoodEXPDate":"10day","FoodLOT":"123","FoodQSID":"456","FoodMFRSName":"lalala","FoodProPrice":"2","FoodProPlace":"zhengzhou"}
```

获取食品配料信息

`http://localhost:8000/part/:id`

 ```
 [{"IngID":"1","IngName":"a"},{"IngID":"2","IngName":"b"},{"IngID":"3","IngName":"c"},{"IngID":"4","IngName":"d"},{"IngID":"5","IngName":"e"}]
 ```
 
 获取交易（运输）信息
 
 `http://localhost:8000/transit/:id`
 
 ```
 [{"LogDepartureTm":"14:20","LogArrivalTm":"16:40","LogMission":"Store","LogDeparturePl":"zhengzhou","LogDest":"wuhan","LogToSeller":"lalala","LogStorageTm":"1day","LogMOT":"truck","LogCopName":"shunfeng","LogCost":"10"},{"LogDepartureTm":"16:50","LogArrivalTm":"18:50","LogMission":"Store","LogDeparturePl":"wuhan","LogDest":"guangzhou","LogToSeller":"lalala","LogStorageTm":"1day","LogMOT":"truck","LogCopName":"shunfeng","LogCost":"10"}]
 ```
 
参考链接

  [Education](https://travis-ci.org/zhazhalaila/hyperledger-simple-app)
  
  [Writing Your First Application](https://hyperledger-fabric.readthedocs.io/en/release-1.1/write_first_app.html)
  

注释说明:

  除了chaincode，其余大部分.js文件都是参照以上参考链接所写，因此注释为英文
