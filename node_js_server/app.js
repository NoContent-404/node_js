const socket = require("socket.io");
const app = socket('3000');
app.on('cennection',function (socket) {
    console.log('一个用户连接');
});
console.log('监听端口3000');
