const express = require('express');
const artistController = require('../controllers/artist');
const albumController = require('../controllers/album')

const artistRouter = express.Router();
const albumRouter = express.Router()

artistRouter.post('/', artistController.createArtist);
artistRouter.post('/:id/albums', albumController.createAlbum)

artistRouter.get('/', artistController.readArtists)
artistRouter.get('/:id', artistController.readArtistById)

artistRouter.put('/:id', artistController.overwriteArtist)

artistRouter.patch('/:id', artistController.updateArtist)

artistRouter.delete('/:id', artistController.deleteArtist)




module.exports = artistRouter, albumRouter;