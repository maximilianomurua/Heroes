const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("DH-Heroes/public"));
app.use('/recursos' , express.static(__dirname + "/DH-Heroes/public"))


app.listen(3030, () => console.log("Servidor funcionando"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./DH-Heroes/views/index.html"));
});

app.get("/babbage", (req, res) => {
  res.sendFile(path.join(__dirname, "./DH-Heroes/views/babbage.html"));
});