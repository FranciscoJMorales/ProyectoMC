var express = require("express");
var router = express.Router();
var financeController = require("../controllers/finance.controller");

router.get('/documents/:id', financeController.getDocumentById);
router.get('/documents', financeController.getDocuments);
router.post('/documents', financeController.createDocument);

module.exports = router;