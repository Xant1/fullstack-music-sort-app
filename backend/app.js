const express = require('express');
const cors = require('cors');
const db = require('./models');
const PORT = process.env.PORT || 3003;
const app = express();
const musicRouter = require('./routes/musicRouter');
const initialDB = require('./utils/initialDB');

app.use(cors());
app.use(express.json());
app.use('/api', musicRouter);

const start = async () => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port : ${PORT}`));
    // uncomment this function if you want to add fake music dates for DB
    //initialDB()
  } catch (err) {
    console.log(err);
  }
};

start().then();
