import jwt from "jsonwebtoken";
import app from "../config/app.js";
import { User } from "../db/UserModel.js";

class VerifySessionToken {
    async verify(req, res, next) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, app.key);
            const user = await User.findOne({
                where: {
                    id: decoded.id,
                }
            });
            if (!user) {
                return res.ApiResponse.error(user.username, `User with username ${user.username} does not exist!`, 400);
            }
            req.user = user;
            next();
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
};

export default VerifySessionToken();