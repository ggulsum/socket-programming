const io = require('socket.io-client');
const robot = require('robotjs');
const readline = require('readline');

const socket = io('http://localhost:3000');

console.log("İstemci baslatiliyor...");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

process.stdin.resume();
process.stdin.setEncoding('utf8');

//Klavye 
process.stdin.on('data', (data) => {
    const key = data.trim();
    socket.emit('key', key);
    console.log(`Tiklanan Tuslar: ${key}`);
});


// Fare koordinatları
setInterval(() => {
    const mouse = robot.getMousePos();
    socket.emit('mouse', { x: mouse.x, y: mouse.y });
    console.log(`Fare koordinatları: x=${mouse.x}, y=${mouse.y}`);
}, 100);
