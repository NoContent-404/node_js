import defines from './../defines'
const SocketController = function () {
    let that = {};
    let _socket = undefined;


    that.init = function () {
        //  请求端口3000
        _socket = io(defines.serverUrl);
        _socket.on("welcome",function (data) {
            console.log("data = " +data);
        });
    };

    that.login = function (unique,nickname,avatar,cb) {
        _socket.emit('login',{
            uniqueID : unique,
            nickName : nickname,
            avatarUrl : avatar
        });
    }
    return that;
};
export default SocketController;