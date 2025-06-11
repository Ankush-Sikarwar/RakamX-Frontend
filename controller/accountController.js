const express = require("express");
const mongoose = require("mongoose")
const {User} = require("../models/UserSchema")
const {Account} = require("../models/AccountsSchema")

const showBalance = async(req,res) => {

    try{
        const userId = req.user.id;

    const account = await Account.findOne({userId})

    if(!account){
        return res.status(404).json({
            msg: "account not found"
        })
    }
    

    res.json({
        message:"account balance fetched:",
        balance: account.balance
    })

    }catch(e){
        console.log("message:" ,e.message)
        res.json({
            message:"error in fetching balance"
        })
    }

    
}

const transfer = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const { amount, toBearer } = req.body;

    
    const fromAccount = await Account.findOne({ userId: req.user.id }).session(session);
    if (!fromAccount || fromAccount.balance < amount) {
      await session.abortTransaction();
      return res.status(400).json({ message: "Insufficient Balance" });
    }

    const toUser = await User.findOne({
      $or: [{ email: toBearer }, { username: toBearer }]
    }).session(session);

    if (!toUser) {
      await session.abortTransaction();
      return res.status(400).json({ message: "Recipient not found" });
    }

    const toAccount = await Account.findOne({ userId: toUser._id }).session(session);
    if (!toAccount) {
      await session.abortTransaction();
      return res.status(400).json({ message: "Recipient account not found" });
    }

    await Account.updateOne(
      { userId: req.user.id },
      { $inc: { balance: -amount } }
    ).session(session);

    await Account.updateOne(
      { userId: toUser._id },
      { $inc: { balance: +amount } }
    ).session(session);

    await session.commitTransaction();
    res.json({ message: "Transfer successful" });

  } catch (err) {
    await session.abortTransaction();
    res.status(500).json({ message: "Transaction failed", error: err.message });
  } finally {
    session.endSession();
  }
};

module.exports = {showBalance, transfer}
