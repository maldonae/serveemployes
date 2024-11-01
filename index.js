import express from "express";
import cors from "cors";

const app = express();

const sampleEmployee = {
	name: {
		first: "Eric",
		last: "Fabioli",
	},
	email: "eric.fabioli@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
	},
};
app.use(cors());
app.get("/api/employees", (req, res) => {
	res.json({ results: [sampleEmployee] });
});

const port = 3310;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
