const express = require('express');

const app = express();
const noteRouter = require("./routes/note");

const cors = require("cors");





// Middleware for parsing request bodies
app.use(cors());
app.use(express.json());
app.use("/notes", noteRouter);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
