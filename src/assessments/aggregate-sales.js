// aggregate-sales.js

// Create the 'sales' collection

// db.createCollection("sales");

// // Insert sample sales documents

// db.sales.insert({
//   date: ISODate("2024-06-15T00:00:00Z"),
//   store: "Store A",
//   items: [
//     { name: "item1", quantity: 5, price: 10.0 },
//     { name: "item2", quantity: 3, price: 20.0 }
//   ]
// });

// db.sales.insert({
//   date: ISODate("2024-06-18T00:00:00Z"),
//   store: "Store B",
//   items: [
//     { name: "item3", quantity: 4, price: 12.5 },
//     { name: "item4", quantity: 2, price: 15.0 }
//   ]
// });

// db.sales.insert({
//   date: ISODate("2024-07-05T00:00:00Z"),
//   store: "Store A",
//   items: [
//     { name: "item1", quantity: 6, price: 10.0 },
//     { name: "item5", quantity: 1, price: 30.0 }
//   ]
// });

// ------------------------------------------------------------------------------------------------ //

db.sales.aggregate([
  { $unwind: "$items" },
  {
    $project: {
      store: 1,
      month: { $dateToString: { format: "%Y-%m", date: "$date" } },
      revenue: { $multiply: ["$items.quantity", "$items.price"] },
      totalItemPrice: { $multiply: ["$items.quantity", "$items.price"] },
      totalQuantity: "$items.quantity",
      unitPrice: "$items.price"
    }
  },
  {
    $group: {
      _id: { store: "$store", month: "$month" },
      totalRevenue: { $sum: "$revenue" },
      totalQuantity: { $sum: "$totalQuantity" },
      totalPrice: { $sum: { $multiply: ["$unitPrice", "$totalQuantity"] } }
    }
  },
  {
    $project: {
      _id: 0,
      store: "$_id.store",
      month: "$_id.month",
      totalRevenue: 1,
      averagePrice: {
        $cond: [
          { $eq: ["$totalQuantity", 0] },
          0,
          { $round: [{ $divide: ["$totalPrice", "$totalQuantity"] }, 2] }
        ]
      }
    }
  },
  { $sort: { store: 1, month: 1 } }
]);
