import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDb } from "./config/database.js";
import { Student } from "./model/StudentModel.js";

const app = express();

connectDb();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// testing server
app.get("/", (req, res) => {
  res.json("Working");
});

// creating users
app.post("/students", (req, res) => {
  const body = req.body;
  Student.create(body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

// get all Students and sending to frontend
app.get("/students", (req, res) => {
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Deleting student
app.delete("/students/:id", async (req, res) => {
  const id = req.params.id;

  const student = await Student.findById(id);

  // if user doens't exist
  if (!student) {
    return res.status(404).json("User does not exisit");
  }
  // delete the user
  Student.findByIdAndDelete(id)
    .then((student) => {
      res.json(student);
    })
    .catch((err) => {
      res.json(err);
    });
});


// search a user 
app.post('/search', (req, res) => {
  const { name, location } = req.body;

  console.log('name: ', name);
  console.log('location: ', location);

  if (!name || !location) {
    return res.status(400).json({ error: 'Both name and location are required parameters.' });
  }

  Student.find({ name, location })
    .then((student) => {
      res.json(student);
    })
    .catch((err) => {
      res.json(err);
    });
});


// updating the Student
// getting specific user and sending to frontend
app.get("/students/:id", (req, res) => {
  Student.findById(req.params.id)
    .then((student) => {
      res.json(student);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put("/students/:id", async (req, res) => {
  console.log("here is reqeust");
  // get the user
  const id = req.params.id;
  const body = req.body;
  const student = await Student.findById(id);

  // if user doens't exist
  if (!student) {
    return res.status(404).json("User doesnot exisit");
  }

  console.log("");

  // update the Student
  Student.findByIdAndUpdate(id, body, { new: true })
    .then((student) => {
      res.json(student);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(5000, () => {
  console.log("Server is Running");
});
