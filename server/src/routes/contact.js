import express from 'express';
import { sendContactEmail } from '../controllers/contactController.js';

const router = express.Router();

// POST /api/contact
router.post('/contact', sendContactEmail);

export default router;
