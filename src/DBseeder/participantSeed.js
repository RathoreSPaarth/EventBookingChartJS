const Participant = require("../models/participantData");

const newParticipant = [
  {
    firstName: "paarth",
    lastName: "S Rathore",
    gender: "Male",
    profession: "Student",
    experience: 1,
    address: "2348, GreenFields Colony",
    city: "Faridabad",
    contact: 9876543210
  },
  {
    firstName: "Dev",
    lastName: "Patel",
    gender: "Male",
    profession: "Management",
    experience: 1,
    address: "2348, Engineers Colony",
    city: "Dehradoon",
    contact: 9988334409
  },
  {
    firstName: "Satyam",
    lastName: "Ambast",
    gender: "Male",
    profession: "IT",
    experience: 10,
    address: "48, Vaishali Colony",
    city: "Ghaziabad",
    contact: 9897543210
  },
  {
    firstName: "Kanika",
    lastName: "Jain",
    gender: "Female",
    profession: "Content Writer",
    experience: 7,
    address: "2348, Sec-16",
    city: "Faridabad",
    contact: 9898732810
  },
  {
    firstName: "Aditi",
    lastName: "Tiwari",
    gender: "Female",
    profession: "Management",
    experience: 2,
    address: "2348, GreenFields Colony",
    city: "Faridabad",
    contact: 9876543210
  },
  {
    firstName: "AdityaNath",
    lastName: "Yogi",
    gender: "Male",
    profession: "Management",
    experience: 5,
    address: "2348, Gorakhpur Colony",
    city: "UP",
    contact: 8439294729
  },
  {
    firstName: "Rudra",
    lastName: "S Rathore",
    gender: "Male",
    profession: "Student",
    experience: 4,
    address: "2348, GreenFields Colony",
    city: "Faridabad",
    contact: 9876543210
  },
  {
    firstName: "Yash",
    lastName: "Yadav",
    gender: "Male",
    profession: "Student",
    experience: 1,
    address: "2348, Friends Colony",
    city: "Jaipur",
    contact: 9873232210
  },
  {
    firstName: "Aman",
    lastName: "Agrawal",
    gender: "Male",
    profession: "Content Writer",
    experience: 3,
    address: "28, Mall Road",
    city: "Ranikhet",
    contact: 9870000210
  },
  {
    firstName: "Muskan",
    lastName: "Mehta",
    gender: "Female",
    profession: "IT",
    experience: 1,
    address: "298, Spring Colony",
    city: "Hyderabad",
    contact: 9871243210
  },
  {
    firstName: "Jaspreet",
    lastName: "Singh",
    gender: "Female",
    profession: "Content Writer",
    experience: 8,
    address: "948, Gokul Colony",
    city: "Mathura",
    contact: 9876543210
  },
  {
    firstName: "Ram",
    lastName: "S Rathore",
    gender: "Male",
    profession: "Management",
    experience: 14,
    address: "0707, Ayodhya Colony",
    city: "UP",
    contact: 9876587810
  }
];

const participantSeeder = async () => {
  await Participant.sync({ force: true });
  newParticipant.forEach(async (participant) => {
    try {
      const result = await Participant.create(participant);
      console.log(result.get());
    } catch (e) {
      console.error(e);
    }
  });
};

participantSeeder();
