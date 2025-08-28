const express = require('express')
const app = express()

const PORT = 3021

app.listen(PORT, () => {
    console.log(`Servidor de Usuários rodando na porta ${PORT}`);
});

