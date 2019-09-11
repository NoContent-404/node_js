import SocketController from './data/socket-controller'
import player from './data/player'
const global ={};
global.socket = SocketController();
global. myplayer = player();
export default global;