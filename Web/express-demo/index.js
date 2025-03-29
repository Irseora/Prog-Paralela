const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// (TEMA) TODO: refactor so find is O(1)

app.use(bodyParser.json());

let users = [];
users.push({ id: 1, username: "aaa", password: "111" });
users.push({ id: 2, username: "bbb", password: "222" });

// Add a new user (through postman)
app.post("/user", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	const id = users.length + 1;

	users.push({
		id: id,
		username: username,
		password: password,
	});

	console.log(users);

	res.json({ status: "ok", users: users });
});

// Log in as an existing user (through postman)
app.post("/login", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	const userIndex = users.findIndex((user) => {
		if (user.username == username && user.password == password) return true;
		else return false;
	});

	if (userIndex == -1)
		res.status(400).json({ status: "wrong user / password" });
	else res.status(200).json({ user: users[userIndex] });
});

// List all users
app.get("/users", (req, res) => {
	res.json(users);
});

// Show user with given id
app.get("/user/:id", (req, res) => {
	res.json({
		user: users.find((user) => user.id == req.params.id),
	});
});

// Start server
app.listen(port, () => {
	console.log(`localhost:${port}`);
});
