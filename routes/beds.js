const { Router } = require("express");
const { bedsGet, bedsPost } = require("../controllers/beds");

const router = Router();

router.get("/:bed", bedsGet);
router.post("/", bedsPost);

module.exports = router;
