const GiftCard = require("../models/GiftcardModel.js");
const User = require("../models/UserModel.js");
const { sendGiftcardMail } = require("../utils/sendMail");

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

    const creatorId = req.userId;

    const newGiftCard = await GiftCard.create({
      design,
      creatorId,
      cryptocurrency,
      amount,
      note,
      recipientEmail,
      fees,
      totalAmount,
    });
    const owner = await User.findById(creatorId);

    //Create new client if client email is not found associated with clientFor
    const existingClient = await Client.findOne({
      email: client.email,
      clientFor: creatorId,
    });

    if (!existingClient) {
      const newClient = new Client({
        name: client.name,
        email: client.email,
        // address: client.address,
        clientFor: creatorId,
      });

      await newClient.save();
    }

    sendGiftcardMail(newGiftCard, owner, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
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
