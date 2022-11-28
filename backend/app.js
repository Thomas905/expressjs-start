const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const postModel = require('./models/post');
const app = express();

mongoose.connect('mongodb://localhost:27017/expressjsstart',
    { useNewUrlParser: true,
            useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.post('/api/posts', async (req, res) => {
    const post = new postModel({
        title: req.body.title,
        description: req.body.description
    });
    await post.save()
        .then(() => res.json({message: 'Post saved successfully!'}).status(201))
        .catch(error => res.json({error}).status(400));
});


module.exports = app;