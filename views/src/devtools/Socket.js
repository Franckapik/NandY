
const socket = () => {
    var ws = new WebSocket("ws://localhost:8000");
    ws.onmessage = function (event) {
    console.log(event);
    };
}

export default socket;