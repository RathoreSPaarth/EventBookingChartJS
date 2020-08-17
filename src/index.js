const express = require("express");
const expressHbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const Participant = require("./models/participantData");
const app = express();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Creating handlebars engine
const hbs = expressHbs.create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "./views/layouts"),
  partialsDir: path.join(__dirname, "./views/partials")
});

// Let express know to use handlebars
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "./views"));

//body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//helper functions

let getTotalMen = async () => {
  let result = await Participant.count({ where: { gender: "Male" } });
  return JSON.parse(JSON.stringify(result));
};

let getTotalWomen = async () => {
  let result = await Participant.count({ where: { gender: "Female" } });
  return JSON.parse(JSON.stringify(result));
};
let getTotalStudent = async () => {
  let result = await Participant.count({ where: { profession: "Student" } });
  return JSON.parse(JSON.stringify(result));
};
let getTotalIT = async () => {
  let result = await Participant.count({ where: { profession: "IT" } });
  return JSON.parse(JSON.stringify(result));
};
let getTotalContentWriter = async () => {
  let result = await Participant.count({
    where: { profession: "Content Writer" }
  });
  return JSON.parse(JSON.stringify(result));
};
let getTotalManagement = async () => {
  let result = await Participant.count({ where: { profession: "Management" } });
  return JSON.parse(JSON.stringify(result));
};
let lessThanEqualTwo = async () => {
  let result = await Participant.count({
    where: {
      experience: {
        [Op.lte]: 2
      }
    }
  });
  return JSON.parse(JSON.stringify(result));
};
let lessThanEqualSix = async () => {
  let result = await Participant.count({
    where: {
      experience: {
        [Op.lte]: 6,
        [Op.gt]: 2
      }
    }
  });
  return JSON.parse(JSON.stringify(result));
};
let greaterThanSix = async () => {
  let result = await Participant.count({
    where: {
      experience: {
        [Op.gt]: 6
      }
    }
  });
  return JSON.parse(JSON.stringify(result));
};

let getParticipantData = async (num) => {
  let result = await Participant.findOne({ where: { contact: num } });
  console.log(
    "*********************************************HERE********************************************"
  );
  console.log(JSON.parse(JSON.stringify(result)));
  return JSON.parse(JSON.stringify(result));
};

app.get("/", (req, res) => {
  res.status(200).render("home", {
    layout: "hero"
  });
});

app.get("/register", (req, res) => {
  res.status(200).render("register", {
    layout: "hero"
  });
});

let num;
app.post("/", async (req, res) => {
  try {
    console.log(req.body);
    num = req.body.contact;
    if (req.body.firstName) {
      const rr = await Participant.create(req.body);
      res.status(200).render("confirmation", {
        layout: "hero.hbs",
        data: await getParticipantData(num)
      });
    } else {
      res.status(400).send("Invalid User");
    }
  } catch (e) {
    console.log("error: " + e);
  }
});

app.get("/charts", async (req, res) => {
  res.status(200).render("chart", {
    layout: "hero",
    men: await getTotalMen(),
    women: await getTotalWomen(),
    student: await getTotalStudent(),
    it: await getTotalIT(),
    management: await getTotalManagement(),
    content: await getTotalContentWriter(),
    lte2: await lessThanEqualTwo(),
    lte6: await lessThanEqualSix(),
    mt6: await greaterThanSix()
  });
});
let PORT = process.env.PORT || 5000
app.listen(PORT);
