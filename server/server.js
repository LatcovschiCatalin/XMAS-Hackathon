const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path')
const fs = require('fs')

const PORT = process.env.PORT || 8080;

require('dotenv').config()

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));

app.use('/api/users', require('./routes/userRoutes'))

const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json(), urlencodedParser);

//-------------------------
const imageModel = require("./models/image");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
  
  app.post("/", upload.single("testImage"), (req, res) => {
    console.log(req.body);
    const saveImage =  imageModel({
      name: req.body.name,
      userid: req.body.userid,
      username: req.body.username,
      email: req.body.email,
      status: "expect",
      img: {
        data: fs.readFileSync("uploads/" + req.file.filename),
        contentType: "image/png",
      },
    });
    saveImage
      .save()
      .then((res) => {
        console.log("image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
      res.send('image is saved')
  });
  
  
  app.get('/',async (req,res)=>{
    const allData = await imageModel.find()
    res.json(allData)
  })



const dbURI = process.env.DBURL;

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((res) => {
    app.listen(PORT, () => console.log("Server is live on port: "+PORT))
})













// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const path = require('path')

// const PORT = process.env.PORT || 8080;

// require('dotenv').config()

// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use(express.urlencoded({extended: false}));

// app.use('/api/users', require('./routes/userRoutes'))

// const urlencodedParser = bodyParser.urlencoded({extended: false});
// app.use(bodyParser.json(), urlencodedParser);

// //-------------------------
// const multer = require('multer');
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "Images")
//     },
//     filename: (req, file, cb)=> {
//         console.log(file);
//         cb(null, Date.now()+path.extname(file.originalname));
//     }
// })
// const upload = multer({storage: storage});
// app.post("/upload", upload.single('image'), (req, res)=>{
//     res.send("Image uploaded");
// })


// const dbURI = process.env.DBURL;

// mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
// .then((res) => {
//     app.listen(PORT, () => console.log("Server is live on port: "+PORT))
// })

