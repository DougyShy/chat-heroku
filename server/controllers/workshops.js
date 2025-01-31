const Workshop = require("mongoose").model("Workshop");

// function getWorkshops(req, res, next) {
//   Workshop.find().exec((error, items) => {
//     if (error) {
//       error.status = 500;
//       return next(error);
//     }

//     res.json(items);
//   });
// }

const getWorkshops = async (req, res) => {
  try {
    const workshops = await Workshop.find().exec();
    res.json(workshops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getWorkshops,
};
