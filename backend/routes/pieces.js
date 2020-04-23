const router = require('express').Router();
let Piece = require('../models/piece.model');

router.route('/').get((req, res) => {
  Piece.find()
    .then(piece => res.json(piece))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const brand = req.body.brand;
  const size = req.body.size;
  const type = req.body.type;
  const link = req.body.link;
  const imgLink = req.body.imgLink;
  const tags = req.body.tags;

  const newPiece = new Piece({
    name,
    brand,
    size,
    type,
    link,
    imgLink,
    tags,
  });

  newPiece.save()
  .then(() => res.json('Piece added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// Route that gets by ID
router.route('/:id').get((req, res) => {
  Piece.findById(req.params.id)
    .then(piece => res.json(piece))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Piece.findByIdAndDelete(req.params.id)
    .then(() => res.json('Piece deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Piece.findById(req.params.id)
    .then(piece => {
      piece.name = req.body.name;
      piece.brand = req.body.brand;
      piece.size = req.body.size;
      piece.link = req.body.link;
      piece.imgLink = req.body.imgLink;
      piece.type = req.body.type;
      piece.tags = req.body.tags;      

      piece.save()
        .then(() => res.json('Piece updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;