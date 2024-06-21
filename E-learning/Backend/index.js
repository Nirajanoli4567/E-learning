const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//router
app.post("/register", async (req, res) => {
  try {
    const { username, email, contact, password, address } = req.body;

    const existingUser = await usernew.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "user already exists in the database" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new usernew({
        username,
        contact,
        email,
        address,
        password: hashedPassword,
      });
      await newUser.save();

      res.status(201).json({ message: "user is registered successfully" });
    }
  } catch (err) {
    console.error("Error in registering the user", err);
    res.status(500).send("Error registering the user");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await usernew.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid details" });
    }

    res.status(200).json({ message: "login successful", user: user });
  } catch (err) {
    console.error("Error in login ", err);
    res.status(500).send("Error in logging in");
  }
});

app.listen(8080, async (req, res) => {
  console.log("App is running");

  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.eqzvuef.mongodb.net/E-learning?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("database is connected");
  } catch (e) {
    console.log(e);
  }
});

///schema
const UserSchema = new mongoose.Schema({
  username: String,
  contact: String,
  email: String,
  address: String,
  password: String,
});

const usernew = new mongoose.model("usernew ", UserSchema);
