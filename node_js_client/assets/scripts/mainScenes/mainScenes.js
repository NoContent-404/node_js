import global from './../global'
cc.Class({
    extends: cc.Component,
    properties: {

    },
    onLoad : function(){
        global.socket.init();
    },

    buttonClick(event,customData){
        console.log("方法为："+customData);
        switch (customData) {
            case 'login' :
                global.socket.login(
                    global.myplayer.playerData.uniqueID,
                    global.myplayer.playerData.nickName,
                    global.myplayer.playerData.avatarUrl,function (err,data) {
                        if (err) {
                            console.log('login err' + err);
                        }else {
                            console.log('login data ='+JSON.stringify(data));
                        }
                    });
                break;
            default:
                break;
        }
    }

});
