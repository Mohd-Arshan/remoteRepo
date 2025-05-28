const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files (for video files, css, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Dummy video list
const videos = [
    { title: 'Sample Video 1', file: 'video1.mp4' },
    { title: 'Sample Video 2', file: 'video2.mp4' }
];

// Home page: list videos
app.get('/', (req, res) => {
    res.render('index', { videos });
});

// Stream video
app.get('/video/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'videos', req.params.filename);
    res.sendFile(filePath);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});