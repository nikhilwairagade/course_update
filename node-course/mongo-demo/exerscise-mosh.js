const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongoDB'))
    .catch(err => console.error('not connect', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: Date,
    isPublish: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema)


// async function getCourses() {
//     return await Course
//         .find({ isPublished: true, tags: { $in: ["backend", "frontend"] } })
//         .sort("-price")
//         .select({ name: 1, author: 1 });
//     console.log('im') 
// }

async function run() {
    const courses = await getCourses();
    console.log(courses);
}

run();