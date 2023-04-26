const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000 ;

const categories = require('./data/categories.json')
const news = require('./data/news.json')
 
app.use(cors())

app.get('/', (req , res)=>{
    res.send('the news dragon server')
})

app.get('/categories', (req , res)=>{
    res.send(categories)
})

app.get('/news', (req, res)=>{
    res.send(news)
})

app.get('/news/:id',(req , res)=>{
    const id = req.params.id ;
    const singleNews = news.find(n => n._id === id) ;
    res.send(singleNews)
})

app.get('/categories/:id', (req , res)=>{
    const id = req.params.id ;
    if(id == 0){
        res.send(news)
    }
    const categoryNews = news.filter(n => n.category_id === id)
    res.send(categoryNews)
})

app.listen(port , ()=>{
    console.log(`the server is running ${port}`)
})