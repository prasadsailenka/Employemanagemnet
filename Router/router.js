const express = require("express");
const router = express.Router();
const multer = require('multer')


const{insertcontroller,fetchcon,fetchconn}=require("../Controller/controller")
const upload = multer({ dest: 'uploads/' });

router.post("/signup",insertcontroller)
router.post("/signin",fetchcon)

module.exports = router;



