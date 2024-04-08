import { User } from "../db/UserModel.js";

class UserController {
    async createUser(req, res) {
        try {
            return res.ApiResponse.success(await User.create(req.body));
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
            return res.ApiResponse.success(await User.findOne({
                where: {
                    id: req.params.id
                }
            }));
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