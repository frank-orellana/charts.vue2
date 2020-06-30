import Vue from "vue";
import Chart from 'chart.js';

export default Vue.extend({
	props: {
		type!: String,
		labels: Array, // as ChartData["labels"],
		datasets!: Array, //ChartData["datasets"] | ChartDataSets[];
		chartData!: Object, //ChartData;
		options!: Object, // as ChartOptions,
		width!: String,
		height!: String,
	},
	data: {
		ctx: null as unknown as HTMLCanvasElement,
		chart: null as unknown as Chart,
	},
	watch: {
		'chartData': {
			deep: true,
			handler() {
				console.log('chartData changed', this.chartData);
				this.chart.data = this.chartData;
				this.update();
			}
		},
		'type': {
			handler() {
				console.log('type changed', this.type);
				this.chart.config.type = this.type;
				this.update();
			}
		},
		'labels': {
			handler() {
				console.log('labels changed', this.labels);
				this.chart.data.labels = this.labels as ChartData["labels"];
				this.update();
			}
		},
		'datasets': {
			deep: true,
			handler() {
				console.log('datasets changed', this.datasets);
				this.chart.data.datasets = this.datasets as ChartData["datasets"];
				this.update();
			}
		},
		'options': {
			deep: true,
			handler() {
				console.log('options changed', this.options);
				this.chart.options = this.options;
				this.update();
			}
		},
		'width': { handler() { this.update() } },
		'height': { handler() { this.update() } }
	},
	methods: {
		update() {
			this.chart.update();
		}
	},
	mounted: function () {
		this.ctx = this.$el as HTMLCanvasElement;

		console.log(this.ctx, this.type, this.chartData, this.options);


		this.chart = new Chart(this.ctx, {
			type: this.type,
			data: this.labels ? { labels: this.labels, datasets: this.datasets } : this.chartData,
			options: this.options
		});
	},
	render: function (h: Function) {
		return h('canvas', {
			attrs: {
				width: this.width || '400',
				height: this.height || '400'
			}
		});
	}
});

type cdatasets = Chart.ChartDataSets;

export interface ChartDataSets extends cdatasets {
	readonly data: cdatasets["data"]; 
}

export interface ChartData extends Chart.ChartData {
	readonly labels: Chart.ChartData["labels"];
	readonly datasets: Chart.ChartData["datasets"];
}

export interface ChartOptions extends Chart.ChartOptions {

}

export interface ChartConfiguration extends Chart.ChartConfiguration {

}