// 全局渲染配置
const embedOpt = {
    mode: "vega-lite",
    actions: false // 隐藏图表右上角的点菜单
};

// 模块化配置表：管理所有图表的挂载点和 JSON 路径
const chartsToRender = [
    { id: '#chart_1', spec: 'specs/01_stacked_chart.json' },
    { id: '#chart_2', spec: 'specs/02_choropleth_map.json' },
    // 等后续JSON写好了直接在这里取消注释并添加
    { id: '#chart_3', spec: 'specs/03_bubble_matrix.json' },
    { id: '#chart_4', spec: 'specs/04_diverging_bar.json' },
    { id: '#chart_5', spec: 'specs/05_area_chart.json' },
    { id: '#chart_6', spec: 'specs/06_heatmap.json' },
    { id: '#chart_7', spec: 'specs/07_flow_map.json' },
    { id: '#chart_8', spec: 'specs/08_scatter_plot.json' },
    { id: '#chart_9', spec: 'specs/09_gantt_time.json' },
    { id: '#chart_10', spec: 'specs/10_normalized_bar.json' }
];

// 批量渲染
chartsToRender.forEach(chart => {
    vegaEmbed(chart.id, chart.spec, embedOpt)
        .then(result => {
            console.log(`Successfully rendered ${chart.id}`);
        })
        .catch(console.error);
});