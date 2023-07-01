import { MongoClient } from "mongodb";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function addrecord(req, res) {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("mydb");
  const messageColl = db.collection("message");

  let inputDoc = {
    message: req.query.message || "default",
  };
  await messageColl.insertOne(inputDoc);

  await client.close();

  res.json({ opr: "success" });
}

async function findAllMessage(req, res) {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("mydb");
  const messageColl = db.collection("message");

  let list = await messageColl.find().toArray();

  await client.close();
  res.json(list);
}

// NEW TODO API
async function addTodo(req, res) {
  try {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    const db = client.db("project");
    const messageColl = db.collection("todo");

    let inputDoc = {
      name: req.query.name,
      email: req.query.email,
      number: req.query.number,
      // task: req.query.task,
      description: req.query.description,
    };
    await messageColl.insertOne(inputDoc);

    await client.close();
    res.json({ opr: true });
  } catch (err) {
    res.status(500).send(err.message);
  }
}

// async function findAllTodo(req, res) {
//   try {
//     const uri = "mongodb://127.0.0.1:27017";
//     const client = new MongoClient(uri);

//     const db = client.db("project");
//     const messageColl = db.collection("todo");

//     let list = await messageColl.find().toArray();

//     await client.close();
//     res.json(list);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// }

async function addUserRecord(req, res) {
  try {
    const url = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(url);

    const db = client.db("project");
    const messageColl = db.collection("user");

    let inputDoc = {
      username: req.query.username,
      password: req.query.password,
      email: req.query.email,
      mobile: req.query.mobile,
    };
    await messageColl.insertOne(inputDoc);

    await client.close();

    res.json({ opr: true });
  } catch (err) {
    res.status(500).send(err.message);
  }
}

// async function findAllUser(req, res) {
//   try {
//     const url = "mongodb://127.0.0.1:27017";
//     const client = new MongoClient(url);

//     const db = client.db("project");
//     const messageColl = db.collection("user");

//     let list = await messageColl.find().toArray();

//     await client.close();
//     res.json(list);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// }

// LOGIN - AUTHENTICATION
async function loginByGet(req, res) {
  try {
    const url = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(url);

    const db = client.db("project");
    const messageColl = db.collection("user");

    let query = { email: req.query.email, password: req.query.password };
    let userRef = await messageColl.findOne(query);

    await client.close();

    if (!userRef) {
      let errorMessage = `Record Not Found or Authentication Failure: ${req.query.email}`;
      throw new Error(errorMessage);
    }

    res.json(userRef);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function loginByPost(req, res) {
  try {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    const db = client.db("project");
    const messageColl = db.collection("user");

    let query = { email: req.body.email, password: req.body.password };
    let userRef = await messageColl.findOne(query);

    await client.close();

    if (!userRef) {
      let errorMessage = `Record Not Found or Authentication Failure: ${req.body.email}`;
      throw new Error(errorMessage);
    }

    res.json(userRef);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

app.get("/addrecord", addrecord);
app.get("/addtodo", addTodo);
// app.get("/find-all-todo", findAllTodo);
app.get("/adduser", addUserRecord);
// app.get("/find-all-user", findAllUser);
app.get("/login-by-get", loginByGet);
app.post("/login-by-post", loginByPost);

// http://localhost:4000/
app.listen(4000);
