const express = require('express');
const router = express.Router();
const giftCardController = require('../controllers/GiftcardController');

router.post('/create', giftCardController.createGiftCard);
router.post('/redeem', giftCardController.redeemGiftCard);

module.exports = router;
