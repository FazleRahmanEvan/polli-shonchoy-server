const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');

const port = process.env.PORT || 5000;
require('dotenv').config();
const app = express ();

//MIDDLEWARE
app.use(cors({
  // credentials: true,
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
  origin:'*'}
  ));
app.use(express.json());




const uri = `mongodb+srv://${process.env.DB_user}:${process.env.DB_PASS}@cluster0.qsa2w5u.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){

  try{
      const shadharonShodoshoCollection = client.db('polliShonchoyBank').collection('shadharonShodosho');
      const shodoshoOwaryNogodAdayBiboroniCollection = client.db('polliShonchoyBank').collection('shodoshoOwaryNogodAdayBiboroni');
      const rinAbedonOnumodonPotroCollection = client.db('polliShonchoyBank').collection('rinAbedonOnumodonPotro');
      const hishabKhularFormCollection = client.db('polliShonchoyBank').collection('hishabKhularForm');
      const shonchoyUttolonCollection = client.db('polliShonchoyBank').collection('shonchoyUttolon');
      const shoshogulaRinCollection = client.db('polliShonchoyBank').collection('shoshogulaRin');
      const shodoshoProttaharCollection = client.db('polliShonchoyBank').collection('shodoshoProttahar');
      const shomitiCreateCollection = client.db('polliShonchoyBank').collection('shomitiCreate');


       //  সাধারণ সদস্য প্রাপ্তির আবেদনপত্র
      app.post('/shadharonShodosho', async (req, res)=> {
        const resp = await shadharonShodoshoCollection.insertOne({...req.body});
        res.send(resp)
     })

     app.get('/shadharonShodosho', async (req, res)=> {
      const result = await shadharonShodoshoCollection.find().toArray();
      res.send(result)
   })

    app.get('/shadharonShodosho/shodoshoCode/:_id', async (req,res)=> {
    const id = req.params._id;
    console.log(id); 
    const query ={_id: ObjectId(id)}
    const result = await shadharonShodoshoCollection.findOne(query);
    console.log(result);
    res.send(result);        
  })

     //সমিতি থেকে সদস্যওয়ারী নগদ আদায় বিবরণী
     app.post('/nogodAdayBiborini', async (req, res)=> {
      const resp = await shodoshoOwaryNogodAdayBiboroniCollection.insertOne({...req.body});
      res.send(resp)

      app.get('/nogodAdayBiborini', async (req, res)=> {
        const result = await shodoshoOwaryNogodAdayBiboroniCollection.find().toArray();
        res.send(result)
     })
   })
  //  app.get('/nogodAdayBiborini/:_id', async (req,res)=> {
  //   const id = req.params._id;
  //   console.log(id); 
  //   const query ={_id: ObjectId(id)}
  //   const result = await shadharonShodoshoCollection.findOne(query);
  //   console.log(result);
  //   res.send(result);        
  // })

  app.get('/nogodAdayBiborini/:_id', async (req,res)=> {
    const id = req.params._id;
    console.log(id); 
    const query ={_id: ObjectId(id)}
    const result = await shodoshoOwaryNogodAdayBiboroniCollection.findOne(query);
    console.log(result);
    res.send(result);        
  })

     //ঋণ আবেদন ও অনুমোদন পত্র
     app.post('/rinAbedonOnumodonPotro', async (req, res)=> {
      const resp = await rinAbedonOnumodonPotroCollection.insertOne({...req.body});
      res.send(resp)
   })
   app.get('/rinAbedonOnumodonPotro', async (req, res)=> {
    const result = await rinAbedonOnumodonPotroCollection.find().toArray();
    res.send(result)
 })
  //  app.get('/rinAbedonOnumodonPotro/shodoshoCode/:_id', async (req,res)=> {
  //   const id = req.params._id;
  //   console.log(id); 
  //   const query ={_id: ObjectId(id)}
  //   const result = await shadharonShodoshoCollection.findOne(query);
  //   console.log(result);
  //   res.send(result);        
  // })
  app.get('/rinAbedonOnumodonPotro/:_id', async (req,res)=> {
    const id = req.params._id;
    console.log(id); 
    const query ={_id: ObjectId(id)}
    const result = await rinAbedonOnumodonPotroCollection.findOne(query);
    console.log(result);
    res.send(result);        
  })

     //  হিসাব-খোলার-ফরম
     app.post('/hishabKhularForm', async (req, res)=> {
      const resp = await hishabKhularFormCollection.insertOne({...req.body});
      res.send(resp)
   })

   app.get('/hishabKhularForm', async (req, res)=> {
    const result = await hishabKhularFormCollection.find().toArray();
    res.send(result)
 })

   app.get('/hishabKhularForm/:_id', async (req,res)=> {
    const id = req.params._id;
    console.log(id); 
    const query ={_id: ObjectId(id)}
    const result = await shadharonShodoshoCollection.findOne(query);
    console.log(result);
    res.send(result);        
  })

  app.get('/hishabForm/:_id', async (req,res)=> {
    const id = req.params._id;
    console.log(id); 
    const query ={_id: ObjectId(id)}
    const result = await hishabKhularFormCollection.findOne(query);
    console.log(result);
    res.send(result);        
  })

     //   সঞ্চয় উত্তোলনের আবেদনপত্র
     app.post('/shonchoyUttolon', async (req, res)=> {
      const resp = await shonchoyUttolonCollection.insertOne({...req.body});
      res.send(resp)
   })
   app.get('/shonchoyUttolon', async (req, res)=> {
    const result = await shonchoyUttolonCollection.find().toArray();
    res.send(result)
 })

app.get('/shonchoyUttolon/:_id', async (req,res)=> {
  const id = req.params._id;
  console.log(id); 
  const query ={_id: ObjectId(id)}
  const result = await shonchoyUttolonCollection.findOne(query);
  console.log(result);
  res.send(result);        
})

     //  শস্যগোলা ঋণ আবেদন ও অনুমোদন পত্র
     app.post('/shoshsogulaRin', async (req, res)=> {
      const resp = await shoshogulaRinCollection.insertOne({...req.body});
      res.send(resp)
   })
   app.get('/shoshsogulaRin', async (req, res)=> {
    const result = await shoshogulaRinCollection.find().toArray();
    res.send(result)
 })
//  app.get('/shoshsogulaRin/:_id', async (req,res)=> {
//   const id = req.params._id;
//   console.log(id); 
//   const query ={_id: ObjectId(id)}
//   const result = await rinAbedonOnumodonPotroCollection.findOne(query);
//   console.log(result);
//   res.send(result);        
// })
app.get('/shoshsogulaRin/:_id', async (req,res)=> {
  const id = req.params._id;
  console.log(id); 
  const query ={_id: ObjectId(id)}
  const result = await shoshogulaRinCollection.findOne(query);
  console.log(result);
  res.send(result);        
})

     //  সদস্যপদ প্রত্যাহারের আবেদনপত্র
     app.post('/shodoshoProttahar', async (req, res)=> {
      const resp = await shodoshoProttaharCollection.insertOne({...req.body});
      res.send(resp)
   })
   app.get('/shodoshoProttahar', async (req, res)=> {
    const result = await shodoshoProttaharCollection.find().toArray();
    res.send(result)
 })
 app.get('/shodoshoProttahar/:_id', async (req,res)=> {
  const id = req.params._id;
  console.log(id); 
  const query ={_id: ObjectId(id)}
  const result = await shodoshoProttaharCollection.findOne(query);
  console.log(result);
  res.send(result);        
})

     //  সমিতি তথ্য
     app.post('/shomitiCreate', async (req, res)=> {
      const resp = await shomitiCreateCollection.insertOne({...req.body});
      res.send(resp)
   })

   app.get('/shomitiCreate', async (req, res)=> {
    const result = await shomitiCreateCollection.find().toArray();
    res.send(result)
 })



  }
  finally{

  }

}
run().catch(console.log);


app.get('/',async(req,res) => {
    res.send('polli shonchoy bank is running');  
})

app.listen(port, () => console.log(`polli shonchoy bank running on ${port}`))