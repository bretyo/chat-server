const express = require('express');
const app = express();

const mc = require('./controllers/messages_controller')


app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));

// * ENDPOINTS
app.get('/api/messages', mc.read);
app.post('/api/messages', mc.create);
app.put('/api/messages/:id', mc.udpate);
app.delete('/api/messages/:id', mc.delete);

const PORT = 3001;

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))