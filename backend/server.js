const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voila la réponse du serveur nodemon!');
});

server.listen(process.env.PORT || 3000);