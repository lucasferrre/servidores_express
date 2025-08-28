const express = require('express')
const app = express()

const PORT = 3023

app.listen(PORT, () => {
    console.log(`Servidor de Pedidos rodando na porta ${PORT}`);
});