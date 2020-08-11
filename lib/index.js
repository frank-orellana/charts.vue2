//import 'chart.js/dist/Chart.bundle.js';
import Chart from 'chart.js';
const params = {
    type: String,
    labels: Array,
    datasets: Array,
    chartData: Object,
    options: Object,
    width: {
        type: String,
        default: '95%'
    },
    height: {
        type: String,
        default: '400px'
    },
};
export default {
    props: params,
    data() {
        return {
            ctx: null,
            chart: null
        };
    },
    watch: {
        'chartData': {
            deep: true,
            handler() {
                const _this = this;
                _this.chart.data = _this.chartData;
                _this.update();
            }
        },
        'type': {
            handler() {
                const _this = this;
                _this.chart.config.type = _this.type;
                _this.update();
            }
        },
        'labels': {
            handler() {
                const _this = this;
                _this.chart.data.labels = _this.labels;
                _this.update();
            }
        },
        'datasets': {
            deep: true,
            handler() {
                const _this = this;
                _this.chart.data.datasets = _this.datasets;
                _this.update();
            }
        },
        'options': {
            deep: true,
            handler() {
                const _this = this;
                _this.chart.options = _this.options;
                _this.update();
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
        const _this = this;
        _this.ctx = _this.$el.childNodes[0];
        console.log(_this.ctx, _this.type, _this.chartData, _this.options);
        _this.chart = new Chart(_this.ctx, {
            type: _this.type,
            data: _this.labels ? { labels: _this.labels, datasets: _this.datasets } : _this.chartData,
            options: _this.options
        });
    },
    render: function (h) {
        if (typeof h != 'function')
            return console.error('createElement function not defined');
        const _this = this;
        return h('div', {
            style: {
                width: _this.width,
                height: _this.height
            },
        }, [h('canvas')]);
    }
};
//# sourceMappingURL=index.js.map