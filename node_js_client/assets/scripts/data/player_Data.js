const PlayerData = function () {
    let that ={};
    that.uid = undefined;
    that.uniqueID = '10000';
    that.nickName = '小明' + Math.floor(Math.random() * 10);
    that.avatarUrl = 'http://img0.imgtn.bdimg.com/it/u=3996639627,816346567&fm=26&gp=0.jpg';
    that.houseCardCount = 0;
    for (let i=0;i<7;i++){
        that.uniqueID += Math.floor(Math.random() * 10);
    }

    //  登录成功后返回的数据
    that.loginSuccess = function (data) {
        that.uniqueID = data.uniqueID;
        that.nickName = data.nickName;
        that.avatarUrl = data.avatarUrl;
    }
    that.loginSuccessMagessage = function (data) {
        console.log('data = ' + data);
    }
    return that;
}
export default PlayerData;