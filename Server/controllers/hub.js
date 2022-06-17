const Company = require("../models/company");
const Hub = require("../models/hub");
exports.getHubs = async (req, res, next) => {
  try {
    if (!req.query.company_id) {
      throw "company_id is required";
    }
    let page = 0;
    if (req.query.page) {
      page = Math.max(req.query.page - 1, 0);
    }
    const company = await Company.findByPk(req.query.company_id);
    const hubs = await company.getHubs({
      limit: 10,
      offset: page * 10,
      order: [
        ["name", "ASC"],
        ["unit_number", "DESC"],
      ],
    });
    res.status(200).json({
      hubs: hubs,
    });
  } catch (error) {
    next(error);
  }
};

exports.createHub = async (req, res, next) => {
  try {
    if (!req.body.company_id) {
      throw "company_id is required";
    }
    const company = await Company.findByPk(req.body.company_id);
    await company.createHub({
      name: req.body.name,
      address: req.body.address,
      unit_number: req.body.unit_number,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zip_code,
      country_code: req.body.country_code,
      note: req.body.note,
    });
    // Created hub in db
    res.status(201).json({
      message: "Hub created successfully!",
    });
  } catch (error) {
    next(error);
  }
};

exports.createCompany = async (req, res, next) => {
  try {
    if (!req.body.name) {
      throw "company_name is required";
    }
    await Company.create({
      name: req.body.name,
      contact_email: req.body.contact_email,
    });
    // Created company in db
    res.status(201).json({
      message: "Company created successfully!",
    });
  } catch (error) {
    next(error);
  }
};
