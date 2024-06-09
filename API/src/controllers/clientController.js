getClient = (req, res) => {
  let salas = req.body;
  res.status(200).send(salas);
};

module.exports = { getClient };
