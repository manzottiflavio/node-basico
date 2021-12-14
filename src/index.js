const express = require("express");
const app = express();

app.use(express.json());




app.get("/aula", (request, response)=>{
const query=request.query/*filtro e paginaçao*/
console.log(query)
return response.json({menssagem:"ola"})/*sempre lembrar de colocar em chave{} ou couchetes[]*/
})

app.post("/aula", (request,response)=>{
    const body=request.body/*objetos ,inserção,alteração sempre em json*/
    console.log(body)
    return response.json(["aula1", "aula2"])
});

app.put("/aula/:id",(request, response)=>{
const params= request.params/* busca , editar e deleter*/
console.log(params)
return response.json(["aula1", "aula2","aula3"])
});

app.patch("/aula/:id", (request, response)=>{
    return response.json(["aula1","aula2", "aula4"])
});

app.delete("/aula/:id", (request, response)=>{
    return response.json(["aula1","aula2"])
})

app.listen(9191);