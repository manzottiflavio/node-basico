const express = require("express");
const app = express();
app.listen(9191);
app.use=(express.json());




app.get("/aula", (request, response)=>{
    return response.json({menssagem:"ola"})
})
