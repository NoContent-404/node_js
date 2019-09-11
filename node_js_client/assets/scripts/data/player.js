import player_Data from './player_Data'
const player = function () {
    let that = {};
    that.playerData = player_Data();
    return that;
};
export default player;