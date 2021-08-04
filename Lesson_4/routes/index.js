const express = require("express");
const doctorController = require("../controller/doctorController");
const queueController = require("../controller/queueController");

const router = express.Router();

router.get("/queue", queueController.getQueue);
router.post("/queue", queueController.postQueue);

router.get("/doctor", doctorController.getDoctor);
router.post("/doctor", doctorController.postResolution);
router.post("/doctor/delete", doctorController.deleteResolution);

module.exports = router;
