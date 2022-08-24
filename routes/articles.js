const express = require('express')
const router = express.Router()

router.get('/projects', (req, res) => {
    const articles = [{
        title: "Hello I'm a title",
        date: Date.now(),
        content: "hey learn vector calculus"
    }]
    res.render('projects.ejs', { articles: articles})
})



module.exports = router