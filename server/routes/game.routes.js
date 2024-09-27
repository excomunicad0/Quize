const verifyAccessToken = require('../middleware/verifyAccessToken');
const GameServices = require('../services/GameServices');

const router = require('express').Router();

router.post('/',verifyAccessToken, async (req, res) => {
  const {id} = res.locals.user
  const game = await GameServices.createGame({userId: id});
  res.status(201).json({ game });
});

router.put(`/:id`, async (req,res) => {
    const { id } = req.params;
    const { score } = req.body;
    const game = await GameServices.updateGame({id, score});
    res.status(201).json({ game });
})

module.exports = router;
