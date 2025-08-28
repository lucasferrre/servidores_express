const express = require('express')
const app = express()

const PORT = 3022

app.listen(PORT, () => {
    console.log(`Servidor de Produtos rodando na porta ${PORT}`);
});