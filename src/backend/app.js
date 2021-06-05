// Importando dependencias
const express = require('express');
const cors = require('cors');
const { MongoClient } = require("mongodb");
const ObjectID = require('mongodb').ObjectID;
const dotenv = require('dotenv');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

dotenv.config();
const uri = process.env.DB_URL;
const client = new MongoClient(uri, { useUnifiedTopology: true });

let database = null;
let collection = null;

// CREATE
app.post('/api/clientes', (req, res) => {
  collection.insertOne(req.body)
    .then(result => {
      res.json('Adicionado')
    })
    .catch(error => console.error(error))

});

// READ
app.get("/api/clientes", async (_, res) => {
    try {
      let getClientes = await collection.find().toArray();
      return res.send(getClientes);
  
    } catch (err) {
      console.log(err);
      res.status(400).send(null);
    }
  });

// UPDATE
app.post('/api/clientes/update', (req, res) => {
  collection.updateOne(
    { _id: new ObjectID(req.body.id) }, { $set: req.body } 
  )
    .then(() => {
      res.send("Atualizado com sucesso")
    })
    .catch(error => console.error(error))

});

// DELETE
app.post('/api/clientes/delete', (req, res) => {
  collection.deleteOne(
    { _id: new ObjectID(req.body.id) }
  )
    .then(result => {
      if (result.deletedCount === 0) {
        return res.send("ID não encontrado")
      }
      res.send("Deletado com sucesso")
    })
    .catch(error => console.error(error))

});

// Heroku utiliza process.env.PORT para armazenar a porta
var port = process.env.PORT || 8080;

app.listen(port, async() => {
    try {
        // Conectando ao Banco de Dados
        await client.connect();
        database = client.db('lavebem');
        collection = database.collection('clientes');
        console.log('Conectado ao Mongo...');
        console.log('Servidor ligado');

    } catch (err) {
        console.log(err);
        process.exit(1);
    }
});
