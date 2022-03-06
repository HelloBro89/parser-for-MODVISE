import dotenv from 'dotenv';
import { app } from './app.js';

dotenv.config();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is running on http://localhost:${port}`));
