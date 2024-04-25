import { Booking } from "../db/BookingModel.js";
import { Event } from "../db/EventsModel.js";
import { Feedback } from "../db/FeedbackModel.js";

class BookingController {
    async createBooking(req, res) {
        try {
            const event = await Event.findOne({
                where: {
                    id: req.body.event
                }
            });
            req.body.amount = event.cost;
            req.body.balance = event.cost;
            req.body.status = "New";
            req.body.payment = "Pending";
            return res.ApiResponse.success(await Booking.create(req.body), 201);
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async bookings(req, res) {
        try {
            return res.ApiResponse.success(await Booking.findAll());
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async booking(req, res) {
        try {
            return res.ApiResponse.success(await Booking.findOne({
                where: {
                    ...req.params,
                }
            }));
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async updateBooking(req, res) {
        try {
            const booking = await Booking.findOne({
                where: {
                    ...req.query,
                }
            });
            return res.ApiResponse.success(await booking.save(req.body));
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async deleteBooking(req, res) {
        try {
            const booking = await Booking.findOne({
                where: {
                    ...req.query,
                }
            });
            return res.ApiResponse.success(await booking.destroy(), 202);
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async feedback(req, res) {
        try {

            req.body.name == undefined || req.body.name == "" ? req.body.name = "Anonymous" : req.body.name
            console.log(req.body)
            return res.ApiResponse.success(await Feedback.create(req.body), 201);
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async listFeedback(req, res) {
        try {
            return res.ApiResponse.success(await Feedback.findAll());
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
}

export default new BookingController();