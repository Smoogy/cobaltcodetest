import express from 'express';
import { parseHtml } from './../helper/htmlParser';

const router = express.Router();

router.get('/', async (req, res, next) => {
  let result = false;
  const tags = await parseHtml(req.query.endpoint, req.query.tag);

  for(var item of tags[req.query.tag]) {
    if(item.innerText.indexOf(decodeURIComponent(req.query.text)) > -1) {
      result = true;
      break;
    }
  }

  res.json({ exists: result });
});

module.exports = router;
