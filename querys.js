use ecommerce

db.createCollection("mensajes")
db.createCollection("productos")

db.mensajes.insertMany([{mail:"pedro@gmail.com",datetime: ISODate(), mensaje:"hola"},{mail:"pablo@gmail.com",datetime: ISODate(), mensaje:"chau"},{mail:"maria@gmail.com",datetime: ISODate(), mensaje:"por fin"},{mail:"diego@gmail.com",datetime: ISODate(), mensaje:"que tal"},{mail:"sandra@gmail.com",datetime: ISODate(), mensaje:"holis"},{mail:"maru@gmail.com",datetime: ISODate(), mensaje:"porfa"},{mail:"andres@gmail.com",datetime: ISODate(), mensaje:"saleee"},{mail:"toti@gmail.com",datetime: ISODate(), mensaje:"veniii"},{mail:"lau@gmail.com",datetime: ISODate(), mensaje:"bye bye"},{mail:"carlitos@gmail.com",datetime: ISODate(), mensaje:"bobo"}])

db.productos.insertMany([{nombre:"mesa",precio:234,url:"https://www.x.com.ar/mesa"},{nombre:"silla",precio:2128,url:"https://www.x.com.ar/silla"},{nombre:"copa",precio:4523,url:"https://www.x.com.ar/copa"},{nombre:"mate",precio:200,url:"https://www.x.com.ar/mate"},{nombre:"pelota",precio:111,url:"https://www.x.com.ar/pelota"},{nombre:"play",precio:2322,url:"https://www.x.com.ar/play"},{nombre:"coca",precio:212,url:"https://www.x.com.ar/coca"},{nombre:"ventilador",precio:5000,url:"https://www.x.com.ar/ventilador"},{nombre:"chicle",precio:100,url:"https://www.x.com.ar/chicle"},{nombre:"arbol",precio:2664,url:"https://www.x.com.ar/arbol"}])

db.mensajes.estimatedDocumentCount()
db.productos.estimatedDocumentCount()

db.productos.insert({nombre:"roca",precio:"555",url:"https://www.x.com.ar/roca"})

db.productos.find({nombre: 'roca'})
db.productos.find({precio: {$lt: 1000}})
db.productos.find({$and: [{precio: {$gte: 1000}},{precio: {$lte: 3000}}]})
db.productos.find({precio: {$gt: 3000}})
db.productos.find({}).sort({"precio":1}).skip(2).limit(1)
db.productos.update({nombre: 'Fede'},{$set: {edad: 36}})
db.productos.updateMany({},{$set:{stock:200}})
db.productos.updateMany({precio: {$gt: 1000}},{$set:{stock:0}})
db.productos.deleteMany({precio: {$lt: 1000}})

db.createUser({user:"pepe",pwd:"asd456",roles:[{role:"read",db:"ecommerce"}]})

^C
mongod --auth
mongo -u pepe -p asd456 --authenticathionDatabase ecommerce