import express from "express";
import FinancialRecordModel from "../schema/financial-record.js";

const router = express.Router();

router.get("/getAllByUserID/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const records = await FinancialRecordModel.find({ userId: userId });
    if (records.length === 0) {
      return res.status(404).send("No records found for the user");
    }
    res.status(200).send(records);
  } catch (error) {
    res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newRecordBody = req.body;
    const newRecord = await FinancialRecordModel(newRecordBody);
    const savedRecord = await newRecord.save();
    res.status(201).send(savedRecord);
  } catch (error) {
    res.status(500).send("post",error);
  }
});
router.put("/:id", async (req, res) => {
    try {
      const userId = req.params.id;
      const newRecordBody = req.body;
      const record = await FinancialRecordModel.findByIdAndUpdate(userId,newRecordBody,{new:true});
      if(!record)return res.status(404).send();

      res.status(200).send(record);
    } catch (error) {
      res.status(500).send("error",error);
    }
  });
  router.delete("/:id", async (req, res) => {
    try {
      const userId = req.params.id;
      
      const record = await FinancialRecordModel.findByIdAndDelete(userId);
      if(!record)return res.status(404).send();

      res.status(200).send(record);
    } catch (error) {
      res.status(500).send(err);
    }
  });
export default router;
