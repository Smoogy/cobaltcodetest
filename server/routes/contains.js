import express from 'express';
import { parseHtml } from './../helper/htmlParser';

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const tags = await parseHtml(req.query.endpoint, req.query.tag);
  let result = false;

  for(var item of tags[req.query.tag]) {
    if(item.innerText.indexOf(decodeURIComponent(req.query.text)) > -1) {
      result = true;
      break;
    }
  }

  res.json({ exists: result });
});

module.exports = router;
