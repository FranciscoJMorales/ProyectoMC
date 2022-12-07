const Document = require("../models/document");

finance = {
  getDocuments: async (req, res, next) => {
    try {
        const documents = await Document.find({});
        res.status(200).json(documents)
    } catch (error) {
        res.status(500).json({
            error: error,
          });
    }
  },
  getDocumentById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const document = await Document.findById(id);
      res.status(200).json(document);
    //   if (document) {
    //     res.status(200).json(document);
        
    //   } else {
    //     res.status(200).json({});
        
    //   }
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  },
  createDocument:  async (req, res, next) => {
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
};

module.exports = finance;
