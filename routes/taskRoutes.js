const router = require('express').Router() //.Router() indica que esse arq é uma router

const { response } = require('express');
const Task = require('../models/Task')


//Criar tasks
router.post('/task', (req, res) => { //async garante que esse tempo de operação com o banco de dados seja respeitado e só envia uma resposta ao cliente quando essa operação for concluída

    const { text } = req.body;

    Task.create({ text })
        .then(response => res.status(201).json(response))
        .catch(error => res.json(error))
})

router.get('/task', (req, res) => {

    Task.find()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json(error))
})

router.delete('/task/:id', (req, res) => {
    const { id } = req.params;
    Task.findByIdAndDelete(id)
    .then(res.status(200).json({ message: `The task with id ${id} was deleted successfully` }))
    .catch(error => res.json(error));   

})

router.put('/task/:id', (req, res) => {
    const { id } = req.params; // Obtém o parâmetro "id" da URL
    const body = req.body; // Obtém o corpo da requisição (dados a serem atualizados)

    Task.findByIdAndUpdate(id, { text: body.text })
    .then(res.status(200).json({ message: `The task with id ${id} was edited successfully` }))
    .catch(error => res.json(error));   
})

module.exports = router;