const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
    enum: ['Electronics', 'Furniture', 'Clothing', 'Groceries', 'Toys' , 'Office Supplies'], 
  },

  quantity: {
    type: Number,
    required: true,
  },

  cost: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
},
});

const InventoryDb = mongoose.model("Inventory", InventorySchema); 

module.exports = InventoryDb;
