# hyperledger-simple-app

[![Build Status](https://travis-ci.org/zhazhalaila/hyperledger-simple-app.svg?branch=master)](https://travis-ci.org/zhazhalaila/hyperledger-simple-app)

基于Hyperledger Fabric的一个极简App

在此之前请确保已安装Hyperledger Fabric

Step 1:
  ```
  git clone https://github.com/zhazhalaila/hyperledger-simple-app.git
  ```
  
Step 2:
  ```
  npm install
  ```
  
Step 3:
  ```
  ./startFabric.sh
  //若遇到权限问题执行chmod a+x startFabric.sh
  ```
  
 Step 4:
   ```
   node registerAdmin.js
   node registerUser.js
   node server.js
   ```

访问`http://localhost:8000`

url 及 json数据格式

