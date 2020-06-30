# charts.vue
Simple wrapper for chart.js

## Installation
```sh
npm i chart.js charts.vue
```


## Simple usage:
```html
<chart type="bar" :labels="labels" :datasets="dataset" :options="options" />
```
```js
import Chart from 'charts.vue';
...
components : [Chart]
```

