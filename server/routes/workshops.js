// Handles /api/workshops/*
import express from "express"; // Default import for CommonJS module
const router = express.Router(); // Access Router from the default express object
import workshopsCtrl from "../controllers/workshops.js"; // Or `import workshopsCtrl from ...` if you have a default export

router.get("/", workshopsCtrl.getWorkshops);

export default router;
