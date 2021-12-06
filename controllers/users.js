import { v4 as uuidv4 } from "uuid";


// mockup database
let data = [];


export const getUser = (req, res) => res.send(data);

export const createUser = (req, res) => {
  //use uuid to create unique id for each user [uuidv4();]
  //use push method to add data to the databse
  const body = req.body;

  const id = uuidv4();
  res.send(id);
  data.push({ ...body, id: id });
  console.log({ ...body, id: id });
};
export const getUserId = (req, res) => {
  const id = req.params.id;

  const findUser = data.find((data) => {
    data.id === id;
  });
  res.send(findUser);
  res.send(req.params.id);
};
export const deleteUser = (req, res) => {
  const id = req.params.id;
  // how filter works? it keeps the data whuch return true when the condition is evaluated
  data = data.filter((data) => data.id !== id);

  res.send(data);
};
export const updateUser = (req, res) => {
  const id = req.params.id;
  // destructuring is used to access and assign the data in the req.body
  const { name, age, dob } = req.body;
  const data = data.find((data) => data == id);

  if (name) {
    data.name = name;
  }
  if (age) {
    data.age = age;
  }
  if (dob) {
    data.dob = dob;
  }
  res.send(data);
};
