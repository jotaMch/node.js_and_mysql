const Postagem = sequelize.define('postagens', {
    nome: {
        type: Sequelize.STRING
    },
    pedido: {
        type: Sequelize.TEXT
    },
    valor: {
        type: Sequelize.FLOAT
    }
})

const Usuario = sequelize.define('usuarios', {
    email: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    }
});
/* 
Usuario.create({
    nome: "Souza",
    sobrenome: "Silva",
    idade: 25,
    email: "souz@gmail.com"
}) */

/* Usuario.sync({force: true}); */

/* 
Usuario.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("falha ao se conectar: "+erro)
})  */