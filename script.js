const express = require('express');// nermucum e express moduly , expressy freamfork e node jsi hamr

let app = express(); // express functiony stanum em
app.use(express.json())//esi enum enq vor galacox tvyakly jsonic poxvi objecti xoski res y

app.post("/test", function(req, res){  //es functiony mer abichni postn e or erek che arajin ory grel enq postmanic ens uxarkum db
    
    const name = {
        _id: 123,
        body: req.body// es body n en tvyalna vory postmanin uxarkum enq
    } //es tvyaln enq uxarkum

    main(name)
    res.send("barev");//sranov postmanin uxarkum enq parev
})

const {MongoClient} = require('mongodb');//mongo db class enq nermucum classy ytenc abstruct patkeracra
const client = new MongoClient('mongodb://localhost:27017');//esi classn enq kanchum nshvac localhosti vra
async function main(data){// asynq e qani vor inqy asixon funkcia e 
    client.connect();// connect enq exnm socketa bacvum
    let db =  client.db("Mydb");// sarqum enq db my mongodb um
    let myCollection = db.collection("peoples");//mer db i patkanox taracqum voncor markanc hamar fayl exni
    await myCollection.insertOne(data);/// mi hat element enq avelacnum mer db i meji peoplesi mej
    // await myCollection.deleteOne({"name": "Romik"}) 
    // await myCollection.updateMany({"name"  : "Vaspur"}, {$set : {"name" : "romik"}})// sranq jnjelnu updaten e heto
}
app.listen(4704); //esel chasem
