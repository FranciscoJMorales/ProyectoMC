const Document = require("../models/document");

const finance = {
  //Add attributes for the controller
};

finance.getDocuments = async (req, res, next) => {
  try {
      const documents = await Document.find();
      res.status(200).json(documents)
  } catch (error) {
      res.status(500).json({
          error: error,
      });
  }
};

finance.getDocumentById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const document = await Document.findById(id);
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

finance.createDocument =  async (req, res, next) => {
  try {
      const document = req.body;
      const result = await Document.create(document);
      res.status(200).json(result);
  }
  catch (error) {
      res.status(500).json({
          error: error,
      });
  }
}

module.exports = finance;
