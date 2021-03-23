import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/posts.js';

const app = express();  

app.use('/posts', router);

app.use(bodyParser.json({limit: '30 mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30 mb', extended: true}));
app.use(cors());

const CONNECTION_URL = process.env.CONNECTION; 
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`)))
    .catch((error) => console.log(`error: ${error.message} `));

mongoose.set('useFindAndModify', false);
