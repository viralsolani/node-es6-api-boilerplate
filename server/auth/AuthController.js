// Dependencies
import express from "express";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../models";
import VerifyToken from "./verifyToken";

// Config
import config from "../config/env";

// Initialization
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/register", (req, res) => {
    // Get data from request body
    const {
        first_name: firstName, last_name: lastName, company_id: companyId, role_id: roleId, email, password,
    } = req.body;

    // hash the password
    const hashedPassword = bcrypt.hashSync(password, 8);

    User.create({
        firstName,
        lastName,
        companyId,
        roleId,
        email,
        password: hashedPassword,
        status: "INACTIVE",
    }).then((user) => {
        if (!user) {
            return res.status(500).send("There was a problem registering the user.");
        }

	    const token = jwt.sign({ id: user.id }, config.secret, {
	    	expiresIn: 86400, // expires in 24 hours
	    });

	    return res.status(200).send({ auth: true, token });
    });
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    User.findOne({
        where: {
            email,
        },
    }).then((user) => {
        if (!user) {
            return res.status(404).send("No user found.");
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password);

        if (!passwordIsValid) {
            return res.status(401).send({ auth: false, token: null, message: "We don't have user with that email/password combination" });
        }

        const token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400, // expires in 24 hours
        });

        return res.status(200).send({ auth: true, token });
    });
});

router.get("/me", VerifyToken, (req, res) => {
    console.log(req.userId);
    User.findByPk(req.userId).then((user) => {
        if (!user) return res.status(404).send("No user found.");

        return res.status(200).send(user);
    });
});

export default router;
