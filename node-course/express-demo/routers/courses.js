const express = require('express');
const router = express.Router();
const Joi = require('joi');

const courses = [
    { id: 1, name: 'courses' },
    { id: 2, name: 'courses2' },
    { id: 3, name: 'courses3' }

];



router.get('/', (req, res) => {
    res.send(courses);
    // res.send([1, 2, 3])
    // res.send('here is courses')
});

router.get('/:id', (req, res) => {
    const coursef = courses.find(c => c.id === parseInt(req.params.id));
    if (!coursef) return res.status(404).send('there is no course present with id');
    res.send(coursef)
});

router.post('/', (req, res) => {
    const { error } = validationCheck(req.body)
    if (error) {
        res.status(400).send(error.details[0].message);
        return
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(courses);
    res.send(course);
});

router.put('/:id', (req, res) => {
    const coursef = courses.find(c => c.id === parseInt(req.params.id));
    if (!coursef) return res.status(404).send('there is no course present with id');

    const { error } = validationCheck(req.body)
    if (error) {
        res.status(400).send(error.details[0].message);
        return
    }
    coursef.name = req.body.name;
    res.send(coursef);
});

router.delete('/:id', (req, res) => {
    const coursef = courses.find(c => c.id === parseInt(req.params.id));
    if (!coursef) return res.status(404).send('there is no course present with id');

    const index = courses.indexOf(coursef);
    courses.splice(index, 1)
    res.send(courses)
});

function validationCheck(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

module.exports = router