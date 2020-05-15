import express, { response } from "express";

const app = express();

app.get("/", (request, response) => {
	return response.json({ message: "Hello teste" });
});

app.listen(3333, () => {
	console.log("port 3333!");
});
