# demo-auto-suggestion
a auto suggestion feature for search
# Getting Started
These instructions will help you run demo and using this module for other application
# Prerequisites
+ [Vscode](https://code.visualstudio.com/)
+ [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
# Running demo
You will need to clone the repo to your machine
```
$ git clone git@github.com:vikto132/demo-auto-suggestion.git
$ cd demo-auto-suggestion
```
Open vscode
```
$ code .
```

Right click on index.html file then choose Open with live server
# Use module
You will need to clone the repo to your machine
```
$ git clone -b module git@github.com:vikto132/demo-auto-suggestion.git
$ cd demo-auto-suggestion
```
import style to header
```
<link rel="stylesheet" href="auto-suggestion/css/style.css">
```

init module
```
<script type="module">
    import { initAutoSuggestion } from './auto-suggestion/index.js';
    // fetch data here
    //**fetch data function must return a Promise with data has format {suggestion:[],product:[],collection:[]}**
    const fetchData = () => ...
    ...
    const config = {
      searchId:'input',
      sourceData: fetchData,
      ...
    }
    ...
    initAutoSuggestion(config);
  </script>
```
# Config option

| Name          | description           | default value  | required |
| ------------- |:-------------:| -----:| -----:|
| searchId      | id of input field | '' | true |
| sourceData      | callback function to get data      |   (searchString) => ({...}) | true |
| delay | delay time between key stroke      |    100 | - |
| display | contain config for display      |    | - |
| template | contain callback function for render       |    null | - |

***Display option***
*each option is object with 3 key suggestion, collection, product*

| Name          | description           | default value |
| ------------- |:-------------:| -----:|
| show | display section      | true   |
| order | order render section (asc)    |  number  |
| numbCharDisplay | the minimun number of charactor for pop displat       |  1  |
| maxOccurrent | maximun number item display      |  3  |
| notFoundTemplate | callback render when not found result      |  null  |
| notFoundString | string display when not found result      |  'not found'  |

## Author
+ [@vikto132](https://github.com/vikto132)
