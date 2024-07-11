const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const giftCardSchema = new Schema({
  design: {
    type: String,
    required: true,
  },
  cryptocurrency: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  note: {
    type: String,
    default: '',
  },
  recipientEmail: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  fees: {
    type: Number,
    required: true,
    min: 0,
  },
  totalAmount: {
    type: Number,
    required: true,
    min: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const GiftCard = mongoose.model('GiftCard', giftCardSchema);

module.exports = GiftCard;
