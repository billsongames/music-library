const {expect} = require('chai');
const request = require('supertest');
const db = require('../src/db/index.js');
const app = require('../src/app');

describe('create album', () => {
  let artist
  beforeEach(async () => {
    const { rows } = await db.query('INSERT INTO Artists (name, genre) VALUES( $1, $2) RETURNING *', [
      'Guns n Roses',
      'Rock',
    ])

    artist = rows[0]
  })

  describe('/album', () => {
    describe('POST', () => {
      it('creates a new album in the database', async () => {
        const { status, body } = await request(app).post('/artists/:id/albums').send({
          name: 'Appetite for Destruction',
          year: '1987' })    

        expect(status).to.equal(201)
        expect(body.name).to.equal('Appetite for Destruction')
        expect(body.year).to.equal('1987')

        const { rows: [ albumData ] } = await db.query(
          `SELECT * FROM Albums WHERE id = ${body.id}`
        )
        expect(albumData.name).to.equal('Appetite for Destruction')
        expect(albumData.year).to.equal('1987')
      })
  });
});
})