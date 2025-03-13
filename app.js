const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the API'
    });
});

app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'Post created...',
                authData
            });
        }
    });
});

app.post('/api/login', (req, res) => {
    const user = {
        id: 1,
        username: 'brandon',
        email: 'brandon@gmail.com'
    }

    jwt.sign({user: user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
        res.json({
            token: token
        });
    });
});

// FORMAT OF TOKEN
// Bearer <access_token>
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader === 'undefined') {
        res.sendStatus(403);
    } else {
        const token = bearerHeader.split(' ')[1];
        req.token = token;
        next();
    }
}

app.listen(3000, () => console.log('Server started on port 3000'));
