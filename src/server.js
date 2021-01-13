import sirv from 'sirv';
// import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import express from "express"

const bodyParser = require('body-parser')
const { PrismaClient } = require('@prisma/client')

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const prisma = new PrismaClient()
const app = express()

app.use(bodyParser.json())

express() // You can also use Express
app.post(`/user`, async (req, res) => {
	const result = await prisma.user.create({
	data: {
		...req.body,
	},
	})
	res.json(result)
})

app.post(`/user/login`, async (req, res) => {
	const data = [];
	const result = await prisma.user.findFirst({
		where: {
		  username: req.body.username,
		  password: req.body.password
		},
	  })

	if(result){
		data['message']="sucsess";
		data['data'] = result;
	}else{
		data['message']="fail";
		data['data'] = "";
	}
	res.json(data)
	console.log(data);
	})
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
