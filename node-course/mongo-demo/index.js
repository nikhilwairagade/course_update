const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongoDB'))
    .catch(err => console.error('not connect', err));

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublish: Boolean
});
const Course = mongoose.model('Courses', courseSchema)
async function createCourse() {

    const course = new Course({
        //name: 'angularjs',
        author: 'niks',
        tags: ['angular', 'frontend'],
        isPublish: true
    });

    const result = await course.save();
    console.log(result);
}

// async function getCourses() {
//     const courses = await Course.find({
//         author: 'niks', isPublish: true
//     })
//         .skip(2)
//         .limit(3)
//         .sort({ name: 1 })
//         .select({ name: 1, tags: 1 });
//     console.log(courses);
// }

//getCourses();

async function updateData(id) {
    const course = await Course.findById(id);
    if (!course) {
        console.log('no courses');
        return;
    }

    course.isPublished = true;
    course.author = 'dd';

    const result = await course.save();
    console.log(result)
}

//updateData('5e452b4c1099860ce8bf35bd')

async function updateCourse(id) {
    const result = await Course.updateOne({ _id: id }, {
        $set: {
            author: 'nikhil'
        }
    });

    console.log(result)

}
//updateCourse('5e452b4c1099860ce8bf35bd');

async function removeCourse(id) {
    const result = await Course.deleteOne({ _id: id });
    console.log(result)

}
//removeCourse('5e452b4c1099860ce8bf35bd')

createCourse()