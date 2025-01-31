// Handles /api/workshops/*
const router = require("express").Router();
const workshopsCtrl = require("../controllers/workshops");

router.get("/", workshopsCtrl.getWorkshops);

module.exports = router;
