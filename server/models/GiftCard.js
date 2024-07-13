const mongoose = require('mongoose');

const giftCardSchema = new mongoose.Schema({
  code: String,
  amount: Number,
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  recipientEmail: String,
  message: String,
  redeemed: { type: Boolean, default: false },
});

module.exports = mongoose.model('GiftCard', giftCardSchema);
