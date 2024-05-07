const interest = require("../models/Interest.js");

// This will return all client records
getInterest = (req, res) => {
  interest
    .findAll()
    .then((data) => {
      if (data.length > 0) {
        data.forEach((element) => {
          element.StatusDate = require("moment")(element.StatusDate).format(
            "YYYY-MM-DD"
          );
        });
        res.status(200).json({ message: true, data: data });
      } else {
        res.status(200).json({ message: false, data: "empty" });
      }
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "Data not found" });
    });
};

// This will add client to Client table
addInterest = (req, res) => {
  interest
    .create(req.body)
    .then(() => {
      res.status(200).json({ message: true, data: "data added" });
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "not added " });
    });
};

// This will get client with provided id
getSpecificInterest = async (req, res) => {
  let boolValue = req.query.status === "true";
  await interest
    .findAll({
      where: { LeadID: Number(req.query.leadid), Status: boolValue },
    })
    .then((data) => {
      if (data.length > 0) {
        data.forEach((element) => {
          element.StatusDate = require("moment")(element.StatusDate).format(
            "YYYY-MM-DD"
          );
        });
        res.status(200).json({ message: true, data: data });
      } else {
        res.status(200).json({ message: false, data: "empty" });
      }
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "DATA NOT FOUND" });
    });
};

// This will update data in client table
updateInterest = (req, res) => {
  interest
    .update(req.body, { where: { InterestedInID: req.params.id } })
    .then(() => {
      res.status(200).json({ message: true, data: "Data Updated" });
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "Client not updated" });
    });
};

// This will delete client with provided id
deleteInterest = (req, res) => {
  interest
    .destroy({ where: { InterestedInID: req.params.id } })
    .then(() => {
      res.status(200).json({ message: true, data: "Data Deleted" });
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "Data not Deleted" });
    });
};

deletedbyidandleadid = (req, res) => {
  interest
    .destroy({
      where: [{ ProdID: req.query.ProdID, LeadID: req.query.LeadID }],
    })
    .then(() => {
      res.status(200).send("Data Deleted");
    })
    .catch((err) => {
      res.status(400).send("Data not Deleted => " + err);
    });
};

UpdateInterestByProduct = (req, res) => {
  interest
    .update(req.body, {
      where: { ProdID: req.query.prodid, LeadID: req.query.leadid },
    })
    .then(() => {
      res.status(200).json({ message: true, data: "Data Updated" });
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "Data not updated" });
    });
};

LeadInterest = (req, res) => {
  var leadid = req.query.a;
  var prodid = req.query.b;
  interest
    .findAll({ where: { LeadID: leadid, ProdID: prodid } })
    .then((data) => {
      if (data.length > 0) {
        data.forEach((element) => {
          element.InterestedInStatusDate = require("moment")(
            element.StatusDate
          ).format("YYYY-MM-DD");
        });
        res.status(200).json({ message: true, data: data });
      } else {
        res.status(200).json({ message: false, data: "empty" });
      }
    })
    .catch((err) => {
      res.status(200).json({ message: false, data: "DATA NOT FOUND" });
    });
};

module.exports = {
  getInterest,
  addInterest,
  UpdateInterestByProduct,
  getSpecificInterest,
  updateInterest,
  deleteInterest,
  LeadInterest,
  deletedbyidandleadid,
};
