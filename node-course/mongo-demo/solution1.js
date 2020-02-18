const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises', { useUnifiedTopology: true, useNewUrlParser: true });

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: Date,
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
  return await Course
    .find({ isPublished: true })
    .or([
      { price: { $gte: 15 } },
      { name: /.*by.*/ }
    ])
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

async function updateCourse(id) {
  const result = await Course.updateOne({ price: id }, {
    $set: {
      author: 'nikhil',
      isPublished: false
    }
  });

  console.log(result)

}
//updateCourse(20);
// async function updateCourse(id) {
//   console.log('id....', id)
//   Course.findById(id).then(result => {
//     console.log('result.....', result)
//   })
//   const course = await Course.findById(id);
//   if (!course) {
//     console.log('no courses');
//     return;
//   }

//   course.isPublished = true;
//   course.author = 'Another Author';

//   const result = await course.save();
//   console.log(result)

// }

//updateCourse('5a6900fff467be65019a9001');

async function removeCourse(id) {
  const result = await Course.deleteOne({ _id: id });
  console.log(result)

}


// async function ub(id) {

//   const course = await Course.findById(id);
//   if (!course) {
//     console.log('no courses');
//     return;
//   }

//   course.isPublished = true;
//   course.author = 'Another Author';

//   const result = await course.save();
//   console.log(result)

// }



removeCourse('5e465204cd642253e97afc6b');
///ub('5a68fdc3615eda645bc6bdec');