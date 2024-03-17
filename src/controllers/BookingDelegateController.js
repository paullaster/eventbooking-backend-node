import { Booking } from "../db/BookingModel";
import { Event } from "../db/EventsModel";

class BookingDelegateController {
    async createBookingDelegate (req, res) {
        try {
            req.body.amount = course.price;
            return res.ApiResponse.success(await Booking.create(req.body), 201);
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async bookings (req, res) {
        try {
            return res.ApiResponse.success(await Booking.findAll());
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async booking (req, res) {
        try {
            return res.ApiResponse.success(await Booking.findOne({
                where: {
                   ...req.query,
                }
            }));
        } catch (error) {
            return res.ApiResponse.error(error);
        }
    }
    async updateBooking (req, res) {
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
    async deleteBooking (req, res) {
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
}

export default new BookingDelegateController();