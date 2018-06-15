# cobaltcodetest

# Install
```
bash install.sh
bash run.sh
```

# Notes
## General
* You should see some functional programming throughout the code base. I'm happy/ashamed to admit that I am a fan. I try to remain unattached from it, so no worries if it's not used at Cobalt.
* The challenge took me about 4 hours. I wanted to emphasise quality over speed, but not overly goldplate. These are a few things I would have done differently:
  * I would definitely add more unit tests on both the back and front end. Especially the back end. The main component that would have had to be tested quite rigorously would be the `htmlParser` class. To do so, I would have mocked the third party libraries I used to download the page, and match them up against good and bad results.
  * Definitely would add more robust error handling to the whole app. 
  * I'm a massive fan of Enzyme, so I would have found a place for that, too. :)

## Front end
* My general rule of thumb is to keep React components' render functions as small as possible (generally <= 10 lines). I know I've violated that rule slightly here, but I'm mainly concerned about massive `map` functions that eat up a whole 30 lines, when the logic could easily be moved over to its own component.
* `node-sass` is life. You might notice that I've included a run script that automatically creates new CSS files when new SCSS files pop up.

## Back end
* ES6 all the way!! Can't imagine my life without it.
* Since I found myself reusing logic from the HTML Parser, I decided to abstract it out into its own file.
* You'll notice I used `async/await`. Nowadays, I generally prefer this over the standard `.then` syntax, as it's much easier to read over a hectic `promise` chain.



Thanks for the awesome challenge! I hope you like it!
