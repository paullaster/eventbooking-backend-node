import { Event } from "../db/EventsModel.js";
import { Image } from "../db/ImagesModel.js";
import app from "../config/app.js";
import Jimp from "jimp";

class EventController {
    async events( req, res) {
        try {
            return res.ApiResponse.success(await Event.findAll());
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async event( req, res) {
        try {
            return res.ApiResponse.success(await Event.findOne({
                where: {
                    ...req.params,
                }
            }));
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async createEvent( req, res) {
        try {
            const { image, ...eventData } = req.body;
            const event = await Event.create(eventData)
            let url = `${app.url}/storage/public/images/${event.id}.png`;
            console.log(url);
            const ImageBuffer = Buffer.from(image, 'base64');
            Jimp.read(ImageBuffer)
                .then((result) => {
                    result.resize(180, 180)
                        .quality(50)
                        .write(`./storage/public/images/${event.id}.png`);

                })
                .catch((error) => {
                    res.ApiResponse.error(error);
                });
            const sourceID = new Buffer.from(event.id.toString()).toString('base64');
            const imageEntry = {
                url,
                sourceID,
                documentType: 'Event',
            };
            await Image.create(imageEntry);
            return res.ApiResponse.success(event, 201);
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async updateEvent( req, res) {
        try {
            const event = await Event.findOne({
                where: {
                    ...req.query,
                }
            });
            return res.ApiResponse.success(await event.save(req.body));
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async deleteEvent( req, res) {
        try {
            const event = await Event.findOne({
                where: {
                    ...req.query,
                }
            });
            return res.ApiResponse.success(await event.destroy(), 202);
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }

}

export default new EventController();