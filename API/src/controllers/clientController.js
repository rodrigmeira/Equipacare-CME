getClient = (req, res) => {
  let salas = req.body;
  console.log(salas);
  res.status(200).json("Yes");
};

module.exports = { getClient };
