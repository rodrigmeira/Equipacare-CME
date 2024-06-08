const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

const cmeRoutes = require('./routes/cmeRoutes');

app.use('/api/cme', cmeRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
