const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
const errorhandler = require('errorhandler')

// let store = {
//   posts: [
//     {name: 'Top 10 ES6 Features every Web Developer must know',
//     url: 'https://webapplog.com/es6',
//     text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
//     comments: [
//       {text: 'Cruel…..var { house, mouse} = No type optimization at all'},
//       {text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'},
//       {text: '(p1,p2)=>{ … } ,i understand this ,thank you !'}
//     ]
//     }
//   ]
// }

let store = {
    posts:[{
  attributes : [ {
      trait_type : "Breed",
      value : "Maltipoo"
    }, {
      trait_type : "Eye color",
      value : "Mocha"
    } ],
    description : "The world's most adorable and sensitive pup.",
    image : "https://ipfs.io/ipfs/bafkreif3tdrul2dovjcvaeshjh3ero4vxguldlogfsytb3n7nl5qhf3qei",
    name : "Ramses"
}]}

let app = express()

app.use(bodyParser.json())
app.use(errorhandler())

app.use((req, res, next) => {
    req.store = store
    next()
})

app.get('/posts', routes.posts.getPosts)
// app.post('/posts', routes.posts.addPost)
// app.post('/posts', routes.posts.updatePost)
app.put('/posts/:postId', routes.posts.updatePost)
app.get('/posts/:postId', routes.posts.getPost)
app.delete('/posts/:postId', routes.posts.removePost)

// app.get('/posts/:postId/comments', routes.comments.getComments)
// app.post('/posts/:postId/comments', routes.comments.addComment)
// app.put('/posts/:postId/comments/:commentId', routes.comments.updateComment)
// app.delete('/posts/:postId/comments/:commentId', routes.comments.removeComment)

app.listen(3000)