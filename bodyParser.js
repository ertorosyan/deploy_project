const express = require('express');
let app = express(); 

const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/////////////////////////////////////////////////////////////////////////////////
app.post('/products', (req, res) => {
    const { name, price} = req.body;
    main(req.body);
    res.send(`Received data - Name: ${name}, Price: ${price}`);
});

app.get('/products', async (req, res) => {
    let resq = await showProducts();
    console.log(resq);
    res.send(resq);
});

async function main(data){
    client.connect(); 
    let db =  client.db("Mydb");// sarqum enq db my mongodb um
    let myCollection = db.collection("products");//mer db i patkanox taracqum voncor markanc hamar fayl exni
    await myCollection.insertOne(data);/// mi hat element enq avelacnum mer db i meji peoplesi mej
    // await myCollection.deleteOne({"name": "Romik"}) 
    // await myCollection.updateMany({"name"  : "Vaspur"}, {$set : {"name" : "romik"}})// sranq jnjelnu updaten e heto
    console.log("uxarkvec");
}

async function showProducts(){
    client.connect();
    let database = client.db("Mydb");
    const collection = database.collection('products');

    return await collection.find().toArray();   
}

// listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});