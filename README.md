# Mixed messages

This is a javascrpit application that generates text randomly. The user can get new text every time they request it.

## Table of contents
- [Overview](#overview)
- [Technologies](#technologies)
- [Features](#features)
- [Setup](#setup)
- [License](#license)

## Overview

The application generates random frases in the fowllowing format:

> <_determiner_> <_animal name_> can <_verb_> <_adverb_>.  

where each of the variables in brackets (<>) is replaced with one word from its respective set:  

| Variable | Set of words |
|:---------|:------------ |
| determiner | No, Some, Many, Every |
| animal name | dog(s), cat(s), elefant(s), horse(s), sheep, fish, sloth(s), cow(s), whale(s), chicken(s) |
| verb | run, bark, sing, eat, pee, poo, graze, fight, steal, talk, sound, hug, live, shine, yell, swim, code |
| adverb | quickly, slowly, happily, safely, innocently, eagerly, angryly, occasionally, wildly |

Example output: `Every cat can hug eagerly.`

## Technologies
- Javascript

## Features
- The app can output one line of random text at a time.

## Setup
Using Node: download the file called _randomMessage.js_ and run the console command:  
```
node randomMessage.js
````
in the same directory where the file is located.

## License
You can check out the full license [here](https://github.com/oscarmires/mixed-messages/blob/main/LICENSE). 
This project is licensed under the terms of the MIT license.
