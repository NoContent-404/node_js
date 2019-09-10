const socket = require('socket.io');
const app = socket('3000');

//  访问3000端口后服务器就能监听到3000端口，启用下面的方法
app.on('connection',function (socket) {
    console.log('有人来了');

    //  给客户端发送消息
    socket.emit('welcome','hello world!');

});
console.log('监听这个端口：3000');
