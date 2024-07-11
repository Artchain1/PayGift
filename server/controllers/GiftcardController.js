const GiftCard = require("../models/GiftcardModel.js");

const createGiftCard = async (req, res) => {
  try {
    const {
      design,
      cryptocurrency,
      amount,
      note,
      recipientEmail,
      fees,
      totalAmount,
    } = req.body;
    const newGiftCard = new GiftCard({
      design,
      cryptocurrency,
      amount,
      note,
      recipientEmail,
      fees,
      totalAmount,
    });
    const savedGiftCard = await newGiftCard.save();
    res.status(201).json(savedGiftCard);
  } catch (error) {
    // console.log(error)
    res.status(400).json({ error: error.message });
  }
};


const getAllGiftCards = async (req, res) => {
  try {
    const giftCards = await GiftCard.find();
    res.status(200).json(giftCards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getGiftCardById = async (req, res) => {
  try {
    const giftCard = await GiftCard.findById(req.params.id);
    if (!giftCard) {
      return res.status(404).json({ error: "Gift card not found" });
    }
    res.status(200).json(giftCard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a gift card by ID
const updateGiftCard = async (req, res) => {
  try {
    const updatedGiftCard = await GiftCard.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedGiftCard) {
      return res.status(404).json({ error: "Gift card not found" });
    }
    res.status(200).json(updatedGiftCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a gift card by ID
const deleteGiftCard = async (req, res) => {
  try {
    const deletedGiftCard = await GiftCard.findByIdAndDelete(req.params.id);
    if (!deletedGiftCard) {
      return res.status(404).json({ error: "Gift card not found" });
    }
    res.status(200).json({ message: "Gift card deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createGiftCard,
  getAllGiftCards,
  deleteGiftCard,
  updateGiftCard,
  getGiftCardById,
};
