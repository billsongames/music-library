const db = require('../db/index');

exports.create = async(req, res) => {
  res.status(201)
  const { name, genre } = req.body
  console.log(req.body)

  try {
    const { rows: [ artist ] } = await db.query(`INSERT INTO Artists (name, genre) VALUES ('${name}', '${genre}') RETURNING *`)
    res.status(201).json(artist)
  } catch (err) {
    res.status(500).json(err.message)
  }
}
