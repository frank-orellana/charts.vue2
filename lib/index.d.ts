import Vue from "vue";
import Chart from 'chart.js';
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    ctx: HTMLCanvasElement;
    chart: Chart;
}, {
    update(): void;
}, unknown, {
    type: string;
    labels: unknown[];
    datasets: unknown[];
    chartData: any;
    options: any;
    width: string;
    height: string;
}>;
export default _default;
declare type cdatasets = Chart.ChartDataSets;
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
//# sourceMappingURL=index.d.ts.map