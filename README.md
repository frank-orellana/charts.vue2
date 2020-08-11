# charts.vue2
[![npm][npm-img]][npm-url]

Simple Vue2 wrapper for [Chart.js][chartjs-url]

If you want a wrapper that works with Vue3 go to [Charts.vue](https://github.com/tritiumcl/charts.vue)

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
components : {Chart}
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

For a full guide of the options you can go to [Chart.js][chartjs-url]

[npm-img]: https://img.shields.io/npm/v/charts.vue2.svg
[npm-url]: https://npmjs.com/package/charts.vue2
[chartjs-url]: https://www.chartjs.org/docs/latest/