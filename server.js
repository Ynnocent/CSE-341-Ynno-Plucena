const app = require("express")();
require("dotenv").config()

//Routes Import
const indexRoutes = require("./routes/indexRoutes")
// ENV
const PORT = process.env.PORT

//Routes
app.use("/", indexRoutes);

app.listen(PORT, ()=> {
    console.log(`Server running on ${PORT}`)
})