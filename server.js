const express = require('express');
const aboutRouter = require('./routes/about-route');
const app = express();



app.use('/about',aboutRouter)


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log('Server is running on: ', PORT));
