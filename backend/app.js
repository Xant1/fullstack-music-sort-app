const express = require('express')
const cors = require("cors");
const musicRouter = require('./routes/musicRouter')
const db = require('./models')

const PORT = process.env.PORT || 3003;
const app = express()

app.use(cors());
app.use(express.json());
app.use('/api', musicRouter)

const start = async () => {
   try {
     await db.sequelize.authenticate();
     await db.sequelize.sync();
     app.listen(PORT, () => console.log(`Server run on port ${PORT}`));
   } catch (err) {
     console.log(err);
   }
 };
 
 start().then();