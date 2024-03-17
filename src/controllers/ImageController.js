import { Image } from "../db/ImagesModel.js";

class ImageController {
    async getImages(req, res) {
        try {
            const query = req.query;
            const images = await Image.findAndCountAll({
                where: {
                    ...query
                }
            });
            res.ApiResponse.success(images, 200);
        } catch (error) {
            res.ApiResponse.error(error);
        }
    }
    async getImage (req, res) {
        try {
            const query = req.query;
            const image = await Image.findOne({
                wehere: {
                    ...query,
                },
            });
            if (!image) {
                res.ApiResponse.error(image, 'resource not found!', 404)
            }
            res.ApiResponse.success(image, 200);
        } catch (error) {
            res.ApiResponse.error(error);
        }
    }
}

export default new ImageController();