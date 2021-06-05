// Importando dependencias
const express = require('express');
const cors = require('cors');
const { MongoClient } = require("mongodb");
const dotenv = require('dotenv');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true}))
app.use(express.json());

dotenv.config();
const uri = process.env.DB_URL;
const client = new MongoClient(uri, { useUnifiedTopology: true });

let database = null;
let collection = null;

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
