const express = require("express")
const app = express()
const port = 3000
app.use(express.json())

app.get('/',(req,res) => {
  res.redirect("/login")
})


app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post("/login", (req, res) => {
  const { usuario, senha } = req.body;

  if (usuario === "admin" && senha === "1234") {
    res.json({ redirect: "/Acesso" });
  } else {
    res.status(401).send("Usuário ou senha inválidos");
  }
});

app.get("/Acesso",(req,res) => {
  res.sendFile(__dirname + "/working.html")
})




app.listen(port, () => {

})
