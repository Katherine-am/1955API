const mongoose = require('mongoose');
const Models = require('../models/model');
const Person = Models.Person;

module.exports = {
    index: (req, res) => {
        Person.find()
            .then(person => res.json(person))
            .catch(err => res.json(err));
    },
    newName: (req, res) => {
        Person.create(req.params)
        .then(() => { 
            res.redirect('/');
        })
        .catch(err => console.log(err));
    },
    removeName: (req, res) => {
        Person.deleteOne({name: req.params.name})
            .then(person => {
                res.redirect('/')
            })
            .catch(err => res.json(err));
    },
    viewName: (req, res) => {
        Person.find({name: req.params.name})
            .then(person => res.json(person))
            .catch(err => res.json(err));
    }
}