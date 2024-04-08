import express from 'express';
import bodyParser from 'body-parser';
import ProductRoutes from './routes/ProductRoutes.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(express.json());

app.use('/api', ProductRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://${port}`);
});
