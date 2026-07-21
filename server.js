const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

// Віддаємо статичні файли з папки public
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('⚡ Мережа: Новий гравець підключився:', socket.id);

    socket.on('disconnect', () => {
        console.log('🔌 Мережа: Гравець відключився:', socket.id);
    });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`🚀 Сервер DEJAVU працює на порту ${PORT}`);
});
