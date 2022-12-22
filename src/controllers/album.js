const db = require('../db/index')

exports.createAlbum = async (req, res) => {
  const { id } = req.params
  const { name, year } = req.body
  console.log(id)

  try {
    const { rows: [ album ] } = await db.query('INSERT INTO Albums (name, year, artistId) VALUES ($1, $2, $3)  RETURNING *', [name, year, parseInt(id)])
    res.status(201).json(album)
  } catch (err) {
    console.log(err)
    res.status(500).json(err.message)
  }
}    