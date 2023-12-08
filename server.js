const robot = require('robotjs');
console.log("Sunucu başlatılıyor...");
const io = require('socket.io')(4000);


io.on('connection', (socket) => {
    console.log('Client connected!');

socket.on('key', (key) => {
    robot.keyTap(key);
});

socket.on('mouse', (data) => {
    const { x, y } = data;
    robot.moveMouse(x, y);
});

});
