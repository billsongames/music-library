const db = require('../db/index')

exports.createAlbum = async (req, res) => {
  const { artistId } = req.params
  const { name, year } = req.body

  try {
    const { rows: [ album ] } = await db.query('INSERT INTO Albums (name, year) VALUES ($1, $2) RETURNING *', [name, year])
    res.status(201).json(album)
  } catch (err) {
    res.status(500).json(err.message)
  }
}    