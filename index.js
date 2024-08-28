const express = require('express');
const app = express();

const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');

app.use('/breeders', shelterRoutes);
app.use('/dogs', dogRoutes);

app.listen(3000, () => {
    console.log('Serving app on local host 3000!!!')
})