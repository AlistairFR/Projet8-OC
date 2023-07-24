const express = require ("express");
const router = express.Router();
const mailController = require("../controllers/mail");

router.post('/send-email', mailController.sendEmail);

// Route de test
router.get("/test", (req, res) => {
    res.json({ message: "Backend route is working" });
  });

module.exports = router;