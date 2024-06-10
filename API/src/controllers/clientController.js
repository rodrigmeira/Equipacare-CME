const formData = [];

getClient = (req, res) => {
  res.status(200).send(formData);
};

postClient = (req, res) => {
  let salas = req.body;
  formData.push(salas);
  console.log(salas);
  res.status(200).send(salas);
};

module.exports = { postClient, getClient };
