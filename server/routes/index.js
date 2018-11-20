import express from "express";
import { User } from "../models";

const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
    User.getUserById(1).then(data => console.log(data));
    User.findAll({
        where: {
            id: 1,
        },
        include: ["Company"],
    }).then(([user]) => {
        console.log({
            user,
        });
        res.render("index", {
            title: "Express",
            user,
        });
    });
});


/*
router.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the first page.',
}));

router.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));
*/
module.exports = router;
