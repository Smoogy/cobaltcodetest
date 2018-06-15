import express from 'express';
import { parseHtml } from './../helper/htmlParser';

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const result = await parseHtml(req.query.endpoint, req.query.tag);
  
  res.json(result);
});

module.exports = router;
