"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(require("vue"));
const chart_js_1 = __importDefault(require("chart.js"));
exports.default = vue_1.default.extend({
    props: {
        type: String,
        labels: Array,
        datasets: Array,
        chartData: Object,
        options: Object,
        width: String,
        height: String,
    },
    data: {
        ctx: null,
        chart: null,
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
                this.chart.data.labels = this.labels;
                this.update();
            }
        },
        'datasets': {
            deep: true,
            handler() {
                console.log('datasets changed', this.datasets);
                this.chart.data.datasets = this.datasets;
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
        'width': { handler() { this.update(); } },
        'height': { handler() { this.update(); } }
    },
    methods: {
        update() {
            this.chart.update();
        }
    },
    mounted: function () {
        this.ctx = this.$el;
        console.log(this.ctx, this.type, this.chartData, this.options);
        this.chart = new chart_js_1.default(this.ctx, {
            type: this.type,
            data: this.labels ? { labels: this.labels, datasets: this.datasets } : this.chartData,
            options: this.options
        });
    },
    render: function (h) {
        return h('canvas', {
            attrs: {
                width: this.width || '400',
                height: this.height || '400'
            }
        });
    }
});
//# sourceMappingURL=index.js.map