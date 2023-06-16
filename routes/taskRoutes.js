const router = require('express').Router() //.Router() indica que esse arq é uma router

const { response } = require('express');
const Task = require('../models/Task')


//Criar tasks
router.post('/tasks', async (req, res) => { //async garante que esse tempo de operação com o banco de dados seja respeitado e só envia uma resposta ao cliente quando essa operação for concluída
    try {
        const { text } = req.body;
        await Task.create({ text })
        res.status(201).json({ message: 'Task created' })

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.get('/tasks', async (req, res) => {
    try {
        const tasksList = await Task.find()
        res.status(200).json(tasksList.map((task) => ({identifier: task._id, text: task.text, isCompleted: task.isCompleted})))

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.delete('/tasks/:id', async (req, res) => {

    const { id } = req.params;

    try {
        await Task.findByIdAndDelete(id)
        res.status(200).json({ message: `The task ${id} was deleted successfully` })
    } catch (error) {
        res.json(error)
    }
})

router.put('/tasks/:id', async (req, res) => {
    const { id } = req.params; // Obtém o parâmetro "id" da URL
    const body = req.body; // Obtém o corpo da requisição (dados a serem atualizados)

    try {
        await Task.findByIdAndUpdate(id, { text: body.text })
        res.status(200).json({ message: `The task was edited successfully` })

    } catch (error) {
        res.json(error)
    }
})

router.post('/tasks/:id/complete', async (req, res) => {
    const { id } = req.params;
    
    try {
        const task = await Task.findById(id)
        task.isCompleted = !task.isCompleted
        await task.save()
        res.status(200).json({ message: `Task is ${task.isCompleted ? "completed" : "not completed"}` })

    } catch (error) {
        res.json(error)
    }
})

module.exports = router;