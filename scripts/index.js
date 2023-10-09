const express = require('express');
const app = express();
const handlebars  = require('express-handlebars');  // Correção na importação
const Post = require('../models/Post');
// Configuração do Handlebars
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//body Parser config
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//rotas
app.get('/', function(req, res) {
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts) { 
        const postData = posts.map(post => ({
            createdAt: post.createdAt,
            titulo: post.titulo,
            conteudo: post.conteudo
        }));
        res.render('home', { posts: postData });
    }); 
});

app.get('/rota', function(req, res) {
    res.render('formulario')
});

app.post('/post', function(req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo : req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Houve um erro: " + erro)
    })
});

app.get('/deletar/:id', function(req, res) {
    console.log('Rota de deleção acionada');

    const postId = req.params.id;
    console.log('ID a ser deletado:', postId);
    Post.destroy({ where: { 'id': postId } })
        .then(function() {
            res.send("Postagem deletada com sucesso!");
        })
        .catch(function(error) {
            console.error('Erro ao deletar postagem:', error);
            res.send("Esta postagem não existe ou houve um erro!");
        });
});



app.listen(8081, function() {
    console.log('Servidor rodando');
});
