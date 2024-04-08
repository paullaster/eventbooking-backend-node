import express from "express";
import EventController from "../controllers/EventController.js";
import BookingController from "../controllers/BookingController.js";
import PaymentController from "../controllers/PaymentController.js";
import DelegateController from "../controllers/DelegateController.js";

const router = express.Router();

router.get('/events', EventController.events);
router.get('/events/:id', EventController.event);
router.post('/events', EventController.createEvent);
router.put('/events/:id', EventController.updateEvent);
router.delete('/events/:id', EventController.deleteEvent);

router.get('/bookings', BookingController.bookings);
router.get('/bookings/:id', BookingController.booking);
router.post('/bookings', BookingController.createBooking);
router.put('/bookings/:id', BookingController.updateBooking);
router.delete('/bookings/:id', BookingController.deleteBooking);

router.get('/delegates', DelegateController.index);
router.get('/delegates/:id', DelegateController.show);
router.post('/delegates', DelegateController.create);
router.post('/event/delegates', DelegateController.getEventDelegates);
router.put('/delegates/:id', DelegateController.update);
router.delete('/delegates/:id', DelegateController.destroy);

router.post('/pay', PaymentController.niPushInit);
router.post('/pay/callback', PaymentController.mpesaNIPushCallback);

export { router }