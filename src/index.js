const express = require("express");
const app = express();
app.listen(9191);
app.use=(express.json());




app.get("/aula", (request, response)=>{
    return response.json({menssagem:"ola"})/*sempre lembrar de colocar em chave{} ou couchetes[]*/
})

app.post("/aula", (request,response)=>{
    return response.json(["aula1", "aula2"])
});

app.put("/aula/:id",(request, response)=>{
    return response.json(["aula1", "aula2","aula3"])
});

app.patch("/aula/:id", (request, response)=>{
    return response.json(["aula1","aula2", "aula4"])
});

app.delete("/aula/:id", (request, response)=>{
    return response.json(["aula1","aula2"])
})