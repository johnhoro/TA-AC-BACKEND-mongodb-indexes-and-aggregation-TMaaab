db.users.aggregate([{ $group: { _id: "$gender", age_sum: { $sum: "$age" } } }]);
