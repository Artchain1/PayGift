const express = require('express');
const giftcardController = require('../controllers/GiftcardController');

const router = express.Router();

router.post('/giftcards', giftcardController.createGiftCard);
router.get('/giftcards', giftcardController.getAllGiftCards);
router.get('/giftcards/:id', giftcardController.getGiftCardById);
router.put('/giftcards/:id', giftcardController.updateGiftCard);
router.delete('/giftcards/:id', giftcardController.deleteGiftCard);

module.exports = router;
