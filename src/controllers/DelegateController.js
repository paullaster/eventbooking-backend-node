import { Delegate } from "../db/DelegateModel";

class DelegateController {
    async create(req, res) {
        try {
            return res.ApiResponse.success(await Delegate.create(req.body), 201);
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async index(req, res) {
        try {
            return res.ApiResponse.success(await Delegate.findAll());
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async show(req, res) {
        try {
            return res.ApiResponse.success(await Delegate.findOne({
                where: {
                    ...req.params
                }
            }));
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async update(req, res) {
        try {
            const delegate = await Delegate.findOne({
                where: {
                   ...req.params
                }
            });
            return res.ApiResponse.success(await delegate.save(req.body));
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async destroy(req, res) {
        try {
            const delegate = await Delegate.findOne({
                where: {
                   ...req.params
                }
            });
            return res.ApiResponse.success(await delegate.destroy(), 202);
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
}

export default new DelegateController();