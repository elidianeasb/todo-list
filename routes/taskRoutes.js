const router = require('express').Router() //.Router() indica que esse arq é uma router

const Task = require('../models/Task')


//Criar tasks
router.post('/task', (req, res) => { //async garante que esse tempo de operação com o banco de dados seja respeitado e só envia uma resposta ao cliente quando essa operação for concluída

    //req.body(informações da requisição)
    const { text } = req.body;

    Task.create({ text })
        .then(response => res.status(201).json(response))
        .catch(error => res.json(error))
})

module.exports = router;