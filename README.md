# charts.vue2
[![npm][npm-img]][npm-url]
[![node][node-img]][node-url]

Simple Vue2 wrapper for chart.js

If you want a wrapper that works with Vue3 go to [charts.vue](https://github.com/tritiumcl/charts.vue)

## Installation
```sh
npm i chart.js charts.vue2
```


## Simple usage:
```html
<chart type="bar" :labels="labels" :datasets="dataset" :options="options" />
```
```js
import Chart from 'charts.vue';
...
components : [Chart]
...
//data:
labels : ['1','2','3'],
dataset : [{
	label: 'My Dataset',
	backgroundColor: '#f87979',
	data: [1,2,3]
}],
options: {
	responsive: true,
	maintainAspectRatio: false,
}
```

