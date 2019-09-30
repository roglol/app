// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    name: String,
    adress: String,
  },
  { timestamps: true }
);


const TechnologiesSchema = new Schema({
  id: Number,
  name: String,
  color: String
},
  { timestamps: true }
)

const GeorgiaPicturesSchema = new Schema({
  id: Number,
  url: String
})

var registrationSchema = new Schema({
  name: String,
  surname: String,
  email: String,
  phone: Number,
  course: String,
})
var coursesSchema = new Schema({
  name: String,
  price: Number,
  max_students: Number,
  enrolled: Number,
  re_take: Number,
  assessments: String,
  description: String,
  related_courses: [{ name: String }],
  instructors: [{ name: String, description: String }]
})

var adminSchema = new Schema({
  username: String,
  password: String
})

var CourseListSchema = new Schema({
  name: String
})

var Registration = mongoose.model("registration", registrationSchema, 'registration');
var Courses = mongoose.model("courses", coursesSchema, "courses");
var Dato = mongoose.model("Data", DataSchema, 'dato');
var Admin = mongoose.model("user", adminSchema, "user");
var Technologies = mongoose.model('Technologies', TechnologiesSchema, 'technologies')
var GeorgiaPictures = mongoose.model('GeorgiaPictures', GeorgiaPicturesSchema, 'georgia');
var CourseList = mongoose.model('CourseList', CourseListSchema,'clients');

// export the new Schema so we could modify it using Node.js
module.exports = {
  Registration,
  Courses,
  Dato,
  Admin,
  Technologies,
  GeorgiaPictures,
  CourseList
}