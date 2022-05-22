const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const product = require('./models/product');
const Product = require('./models/product');

app.get('/api/products', (req, res, next) => {
	product
		.find()
		.then((products) => res.status(200).json(products))
		.catch((err) => res.status(400).json({ err }));
});

app.get('/api/products/:id', (res, req, next) => {
	product
		.findOne({ _id: req.params.id })
		.then((product) => res.status(200).json(product))
		.catch((err) => res.status(400).json({ err }));
});

app.post('/api/products', (res, req, next) => {
	delete req.body._id;
	const product = new Product({
		...req.body,
	});
	product
		.save()
		.then(() => res.status(201).json({ message: 'Objet enregistré' }))
		.catch((err) => res.status(400).json({ err }));
});

app.delete('/api/products/:id', (res, req, next) => {
	product
		.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Objet delete' }))
		.catch((err) => res.status(400).json({ err }));
});

app.put('/api/products/:id', (res, req, next) => {
	product
		.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Objet modifié' }))
		.catch((err) => res.status(400).json({ err }));
});

module.exports = app;
