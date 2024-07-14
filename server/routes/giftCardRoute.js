const express = require('express');
const GiftCard = require('../models/GiftCard');
const router = express.Router();
const giftCardController = require('../controllers/GiftcardController');

// Create a gift card
router.post('/create', async (req, res) => {
  try {
    const giftCard = new GiftCard(req.body);
    await giftCard.save();
    res.status(201).json(giftCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all gift cards
router.get('/', async (req, res) => {
  try {
    const giftCards = await GiftCard.find();
    res.status(200).json(giftCards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post('/redeem', giftCardController.redeemGiftCard);

module.exports = router;
