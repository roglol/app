// const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
var cors = require('cors');
const bodyParser = require('body-parser');
// const logger = require('morgan');
// const Data = require('./data');
const nodemailer = require('nodemailer');
const API_PORT = 8000;
const app = express();
app.use(cors());
// const router = express.Router();
if(process.env.NODE_ENV === "production"){
    app.use(express.static('front/build'))

    app.get('/', (req,res) => {
        res.sendFile(path.join(__dirname, "front/public/index.html"))
    })
}
  

// this is our MongoDB database
// const dbRoute =
// 'mongodb+srv://jrdleto:kodalako1@cluster0-nb7jg.mongodb.net/test'


// connects our back end code with the database
// mongoose.connect(dbRoute, { useNewUrlParser: true,useUnifiedTopology:true  });

// let db = mongoose.connection;

// db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(logger('dev'));

// this is our get method
// this method fetches all available data in our database
// router.get('/getData', (req, res) => {
//   Data.Dato.find((err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: data });
//   });
// });
// router.get('/', (req,res) =>{
//     res.json('hello')
// })
app.post('/contact', (req,res) =>{
    var name = req.body.name
    var email = req.body.email
    var phone = req.body.number
    var message = req.body.message
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'otikopotskhoraia@gmail.com',
        pass: 'assassins123'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // send mail with defined transport object
    transporter.sendMail({
        from: `${name}  ${email}`, // sender address
        to: 'otar.potskhoraia@techubdc.ge', // list of receivers
        subject: 'Contact Info', // Subject line
        html:
        `
        <p>Name - ${name}</p>
        <p>Phone - ${phone}</p>
        <p>Email - ${email}</p>
        <p> Message - ${message}</p>
        ` // html body
    },(error,info) =>{
        if(error){
            console.log(error)
        }else{
            // res.json({message:'done'})
            console.log(info.messageId)
        }
    });
    
})

app.post('/competition', (req,res) =>{
    var company = req.body.company
    var contact_info = req.body.contact_info
    var contact_person = req.body.contact_person
    var email = req.body.email
    var phone = req.body.phone
    var desc = req.body.desc
    var company_type = req.body.company_type
    var money_raise = req.body.money_raise
    var cto = req.body.cto
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'otikopotskhoraia@gmail.com',
        pass: 'assassins123'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // send mail with defined transport object
    transporter.sendMail({
        from: `${company}  ${email}`, // sender address
        to: 'otar.potskhoraia@techubdc.ge', // list of receivers
        subject: 'Contact Info', // Subject line
        html:
        `
        <p>Company Name - ${company}</p>
        <p>Contact Info - ${contact_info}</p>
        <p>Contact Person - ${contact_person}</p>
        <p>Email - ${email}</p>
        <p>Phone - ${phone}</p>
        <p>Description - ${desc}</p>
        <p>Incorporated/Registered Company - ${company_type}</p>
        <p>Money Raise Stage - ${money_raise}</p>
        <p>Do you have a CTO or a technical project manager in your team - ${cto}</p>
        ` // html body
    },(error,info) =>{
        if(error){
            console.log(error)
        }else{
            // res.json({message:'done'})
            console.log(info.messageId)
        }
    });
   
})

// router.get('/courses-names', (req,res) =>{
//   Data.Technologies.find((err,data) => {
//     if(err) return res.json({ success: false, error: err});
//     return res.json({success: true, data: data}); 
//   })
// });


// router.get('/georgia-pictures', (req,res) =>{
//   Data.GeorgiaPictures.find((err,data) => {
//     if(err) return res.json({ success: false, error: err});
//     return res.json({success: true, data: data});
//   })
// });


// router.get('/getClients', (req,res) =>{
//   Data.CourseList.find((err, data) => {
//     if(err)  return re.json({success: false, error: err});
//     return res.json({success: true, data: data})
//   })
// })
// this is our update method
// this method overwrites existing data in our database
// router.post('/updateData', (req, res) => {
//   const { id, update } = req.body;
//   Data.Dato.findByIdAndUpdate(id, update, (err) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

// this is our delete method
// this method removes existing data in our database
// router.delete('/deleteData', (req, res) => {
//   const { id } = req.body;
//   Data.Dato.findByIdAndRemove(id, (err) => {
//     if (err) return res.send(err);
//     return res.json({ success: true });
//   });
// });

// this is our create method
// this method adds new data in our database
// router.post('/putData', (req, res) => {
//   let data = new Data.Dato();
//   const { id, name, adress } = req.body;


//   if ((!id && id !== 0) || !name || !adress) {
//     return res.json({
//       success: false,
//       error: 'INVALID INPUTS',
//     });
//   }
//   data.name = name;
//   data.adress = adress;
//   data.id = id;
//   data.save((err) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });



// app.post('/registration', (req, res) => {
//   var registration = new Data.Registration({
//     name: req.body.name,
//     surname: req.body.surname,
//     email: req.body.email,
//     phone: req.body.phone,
//     course: req.body.course
//   })
  // save model to database
//   registration.save(function (err, applicant) {
//     if (err) return console.error(err);
//     res.send(applicant.name)
//   });
// })
// app.get('/getregistration', (req, res) => {
  // save model to database
//   Data.Registration.find().then(re => {
//     res.json(re)
//   })
// })

// app.post('/addcourse', (req, res) => {
//   var courses = new Data.Courses({
//     name: req.body.name,
//     price: req.body.price,
//     max_students: req.body.max_students,
//     enrolled: req.body.enrolled,
//     re_take: req.body.re_take,
//     assessments: req.body.assessments,
//     description: req.body.description,
//     related_courses: req.body.related_courses,
//     instructors: req.body.instructors
//   })
  // save model to database
//   courses.save(function (err, course) {
//     if (err) return console.error(err);
//     res.send(course.name)
//   });
// })

// app.post('/deletecourse', (req, res) => {
//   const id = req.body.id
//   Data.Courses.remove({ _id: id }).exec().then(re => {
//     res.status(200).json(re);
//   });
// })

// app.get('/courses', (req, res) => {
//   Data.Courses.find().then(re => {
//     res.json(re)
//   })
// })

// app.get('/getcourses/:id', (req, res) => {
//   Data.Courses.find({ _id: "5d18ee62867efa1ac868ebce" }).then(re => {
//     res.json(re)
//   })
// })

// app.post('/admin/login', (req, res) => {
//   let username = req.body.username
//   let pass = req.body.password
  
//   Data.Admin.find().then(re => {
//     console.log(re[0].password)
//     console.log(pass)
//     bcrypt.compare(pass, re[0].password,  function(err, resa) {
//       console.log(resa)
//       if(resa){
//         res.status(200).json(re)
//       }else{
//         res.status(401).json('dagvendzra to')
//       }
// })
// })
// })
// app.get('/admin/register', (req,res) =>{
//   var user
//   bcrypt.hash('admin123', 10, function (err,   hash) {
// user =  new Data.Admin({
//   username: 'admin',
//   password: hash,
// })
// user.save(function (err, course) {
//   if (err) return console.error(err);
//   res.send(user.username)
// });
// })
 
  // save model to database
  
// })



// append /api for our http requests
// app.use('/api', router);

// launch our backend into a port
app.listen(process.env.PORT || API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));