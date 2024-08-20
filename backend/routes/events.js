const express = require('express');
const router = express.Router();
const {
  createEvent,
  updateEvent,
  deleteEvent,
  getEvent,
  getAllEvents,
  searchEvents
} = require('../controllers/eventController');
const auth = require('../middleware/auth');

router.post('/', auth('Admin'), createEvent);
router.put('/:id', auth('Admin'), updateEvent);
router.delete('/:id', auth('Admin'), deleteEvent);
router.get('/:id', getEvent);
router.get('/', getAllEvents);
router.get('/search', searchEvents);

module.exports = router;
