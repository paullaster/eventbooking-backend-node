import { User } from "../db/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import app from "../config/app.js";

class UserController {
    async createUser(req, res) {
        try {
            const admin = await User.findOne({
                where: {
                    username: req.body.username,
                }
            });
            if (admin) {
                return res.ApiResponse.error(admin.username, `User with username ${admin.username} already exists!`, 400);
            }
            const salt = await bcrypt.genSalt(16);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            req.body.password = hashedPassword;
            const user = await User.create(req.body);
            const { password, ...args} = user.dataValues;
            jwt.sign(args, app.key, {expiresIn: '1h', algorithm: 'HS512'}, (error, data) => {
                if (error) {
                    return res.ApiResponse.error(error);
                }
                return res.ApiResponse.success(data);
            });
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async index(req, res) {
        try {
            return res.ApiResponse.success(await User.findAll());
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async show(req, res) {
        try {
            const admin = await User.findOne({
                where: {
                    id: req.params.id
                }
            });
            
            return res.ApiResponse.success();
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async update(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    id: req.params.id
                }
            });
            return res.ApiResponse.success(await user.save(req.body));
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async delete(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    id: req.params.id
                }
            });
            return res.ApiResponse.success(await user.destroy(), 202);
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
}

export default new UserController();