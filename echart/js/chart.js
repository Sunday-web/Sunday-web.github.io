/*
 * @Description: {首页} 
 * @Author: zhuoyan 
 * @Date: 2019-09-26 10:51:22 
 */

//折线图-1
var chart_line_1 = function (pxdata, pydata) {
    var mychart = echarts.init(document.getElementById('line-1'), 'rc_ksh');
    var dataArr = pydata || [100, 200, 250, 300, 350];
    var xArr = pxdata || ['2015', '2016', '2017', '2018', '2019']
    var seriesObj = {
        name: '耕地面积', //系列名称
        type: 'line',
        smooth: false, //是否平滑曲线显示
        // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
        symbol: 'circle', //标记的图形。
        symbolSize: 6, //标记的大小
        lineStyle: { //线条样式。
            normal: {
                color: "#00FF4E", // 线条颜色
                shadowOffsetY: 0,
            },
        },
        label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
            show: true,
            formatter: '{c}',
            position: 'top',
            textStyle: {
                color: '#00FF4E',
                fontSize: getSize(0.3)
            }
        },
        itemStyle: { //折线拐点标志的样式。
            normal: {
                color: "#00FF4E",
            }
        },
        tooltip: { //提示框
            show: true
        },
        data: dataArr
    };
    var option = {
        title: {
            show: false,
            text: '耕地面积历年趋势',
            left: getSize(2.5),
            textStyle: {
                color: '#fff',
                fontSize: getSize(.3),
                fontWeight: 'normal'
            }
        },
        tooltip: { //提示框组件
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: { //直角坐标系
            top: '25%',
            left: '4%',
            right: '4%',
            bottom: '8%',
            containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
        },
        xAxis: [{ //直角坐标系 grid 中的 x 轴
            type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
            boundaryGap: true,
            margin: getSize(0.1),
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#3196fa'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    fontSize: getSize(0.24),
                    color: '#fff',
                },
            },
            axisTick: {
                show: false,
            },
            data: xArr,
        }],
        yAxis: [{ //直角坐标系 grid 中的 y 轴
            type: 'value', ////直角坐标系 grid 中的 x 轴
            name: '单位：公顷',
            nameTextStyle: {
                fontSize: getSize(0.24),
                color: '#fff',
                padding: [0, getSize(0.3), 0, 0]
            },
            margin: getSize(0.1),
            splitNumber: 3,
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#3196fa'
                }
            },
            axisLine: { //坐标轴轴线相关设置。
                show: true,
                lineStyle: {
                    color: '#3196fa'
                }
            },
            axisLabel: { //坐标轴刻度标签的相关设置。
                margin: 10, //刻度标签与轴线之间的距离。
                textStyle: {
                    fontSize: getSize(0.24),
                    color: '#fff',
                },
            },
            axisTick: { //坐标轴刻度相关设置。
                show: false,
            },
        }],
        series: seriesObj
    };
    mychart.setOption(option);
}
//折线图-2
var chart_line_2 = function (pxdata, pydata) {
    var mychart = echarts.init(document.getElementById('line-2'));
    var dataArr = pxdata || S_mock.array(5, 100, 200, '', 2);
    var xArr = pydata || S_mock.xdata(2014, 2018, '')
    var seriesObj = {
        name: '', //系列名称
        type: 'line',
        smooth: false, //是否平滑曲线显示
        // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
        symbol: 'circle', //标记的图形。
        symbolSize: 6, //标记的大小
        lineStyle: { //线条样式。
            normal: {
                color: "#21CEE1", // 线条颜色
                shadowOffsetY: 0,
            },
        },
        label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
            show: true,
            formatter: '{c}',
            position: 'top',
            textStyle: {
                color: '#fff',
            }
        },
        itemStyle: { //折线拐点标志的样式。
            normal: {
                color: "#21CEE1",
            }
        },
        tooltip: { //提示框
            show: true
        },
        data: dataArr
    };
    var option = {
        title: {
            show: true,
            text: '林地面积',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: getSize(.32),
                fontWeight: 'normal'
            }
        },
        tooltip: { //提示框组件
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: { //直角坐标系
            top: '25%',
            left: '6%',
            right: '4%',
            bottom: '8%',
            containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
        },
        xAxis: [{ //直角坐标系 grid 中的 x 轴
            type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
            boundaryGap: true,
            margin: getSize(0.1),
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#3196fa'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    fontSize: getSize(0.24),
                    color: '#fff',
                },
            },
            axisTick: {
                show: false,
            },
            data: xArr,
        }],
        yAxis: [{ //直角坐标系 grid 中的 y 轴
            type: 'value', ////直角坐标系 grid 中的 x 轴
            name: '单位：万亩',
            nameTextStyle: {
                fontSize: getSize(0.24),
                color: '#fff',
                // padding: [0, getSize(0.3), 0, 0]
            },
            margin: getSize(0.1),
            splitNumber: 3,
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#3196fa'
                }
            },
            axisLine: { //坐标轴轴线相关设置。
                show: true,
                lineStyle: {
                    color: '#3196fa'
                }
            },
            axisLabel: { //坐标轴刻度标签的相关设置。
                margin: 10, //刻度标签与轴线之间的距离。
                textStyle: {
                    fontSize: getSize(0.24),
                    color: '#fff',
                },
            },
            axisTick: { //坐标轴刻度相关设置。
                show: false,
            },
        }],
        series: seriesObj
    };
    mychart.setOption(option);
}
//折线图-3
var chart_line_3 = function (pxdata, pydata) {
    var myChart = echarts.init(document.getElementById('line-3'));
    var Xdata = pxdata || S_mock.xdata(1, 12, '月');
    var Ydata = pydata || S_mock.array(12, 100, 200);
    var option = {
        tooltip: { //提示框组件
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: '{a}</br>{b}:{c}万'

        },
        grid: {
            left: '4%',
            top: "25%",
            right: '4%',
            bottom: '5%',
            containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
        },
        xAxis: [{ //直角坐标系 grid 中的 x 轴
            type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
            boundaryGap: true,
            axisLabel: {
                interval: 0,
                color: "#ccc",
                fontSize: getSize(0.24),
            },

            axisLine: {
                show: true,
                lineStyle: {
                    color: "#579dff",
                }
            },
            axisTick: {
                show: false,
            },
            data: Xdata,
        }],
        yAxis: [{ //直角坐标系 grid 中的 y 轴
            type: 'value', ////直角坐标系 grid 中的 x 轴
            min: 0, //坐标轴刻度最小值。
            name: '单位：µg/m3',
            nameTextStyle: {
                color: "#ccc",
                fontSize: getSize(0.24),
                padding: [0, 0, 0, getSize(0.4)]
            },
            axisLabel: {
                interval: 0,
                color: "#ccc",
                fontSize: getSize(0.24),
            },
            splitNumber: 3,
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: true,
                lineStyle: {
                    color: '#579dff',
                    opacity: 1,
                    width: 1,
                    type: 'dashed',
                }
            },

            axisLine: {
                show: true,
                lineStyle: {
                    color: "#579dff",
                }
            },
            axisTick: {
                show: false
            },
        }],
        series: [{
            name: 'PM2.5平均浓度', //系列名称
            type: 'line',
            smooth: false, //是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
            symbol: 'emptyCircle', //标记的图形。
            // symbolSize: 2,//标记的大小
            lineStyle: { //线条样式。
                normal: {
                    color: "#1A9BA9", // 线条颜色
                    shadowOffsetY: 2,
                    shadowColor: '#136258',
                },
            },
            label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                show: false,
                formatter: '{c}',
                position: 'top',
                textStyle: {
                    color: '#fff',
                }
            },
            itemStyle: { //折线拐点标志的样式。
                normal: {
                    color: "#21CEE1",
                }
            },
            tooltip: { //提示框
                show: true
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0.2, //// 0% 处的颜色
                            color: '#20C7DB'
                        },
                        {
                            offset: 1,
                            color: 'transparent'
                        }
                    ], false),
                    shadowColor: '#177477', //阴影颜色
                    shadowBlur: getSize(0.2) //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            data: Ydata
        }, ]
    };
    myChart.setOption(option);
}
//折线图-4
var chart_line_4 = function (pxdata, pydata1, pydata2, pydata3) {
    var mychart = echarts.init(document.getElementById('line-4'));
    var colorArr = ['#00E0FF', '#00E65A', '#EF4864'];
    var xdata = pxdata || S_mock.xdata(1, 12, '月');
    var ydata1 = pydata1 || S_mock.array(12, 200, 250, '', 1);
    var ydata2 = pydata2 || S_mock.array(12, 90, 190, '', 1);
    var ydata3 = pydata3 || S_mock.array(12, 10, 80, '', 2);
    var legend_arr = ["图例1", "图例2", "图例3"];
    var option = {
        color: colorArr,
        title: {
            show: true,
            text: '标题',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: getSize(.32),
                fontWeight: 'normal'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '6%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            margin: getSize(0.1),
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#3196fa'
                },
            },
            axisTick: {
                show: false
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    fontSize: getSize(0.24),
                    color: '#cccccc',
                },
            },
            data: xdata
        },
        yAxis: {
            type: 'value',
            name: '单位：mg/L',
            nameTextStyle: {
                fontSize: getSize(0.24),
                color: '#cccccc',
                padding: [0, getSize(0.3), 0, 0]
            },
            margin: getSize(0.1),
            splitNumber: 0,
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#3196fa'
                }
            },
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#3196fa'
                },
            },
            axisTick: {
                show: false
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    fontSize: getSize(0.24),
                    color: '#cccccc',
                },
            },
        },
        legend: {
            data: legend_arr,
            textStyle: {
                color: '#fff'
            },
            top: '10%',
            // icon: "roundRect", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
            itemWidth: 10, // 设置宽度
            itemHeight: 10, // 设置高度
            itemGap: 5 // 设置间距
        },
        series: [{
                name: legend_arr[0],
                type: 'line',
                // stack: '总量',
                data: ydata1
            },
            {
                name: legend_arr[1],
                type: 'line',
                // stack: '总量',
                data: ydata2
            },
            {
                name: legend_arr[2],
                type: 'line',
                // stack: '总量',
                data: ydata3
            }
        ]
    };
    mychart.setOption(option);
}
//折线图-5
var chart_line_5 = function (pxdata, pydata) {
    var mychart = echarts.init(document.getElementById('line-5'));
    var xArr = pxdata || ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00'];
    var dataArr = pydata || S_mock.array(9, 10, 20, true);
    var title = '昨日市一周边停车指数趋势';
    var max = Math.max.apply(null, dataArr);
    var min = Math.min.apply(null, dataArr);
    var seriesObj = {
        name: '', //系列名称
        type: 'line',
        smooth: true, //是否平滑曲线显示
        // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
        symbol: 'circle', //标记的图形。
        symbolSize: 6, //标记的大小
        lineStyle: { //线条样式。
            normal: {
                color: "#21CEE1", // 线条颜色
                shadowOffsetY: 0,
            },
        },
        markLine: {
            label: {
                show: true,
                // formatter: '',
                formatter: 'avg: {c}',
                position: 'end',
                padding: [-20, 0, 0, -60]
            },
            silent: true,
            symbol: 'none',
            data: [{
                name: '平均线',
                // 支持 'average', 'min', 'max'
                type: 'average'
            }]
        },
        itemStyle: { //折线拐点标志的样式。
            normal: {
                color: "#21CEE1",
            }
        },
        tooltip: { //提示框
            show: true
        },
        // data: dataArr
        data: function () {
            var itemArr = [],
                item;
            var max_index = dataArr.indexOf(max);
            var min_index = dataArr.indexOf(min);
            for (var i = 0; i < dataArr.length; i++) {
                if (i == max_index) {
                    item = {
                        value: dataArr[i],
                        label: {
                            show: true,
                            position: 'insideLeft',
                            // position: ['25%', '10%'],
                            color: '#fff',
                            formatter: '{b}\nmax:{c}',
                            backgroundColor: 'rgba(1,60,119,0.86)',
                            // zlevel:10
                            padding: [5, 5, 5, 5]
                        },
                        itemStyle: { //折线拐点标志的样式。
                            normal: {
                                color: "#fff",
                                borderColor: '#00f6ff',
                                borderWidth: 3,
                            }
                        },
                    };
                } else if (i == min_index) {
                    item = {
                        value: dataArr[i],
                        label: {
                            show: true,
                            position: 'insideLeft',
                            color: '#fff',
                            formatter: '{b}\nmin:{c}',
                            backgroundColor: 'rgba(1,60,119,0.86)',
                            padding: [5, 5, 5, 5]
                        },
                        itemStyle: { //折线拐点标志的样式。
                            normal: {
                                color: "#fff",
                                borderColor: '#ffcc00',
                                borderWidth: 3
                            }
                        },
                    };
                } else {
                    item = {
                        value: dataArr[i],
                        label: {
                            show: false,
                            color: '#fff'
                        },
                        symbolSize: 0,
                        itemStyle: {
                            normal: {

                            }
                        }
                    };
                }
                itemArr.push(item);
            }
            return itemArr;
        }()
    };
    var option = {
        title: {
            show: true,
            text: title,
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: getSize(.26),
                fontWeight: 'normal'
            }
        },
        tooltip: { //提示框组件
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: { //直角坐标系
            top: '35%',
            left: '5%',
            right: '4%',
            bottom: '8%',
            containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
        },
        xAxis: [{ //直角坐标系 grid 中的 x 轴
            type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
            boundaryGap: true,
            margin: getSize(0.1),
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#3196fa'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    fontSize: getSize(0.2),
                    color: '#fff',
                },
            },
            axisTick: {
                show: false,
            },
            data: xArr
        }],
        yAxis: [{ //直角坐标系 grid 中的 y 轴
            type: 'value', ////直角坐标系 grid 中的 x 轴
            name: '',
            nameTextStyle: {
                fontSize: getSize(0.2),
                color: '#fff',
                padding: [getSize(0.2), 0, 0, 0]
            },
            margin: getSize(0.1),
            splitNumber: 2,
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,
                lineStyle: {
                    type: 'dashed',
                    color: '#3196fa'
                }
            },
            axisLine: { //坐标轴轴线相关设置。
                show: true,
                lineStyle: {
                    color: '#3196fa'
                }
            },
            axisLabel: { //坐标轴刻度标签的相关设置。
                margin: 10, //刻度标签与轴线之间的距离。
                textStyle: {
                    fontSize: getSize(0.24),
                    color: '#fff',
                },
            },
            axisTick: { //坐标轴刻度相关设置。
                show: false,
            },
        }],
        series: seriesObj
    };
    mychart.setOption(option);
}
//折线图-6
var chart_line_6 = function (pxdata, pdata1, pdata2) {
    // 初始化实例
    var myChart = echarts.init(document.getElementById('line-6'));
    var Xdata = pxdata || S_mock.xdata(22, 31, '日');
    var Ydata = pdata1 || S_mock.array(10, 100, 200);
    var Ydata2 = pdata2 || S_mock.array(10, 100, 200);
    var colorArr = ['#00DEFE', '#00FF00'];
    var ynameArr = ['今日新增隔离', '今日解除隔离'];
    var legendArr = [];

    for (var key in ynameArr) {
        legendArr.push({
            name: ynameArr[key],
            textStyle: {
                color: '#fff'
            }
        })
    }
    var option = {
        tooltip: { //提示框组件
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: '{a}</br>{b}:{c}万'

        },
        color: colorArr,
        grid: {
            left: '4%',
            top: "25%",
            right: '4%',
            bottom: '5%',
            containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
        },
        legend: {
            data: legendArr,
        },
        xAxis: [{ //直角坐标系 grid 中的 x 轴
            type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
            boundaryGap: true,
            axisLabel: {
                interval: 0,
                color: "#fff",
                fontSize: getSize(0.24),
            },

            axisLine: {
                show: true,
                lineStyle: {
                    color: "#579dff",
                }
            },
            axisTick: {
                show: false,
            },
            data: Xdata,
        }],
        yAxis: [{ //直角坐标系 grid 中的 y 轴
            type: 'value', ////直角坐标系 grid 中的 x 轴
            min: 0, //坐标轴刻度最小值。
            name: '单位：人',
            nameTextStyle: {
                color: "#fff",
                fontSize: getSize(0.24),
            },
            axisLabel: {
                interval: 0,
                color: "#fff",
                fontSize: getSize(0.24),
            },
            splitNumber: 3,
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: true,
                lineStyle: {
                    color: '#579dff',
                    opacity: 1,
                    width: 1,
                    type: 'dashed',
                }
            },

            axisLine: {
                show: true,
                lineStyle: {
                    color: "#579dff",
                }
            },
            axisTick: {
                show: false
            },
        }],
        series: [{
            name: ynameArr[0], //系列名称
            type: 'line',
            smooth: false, //是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
            symbol: 'circle', //标记的图形。
            // symbolSize: 2,//标记的大小
            lineStyle: { //线条样式。
                normal: {
                    color: "#1A9BA9", // 线条颜色
                    shadowOffsetY: 2,
                    shadowColor: '#0AA2C6',
                },
            },
            label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                show: false,
                formatter: '{c}',
                position: 'top',
                textStyle: {
                    color: '#fff',
                }
            },
            itemStyle: { //折线拐点标志的样式。
                normal: {
                    color: "#16D4F1",
                    borderWidth: 1,
                    borderColor: '#fff',
                }
            },
            tooltip: { //提示框
                show: true
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, //// 0% 处的颜色
                            color: 'rgba(0, 222, 254, 1)'
                        }, {
                            offset: 0.4, //// 0% 处的颜色
                            color: 'rgba(0, 222, 254, 0.6)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0, 222, 254, 0)'
                        }
                    ], false),
                    shadowColor: '#177477', //阴影颜色
                    shadowBlur: getSize(0.2) //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            data: Ydata
        }, {
            name: ynameArr[1], //系列名称
            type: 'line',
            smooth: false, //是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
            symbol: 'circle', //标记的图形。
            // symbolSize: 2,//标记的大小
            lineStyle: { //线条样式。
                normal: {
                    color: "#00FF00", // 线条颜色
                    shadowOffsetY: 1,
                    shadowColor: '#0AD63E',
                },
            },
            label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                show: false,
                formatter: '{c}',
                position: 'top',
                textStyle: {
                    color: '#fff',
                }
            },
            itemStyle: { //折线拐点标志的样式。
                normal: {
                    borderWidth: 1,
                    borderColor: '#fff',
                    color: "#1DF01A",
                }
            },
            tooltip: { //提示框
                show: true
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, //// 0% 处的颜色
                            color: 'rgba(1, 241, 8, 1)'
                        }, {
                            offset: 0.4, //// 0% 处的颜色
                            color: 'rgba(1, 241, 8, 0.6)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(1, 241, 8, 0)'
                        }
                    ], false),
                    shadowColor: '#177477', //阴影颜色
                    shadowBlur: getSize(0.2) //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            data: Ydata2
        }]
    };
    myChart.setOption(option);
}
//柱形图-1
var chart_bar_1 = function (pxdata, pydata) {
    var myChart = echarts.init(document.getElementById('bar-1'));
    var xdata = pxdata || S_mock.xdata(2013, 2019, '年');
    var ydata = pydata || S_mock.array(7, 100, 200);
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '2%',
            top: "22%",
            right: '4%',
            bottom: '5%',
            containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
        },
        xAxis: [{
            nameLocation: "start",
            nameTextStyle: {
                color: "#fff",
            },
            nameGap: '1',
            type: 'category',
            data: xdata,
            axisLabel: {
                interval: 0,
                color: "#fff",
                fontSize: getSize(0.2),
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#579dff",
                }
            },
            axisTick: {
                show: false
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,
            },
        }],
        yAxis: [{
            // show:false,
            type: 'value',
            name: '单位：万人次',
            nameTextStyle: {
                color: "#fff",
                fontSize: getSize(0.24),
            },
            axisLabel: {
                interval: 0,
                color: "#fff",
                fontSize: getSize(0.24),
            },
            splitNumber: 5,
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: true,
                lineStyle: {
                    color: '#10447C',
                    opacity: 1,
                    width: 1,
                    type: 'solid',
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#579dff",
                }
            },
            axisTick: {
                show: false
            },
        }],
        series: [{
            type: 'bar',
            barGap: 0,
            barWidth: "40%",
            label: {
                show: false,
                position: 'top',
                color: '#facc14'
            },

            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#01F1FC'
                            },
                            {
                                offset: 1,
                                color: '#1B729E'
                            }
                        ]
                    )
                },
            },
            data: ydata
        }, ]
    };
    myChart.setOption(option);
}
//柱形图-2
var chart_bar_2 = function (pxdata, pydata) {
    var myChart = echarts.init(document.getElementById('bar-2'));
    var xdata = pxdata || S_mock.xdata(2016, 2019, '年');
    var ydata = pydata || S_mock.array(4, 100, 200);
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '4%',
            top: "22%",
            right: '4%',
            bottom: '5%',
            containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
        },
        xAxis: [{
            nameLocation: "start",
            nameTextStyle: {
                color: "#fff",
            },
            nameGap: '1',
            type: 'category',
            data: xdata,
            axisLabel: {
                interval: 0,
                color: "#ccc",
                fontSize: getSize(0.2),
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#579dff",
                }
            },
            axisTick: {
                show: false
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,
            },
        }],
        yAxis: [{
            // show:false,
            type: 'value',
            name: '单位：家',
            nameTextStyle: {
                color: "#ccc",
                fontSize: getSize(0.24),
            },
            axisLabel: {
                interval: 0,
                color: "#ccc",
                fontSize: getSize(0.24),
            },
            splitNumber: 5,
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: true,
                lineStyle: {
                    color: '#10447C',
                    opacity: 1,
                    width: 1,
                    type: 'solid',
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#579dff",
                }
            },
            axisTick: {
                show: false
            },
        }],
        series: [{
            type: 'bar',
            barGap: 0,
            barWidth: "40%",
            label: {
                show: true,
                position: 'top',
                color: '#facc14'
            },

            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#01F1FC'
                            },
                            {
                                offset: 1,
                                color: '#1B729E'
                            }
                        ]
                    )
                },
            },
            data: ydata
        }, ]
    };
    myChart.setOption(option);
}
//柱形图-3
var chart_bar_3 = function (pxdata, pydata) {
    var mychart = echarts.init(document.getElementById('bar-3'));
    var rankArr = [2, 1, 3, 5, 4];
    var placeHolderArr = [0, 0, 0, 0, 0];
    var labelArr = [98.38, 98.43, 98.94, 99.42, 99.44];
    var xArr = ['项目1', '项目2', '项目3', '项目4', '项目5'];
    var seriesObj = [{
        name: '政务服务核心指标', //系列名称
        type: 'bar',
        barWidth: '25%',
        stack: 'one',
        label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
            show: true,
            formatter: function (para) {
                return '第' + rankArr[para.dataIndex] + '名';
            },
            position: 'bottom',
            textStyle: {
                padding: [-getSize(1), 0, 0, 0],
                fontSize: getSize(0.36),
                color: '#fff',
            }
        },
        itemStyle: { //折线拐点标志的样式。
            normal: {
                color: 'rgba(49,149,249,1)'
            }
        },
        data: placeHolderArr,
        z: 100,
        silent: true,
        tooltip: { //提示框组件
            show: false
        }
    }, {
        name: '政务服务核心排名', //系列名称
        type: 'bar',
        barWidth: '25%',
        stack: 'one',
        label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
            show: true,
            formatter: '{c}%',
            position: 'top',
            textStyle: {
                fontSize: getSize(0.36),
                color: '#facc14',
            }
        },
        itemStyle: { //折线拐点标志的样式。                
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, //// 0% 处的颜色
                        color: 'rgba(49,149,249,1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(36,114,192,1)'
                    }
                ], false),
            }
        },
        data: labelArr
    }];
    var option = {
        tooltip: { //提示框组件
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: { //直角坐标系
            top: '30%',
            left: '4%',
            right: '4%',
            bottom: '5%',
            containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
        },
        xAxis: [{ //直角坐标系 grid 中的 x 轴
            type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
            boundaryGap: true,
            margin: getSize(0.1),
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#3196fa'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    fontSize: getSize(0.24),
                    color: '#fff',
                },
            },
            axisTick: {
                show: false,
            },
            data: xArr,
        }],
        yAxis: [{ //直角坐标系 grid 中的 y 轴
            type: 'value', ////直角坐标系 grid 中的 x 轴
            // name: '单位：万人',
            // nameTextStyle: {
            //     fontSize: getSize(0.24),
            //     color: '#cccccc',
            //     padding: [0, getSize(0.3), 0, 0]
            // },
            // minInterval: 15,
            // margin: getSize(0.1),
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,
                lineStyle: {
                    type: 'dashed',
                    color: '#3196fa'
                }
            },
            axisLine: { //坐标轴轴线相关设置。
                show: false,
                lineStyle: {
                    color: '#3196fa'
                }
            },
            axisLabel: { //坐标轴刻度标签的相关设置。
                show: false,
                margin: 10, //刻度标签与轴线之间的距离。
                textStyle: {
                    color: '#cccccc',
                },
            },
            axisTick: { //坐标轴刻度相关设置。
                show: false,
            },
        }],
        series: seriesObj
    };
    mychart.setOption(option);
}
//柱形图-4
var chart_bar_4 = function (pxdata, pydata) {
    var mychart = echarts.init(document.getElementById('bar-4'));
    var rankArr = [7, 3, 4, 3, 6, 6, 5, 4, 1, 1];
    var placeHolderArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var labelArr = [96.22, 95, 96.0, 98.9, 97.95, 99.74, 95, 99.69, 100, 100];
    var xArr = ['项目1', '项目2', '项目3', '项目4', '项目5', '项目6', '项目7', '项目8', '项目9', '项目10'];
    var seriesObj = [{
            name: '排名', //系列名称
            type: 'line',
            label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                show: true,
                formatter: function (para) {
                    return '第' + rankArr[para.dataIndex] + '名';
                },
                position: 'bottom',
                textStyle: {
                    padding: [-getSize(1.5), 0, 0, 0],
                    fontSize: getSize(0.18),
                    color: '#fff',
                }
            },
            itemStyle: { //折线拐点标志的样式。
                normal: {
                    color: 'rgba(49,149,249,1)'
                }
            },
            data: placeHolderArr,
            z: 100,
            silent: true,
            tooltip: { //提示框组件
                show: false
            }
        }, {
            name: '当月得分', //系列名称
            type: 'bar',
            barWidth: '25%',
            stack: 'one',
            label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                show: true,
                formatter: '{c}',
                position: 'top',
                textStyle: {
                    fontSize: getSize(0.36),
                    color: '#facc14',
                }
            },
            itemStyle: { //折线拐点标志的样式。                
                normal: {
                    color: 'rgba(49,150,250,1)'
                }
            },
            data: labelArr
        },
        {
            name: '考核目标值', //系列名称
            type: 'line',
            smooth: false, //是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
            symbol: 'circle', //标记的图形。
            symbolSize: 0, //标记的大小
            label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                show: false,
                formatter: '{c}',
                position: 'top',
                textStyle: {
                    fontSize: getSize(0.36),
                    color: '#facc14',
                }
            },
            itemStyle: { //折线拐点标志的样式。                
                normal: {
                    color: 'rgba(0,255,0,0.8)'
                }
            },
            data: labelArr
        }
    ];
    var option = {
        tooltip: { //提示框组件
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            show: true,
            itemWidth: getSize(0.4),
            itemHeight: getSize(0.2),
            textStyle: {
                fontSize: getSize(0.24),
                color: '#fff',
            }
        },
        grid: { //直角坐标系
            top: '30%',
            left: '4%',
            right: '4%',
            bottom: '10%',
            containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
        },
        xAxis: [{ //直角坐标系 grid 中的 x 轴
            type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
            boundaryGap: true,
            margin: getSize(0.1),
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#3196fa'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    fontSize: getSize(0.2),
                    color: '#fff',
                },
            },
            axisTick: {
                show: false,
            },
            data: xArr,
        }],
        yAxis: [{ //直角坐标系 grid 中的 y 轴
            type: 'value', ////直角坐标系 grid 中的 x 轴
            // name: '单位：万人',
            // nameTextStyle: {
            //     fontSize: getSize(0.24),
            //     color: '#cccccc',
            //     padding: [0, getSize(0.3), 0, 0]
            // },
            // minInterval: 15,
            // margin: getSize(0.1),
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(27,92,155,1)'
                }
            },
            axisLine: { //坐标轴轴线相关设置。
                show: false,
                lineStyle: {
                    color: 'rgba(27,92,155,1)'
                }
            },
            axisLabel: { //坐标轴刻度标签的相关设置。
                show: false,
                margin: 10, //刻度标签与轴线之间的距离。
                textStyle: {
                    color: '#cccccc',
                },
            },
            axisTick: { //坐标轴刻度相关设置。
                show: false,
            },
        }],
        series: seriesObj
    };
    mychart.setOption(option);
}
//柱形图-5
var chart_bar_5 = function (pxdata, pydata1, pydata2) {
    var myChart = echarts.init(document.getElementById('bar-5'));
    var xdata = pxdata || S_mock.xdata(1, 4, '月');
    var ydata = pydata1 || S_mock.array(4, 100, 200);
    var ydata2 = pydata2 || S_mock.array(4, 100, 200);
    var legend_arr = ['计划投资', '实际投资'];
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '4%',
            top: "22%",
            right: '4%',
            bottom: '5%',
            containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
        },
        legend: {
            icon: 'rect',
            textStyle: {
                color: "#fff",
                fontSize: getSize(0.25)
            },
            data: legend_arr
        },
        xAxis: [{
            nameLocation: "start",
            nameTextStyle: {
                color: "#fff",
            },
            nameGap: '1',
            type: 'category',
            data: xdata,
            axisLabel: {
                interval: 0,
                color: "#ccc",
                fontSize: getSize(0.3),
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#579dff",
                }
            },
            axisTick: {
                show: false
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,
            },
        }],
        yAxis: [{
            // show:false,
            type: 'value',
            name: '单位：万元',
            nameTextStyle: {
                color: "#ccc",
                fontSize: getSize(0.24),
            },
            axisLabel: {
                interval: 0,
                color: "#ccc",
                fontSize: getSize(0.24),
            },
            splitNumber: 5,
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: true,
                lineStyle: {
                    color: '#10447C',
                    opacity: 1,
                    width: 1,
                    type: 'solid',
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#579dff",
                }
            },
            axisTick: {
                show: false
            },
        }],
        series: [{
            name: legend_arr[0],
            type: 'bar',
            barGap: 0,
            barWidth: "40%",
            label: {
                show: false,
                position: 'top',
                color: '#facc14'
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#3196fa'
                            },
                            {
                                offset: 1,
                                color: '#3196fa'
                            }
                        ]
                    )
                },
            },
            data: ydata
        }, {
            name: legend_arr[1],
            type: 'bar',
            barGap: 0.1,
            barWidth: "40%",
            label: {
                show: false,
                position: 'top',
                color: '#facc14'
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#00ffb4'
                            },
                            {
                                offset: 1,
                                color: '#00ffb4'
                            }
                        ]
                    )
                },
            },
            data: ydata2
        }]
    };
    myChart.setOption(option);
}
//柱形图-6
var chart_bar_6 = function (pxdata, pydata) {
    var myChart = echarts.init(document.getElementById('bar-6'));
    var myoption = {
        color: ['#3398DB'],
        // tooltip : {
        //     trigger: 'axis',
        //     axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        //         type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        //     }
        // },
        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: true,
            data: ['2016', '2017', '2018'],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#3196fa'
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        yAxis: [{
            name: '综合得分',
            show: true,
            type: 'value',
            max: 100,
            min: 0,
            nameTextStyle: {
                color: '#fff'
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#3196fa'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            }
        }, {
            type: 'value',

            name: '综合排名',
            nameTextStyle: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    color: '#3196fa'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    width: 1,
                    color: '#3196fa'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            },
            max: 10,
            min: 0,
        }],
        series: [{
            name: '综合得分',
            type: 'bar',
            barWidth: '25%',
            label: {
                show: true,
                position: 'top',
                color: '#fff',
                borderColor: '#3093f6',
                borderWidth: 1,
                backgroundColor: 'rgba(49,150,250,0.15)',
                padding: 5,
                formatter: function (value) {
                    if (value.value == '93.07') {
                        return value.value + '分' + '\n第8名';
                    }
                    if (value.value == '94.85') {
                        return value.value + '分' + '\n第6名';
                    }
                    if (value.value == '94.87') {
                        return value.value + '分' + '\n第4名';
                    }

                }
            },
            data: [93.07, 94.85, 94.87],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#188df0'
                            },
                            {
                                offset: 0.5,
                                color: '#188df0'
                            },
                            {
                                offset: 1,
                                color: 'transparent'
                            }
                        ]
                    )
                },
            },
        }, {
            name: '综合排名',
            type: 'line',
            data: [80, 60, 40],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#00c8cf'
                            },
                            {
                                offset: 0.5,
                                color: '#00c8cf'
                            },
                            {
                                offset: 1,
                                color: '#00c8cf'
                            }
                        ]
                    )
                },
            },
        }]
    };
    myChart.setOption(myoption);
}
//柱形图-7
var chart_bar_7 = function (pxdata, pydata) {
    var mychart = echarts.init(document.getElementById('bar-7'));
    var nameArr = pxdata ? pxdata : S_mock.xdata(1, 8, '月');
    var dataArr = pydata || S_mock.array(8, 100, 200);
    var option = {
        tooltip: {
            trigger: 'axis',

        },
        grid: {
            top: '5%',
            left: '3%',
            right: '15%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: {
            show: false,
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: nameArr,
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#02575C",
                }
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    fontSize: getSize(0.3),
                    color: '#fff',
                },
            },
            inverse: true,
        },
        series: [{
            name: '',
            type: 'bar',
            label: {
                show: true,
                position: 'right',
                // formatter: '{c}件',
                formatter: function (para) {
                    var pct = ((dataArr[nameArr.indexOf(para.name)] / getArrSum(dataArr)) * 100).toFixed(2);
                    return pct + '%  ' + para.data + '件'
                },
                color: '#14D7C1',
                fontSize: getSize(0.35)
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [{
                                offset: 0,
                                color: 'rgba(26, 92, 142, 0.16)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(19, 218, 195, 1)'
                            }
                        ]
                    ),
                    barBorderRadius: [0, 8, 8, 0]
                },
            },
            barWidth: '35%',
            data: dataArr
        }, ]
    };
    mychart.clear();
    mychart.setOption(option);
}
//柱形图-8
var chart_bar_8 = function (pxdata, pydata) {
    var myChart = echarts.init(document.getElementById('bar-8'));
    var xdata = ['11-20', '11-21', '11-22', '11-23', '11-24', '11-25', '11-26', '11-27', '11-28', '11-29', '11-30', '11-31', '12-01', '12-02', '12-03', '12-04'];
    var ydata = S_mock.array(16, 10, 20);
    // var title = '近15日市一周边泊位指数趋势';
    var max = Math.max.apply(null, ydata);
    var min = Math.min.apply(null, ydata);
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        // title: {
        //     show: false,
        //     text: title,
        //     left: 'center',
        //     textStyle: {
        //         color: '#fff',
        //         fontSize: getSize(.26),
        //         fontWeight: 'normal'
        //     }
        // },
        grid: {
            left: '0%',
            top: "10%",
            right: '4%',
            bottom: '5%',
            containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
        },
        xAxis: [{
            nameLocation: "start",
            nameTextStyle: {
                color: "#fff",
            },
            nameGap: '1',
            type: 'category',
            data: xdata,
            axisLabel: {
                interval: 1,
                color: "#fff",
                fontSize: getSize(0.2),
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#579dff",
                }
            },
            axisTick: {
                show: false
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,
            },
        }],
        yAxis: [{
            // show:false,
            type: 'value',
            name: '',
            nameTextStyle: {
                color: "#fff",
                fontSize: getSize(0.24),
            },
            axisLabel: {
                show: true,
                interval: 'auto',
                color: "#fff",
                fontSize: getSize(0.2),
            },
            splitNumber: 2,
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,
                lineStyle: {
                    color: '#10447C',
                    opacity: 1,
                    width: 1,
                    type: 'solid',
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#579dff",
                }
            },
            axisTick: {
                show: false
            },
        }],
        series: [{
            type: 'bar',
            barGap: 0,
            barWidth: "40%",
            markLine: {
                label: {
                    show: true,
                    // formatter: '',
                    formatter: 'avg: {c}',
                    position: 'end',
                    padding: [-20, 0, 0, -60]
                },
                silent: true,
                symbol: 'none',
                lineStyle: {
                    color: '#00F6FF'
                },
                data: [{
                    name: '平均线',
                    // 支持 'average', 'min', 'max'
                    type: 'average'
                }]
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: 'rgba(0,246,255,1)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,246,255,0.1)'
                            }
                        ]
                    ),
                    barBorderRadius: [4, 4, 0, 0]
                },
            },
            yAxisIndex: 0,
            // data: ydata
            data: function () {
                var itemArr = [],
                    item;
                var max_index = ydata.indexOf(max);
                var min_index = ydata.indexOf(min);
                for (var i = 0; i < ydata.length; i++) {
                    if (i == max_index) {
                        item = {
                            value: ydata[i],
                            label: {
                                show: true,
                                position: 'insideLeft',
                                color: '#fff',
                                formatter: '{b}\nmax:{c}',
                                backgroundColor: 'rgba(1,60,119,0.86)',
                                padding: [5, 5, 5, 5]
                                // zlevel:10
                                // padding:[20,0,0,0]
                            },
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [{
                                                offset: 0,
                                                color: 'rgba(239, 72, 100, 1)'
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(0,246,255,0.1)'
                                            }
                                        ]
                                    ),
                                    barBorderRadius: [4, 4, 0, 0]
                                },
                            },
                        };
                    } else if (i == min_index) {
                        item = {
                            value: ydata[i],
                            label: {
                                show: true,
                                position: 'insideLeft',
                                color: '#fff',
                                formatter: '{b}\nmin:{c}',
                                backgroundColor: 'rgba(1,60,119,0.86)',
                                padding: [5, 5, 5, 5]
                            },
                            zlevel: 100,
                            emphasis: {
                                label: {
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [{
                                                offset: 0,
                                                color: 'rgba(0, 205, 96, 1)'
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(0,246,255,0.1)'
                                            }
                                        ]
                                    ),
                                    barBorderRadius: [4, 4, 0, 0]
                                },
                            },
                        };
                    } else {
                        item = {
                            value: ydata[i],
                            label: {
                                show: false,
                                color: '#fff'
                            },
                            itemStyle: {
                                normal: {

                                }
                            }
                        };
                    }
                    itemArr.push(item);
                }
                return itemArr;
            }()
        }, ]
    };
    myChart.setOption(option);
}
//柱形图-9
var chart_bar_9 = function (pxdata, pydata) {
    var myChart = echarts.init(document.getElementById('bar-9'));
    var nameArr = ["种子轮企业", "天使轮企业", "A轮企业", "B轮企业", "C轮企业", "D轮企业", "E及以上轮企业"];
    var dataArr = S_mock.array(7, 100, 200);
    var total = 0;
    for (var i = 0; i < dataArr.length; i++) {
        total += dataArr[i];
    }
    var option = {
        grid: {
            top: '8%',
            bottom: '8%',
            left: '5%',
            right: '7%',
            containLabel: true,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                lineStyle: {
                    color: '#39627d'
                }
            },
            formatter: '{b} {c}家'
        },
        yAxis: [{
            type: 'category',
            zlevel: 1,
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,
                lineStyle: {
                    color: '#6b85a3'
                }
            },
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#00ffff'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                fontSize: getSize(0.28),
                color: '#fff',
            },
            axisTick: {
                show: false,
            },
            inverse: true,
            data: nameArr
        }, {
            type: 'category',
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,
                lineStyle: {
                    color: '#6b85a3'
                }
            },
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: false,
                lineStyle: {
                    color: '#00ffff'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                fontSize: getSize(0.28),
                formatter: function (para) {
                    var value = dataArr[nameArr.indexOf(para)];
                    var percent = (value / total * 100).toFixed(0) + '%';
                    return value + '家  ' + percent;
                },
                color: '#fff',
            },
            axisTick: {
                show: false,
            },
            inverse: true,
            data: nameArr
        }],
        xAxis: [{
            type: 'value',
            boundaryGap: true,
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,
                lineStyle: {
                    color: '#6b85a3'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff'
                },
            },
            axisLabel: {
                show: false,
                color: '#fff',
            },
            axisTick: {
                show: false,
            },
        }],
        series: [{
            name: '',
            type: 'bar',
            barGap: 0,
            barWidth: '30%',
            label: {
                show: true,
                position: 'insideRight',
                // formatter: '{c}件',
                formatter: function (para) {
                    var pct = (dataArr[nameArr.indexOf(para.name)] / getArrSum(dataArr) * 100).toFixed(2);
                    return pct + '%  '
                },
                color: '#fff',
                fontSize: getSize(0.2),
                z: 3
            },
            itemStyle: {
                barBorderRadius: getSize(0.05),
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0, //// 0% 处的颜色
                        color: 'rgba(49,150,250,0.1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(49,150,250,1)'
                    }
                ], false),
            },
            data: dataArr
        }]
    };
    myChart.setOption(option);
}
//柱形图-10
var chart_bar_10 = function (pxdata, pydata1, pydata2) {
    var myChart = echarts.init(document.getElementById('bar-10'));
    var nameArr = pxdata || ["种子轮企业", "天使轮企业", "A轮企业", "B轮企业", "C轮企业", "D轮企业", "E及以上轮企业"];
    var dataArr = pydata1 || S_mock.array(7, 1000, 1200);
    var dataArr2 = pydata2 || S_mock.array(7, 1000, 1200);
    var legend_arr = ['学生', '教职工'];
    var total = 0;
    for (var i = 0; i < dataArr.length; i++) {
        total += dataArr[i];
    }
    var option = {
        grid: {
            top: '8%',
            bottom: '8%',
            left: '5%',
            right: '7%',
            containLabel: true,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                lineStyle: {
                    color: '#39627d'
                }
            },
            // formatter: '{b} {c}家'
            formatter: '{b0}: <br /> {a0}:{c0}人<br />{a1}:{c1}人'
        },
        legend: {
            textStyle: {
                color: '#fff'
            },
            data: legend_arr
        },
        yAxis: [{
            type: 'category',
            zlevel: 1,
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,
                lineStyle: {
                    color: '#6b85a3'
                }
            },
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#00ffff'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                fontSize: getSize(0.28),
                color: '#fff',
            },
            axisTick: {
                show: false,
            },
            inverse: true,
            data: nameArr
        }, {
            type: 'category',
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,
                lineStyle: {
                    color: '#6b85a3'
                }
            },
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: false,
                lineStyle: {
                    color: '#00ffff'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                fontSize: getSize(0.28),
                formatter: function (para) {
                    var value = dataArr[nameArr.indexOf(para)];
                    var value2 = dataArr2[nameArr.indexOf(para)];
                    return value + '人 / ' + value2 + '人';
                },
                color: '#fff',
            },
            axisTick: {
                show: false,
            },
            inverse: true,
            data: nameArr
        }],
        xAxis: [{
            type: 'value',
            boundaryGap: true,
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,
                lineStyle: {
                    color: '#6b85a3'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff'
                },
            },
            axisLabel: {
                show: false,
                color: '#fff',
            },
            axisTick: {
                show: false,
            },
        }],
        series: [{
            name: legend_arr[0],
            type: 'bar',
            barGap: 0,
            stack: 'a',
            barWidth: '30%',
            itemStyle: {
                // barBorderRadius: getSize(0.05),
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0, //// 0% 处的颜色
                        color: '#00CCFF'
                    },
                    {
                        offset: 1,
                        color: '#00CCFF'
                    }
                ], false),
            },
            data: dataArr
        }, {
            name: legend_arr[1],
            type: 'bar',
            barGap: 0,
            stack: 'a',
            barWidth: '30%',
            itemStyle: {
                // barBorderRadius: getSize(0.05),
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0, //// 0% 处的颜色
                        color: '#0090FF'
                    },
                    {
                        offset: 1,
                        color: '#0090FF'
                    }
                ], false),
            },
            data: dataArr2
        }]
    };
    myChart.setOption(option);
}
//柱形图-11
var chart_bar_11 = function (pxdata, pydata) {
    var myChart = echarts.init(document.getElementById('bar-11'));
    var nameArr = ["种子轮企业", "天使轮企业", "A轮企业", "B轮企业", "C轮企业", "D轮企业", "E及以上轮企业"];
    var dataArr = S_mock.array(7, 100, 200);
    var total = 0;
    for (var i = 0; i < dataArr.length; i++) {
        total += dataArr[i];
    }
    var option = {
        grid: {
            top: '8%',
            bottom: '8%',
            left: '5%',
            right: '7%',
            containLabel: true,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                lineStyle: {
                    color: '#39627d'
                }
            },
            formatter: '{b} {c}家'
        },
        yAxis: [{
            type: 'category',
            zlevel: 1,
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,
                lineStyle: {
                    color: '#6b85a3'
                }
            },
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#00ffff'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                fontSize: getSize(0.28),
                color: '#fff',
            },
            axisTick: {
                show: false,
            },
            inverse: true,
            data: nameArr
        }, {
            type: 'category',
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,
                lineStyle: {
                    color: '#6b85a3'
                }
            },
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: false,
                lineStyle: {
                    color: '#00ffff'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                fontSize: getSize(0.28),
                formatter: function (para) {
                    var value = dataArr[nameArr.indexOf(para)];
                    var percent = (value / total * 100).toFixed(0) + '%';
                    return value + '家  ' + percent;
                },
                color: '#fff',
            },
            axisTick: {
                show: false,
            },
            inverse: true,
            data: nameArr
        }],
        xAxis: [{
            type: 'value',
            boundaryGap: true,
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,
                lineStyle: {
                    color: '#6b85a3'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff'
                },
            },
            axisLabel: {
                show: false,
                color: '#fff',
            },
            axisTick: {
                show: false,
            },
        }],
        series: [{
                name: '',
                type: 'bar',
                barGap: 0,
                barWidth: '30%',
                label: {
                    show: false,
                    position: 'insideRight',
                    // formatter: '{c}件',
                    formatter: function (para) {
                        var pct = (dataArr[nameArr.indexOf(para.name)] / getArrSum(dataArr) * 100).toFixed(2);
                        return pct + '%  '
                    },
                    color: '#fff',
                    fontSize: getSize(0.2)
                },
                itemStyle: {
                    barBorderRadius: getSize(0.05),
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0, //// 0% 处的颜色
                            color: 'rgba(49,150,250,0.1)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(49,150,250,1)'
                        }
                    ], false),
                },
                data: dataArr
            },
            {
                // 分隔
                type: "pictorialBar",
                itemStyle: {
                    normal: {
                        color: "#666"
                    }
                },
                symbolRepeat: "fixed",
                symbolMargin: 6,
                symbol: "rect",
                symbolClip: true,
                symbolSize: [2, '40%'],
                symbolPosition: "start",
                symbolOffset: [-1, 0],
                symbolBoundingData: this.total,
                data: dataArr,
                z: 2,
                animationEasing: "elasticOut"
            }
        ]
    };
    myChart.setOption(option);
}
//柱形图-12
var chart_bar_12 = function (pxdata, pydata) {
    var myChart = echarts.init(document.getElementById('bar-12'));
    var xdata = pxdata || S_mock.xdata(1, 6, '月');
    var ydata = pydata || S_mock.array(xdata.length, 50, 80);
    var option = {
        backgroundColor: '#000922',
        grid: {
            left: '12%',
            top: '5%',
            bottom: '12%',
            right: '8%'
        },
        tooltip: {
            show: true,
            formatter: function (params) {
                var val = params.value;
                return '关注度：' + val + '<br />批示：' + val + '%'
            }
        },
        xAxis: {
            data: xdata,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#3087B1',
                    width: 1 //这里是为了突出显示加上的
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }
            }
        },
        yAxis: [{
            splitNumber: 3,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#151C41',
                    width: 1 //这里是为了突出显示加上的
                }
            },
            axisLabel: {
                formatter: '{value} %',
                textStyle: {
                    color: '#fff'
                }
            },
            splitArea: {
                areaStyle: {
                    color: 'rgba(255,255,255,.5)'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#151C41',
                    width: 0.5,
                    type: 'dashed'
                }
            },
            max: 100
        }, {
            type: 'value',
            splitNumber: 3,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#151C41',
                    width: 1 //这里是为了突出显示加上的
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            splitArea: {
                areaStyle: {
                    color: 'rgba(255,255,255,.5)'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#151C41',
                    width: 0.5,
                    type: 'dashed'
                }
            },
            min: 0,
            max: 100
        }],
        series: [{
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '0%',
            // symbol: 'triangle',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            label: {
                show: false,
                position: 'top',
                distance: 15,
                color: '#DB5E6A',
                fontWeight: 'bolder',
                fontSize: 20,
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                                offset: 0,
                                color: 'rgba(0, 125, 253, 0.8)' //  0%  处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(0, 125, 253, .1)' //  100%  处的颜色
                            }
                        ],
                        global: false //  缺省为  false
                    }
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: ydata,
            z: 10
        }]
    };
    myChart.setOption(option);
}
//柱形图-13
var chart_bar_13 = function (pxdata, pydata1, pydata2) {
    var myChart = echarts.init(document.getElementById('bar-13'));
    var xdata = pxdata || S_mock.xdata(1, 4, '月');
    var ydata = pydata1 || S_mock.array(4, 100, 200);
    var ydata2 = pydata2 || S_mock.array(4, 100, 200);
    var legend_arr = ['计划投资', '实际投资'];
    var option = {
        backgroundColor: '#000922',
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color: ['#0683F2', '#BA8E26', '#2DE799'],
        grid: {
            left: '4%',
            top: "22%",
            right: '4%',
            bottom: '5%',
            containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
        },
        legend: {
            icon: 'rect',
            textStyle: {
                color: "#fff",
                fontSize: getSize(0.25)
            },
            data: legend_arr
        },
        xAxis: [{
            nameLocation: "start",
            nameTextStyle: {
                color: "#fff",
            },
            nameGap: '1',
            type: 'category',
            data: xdata,
            axisLabel: {
                interval: 0,
                color: "#ccc",
                fontSize: getSize(0.3),
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#3087B1",
                }
            },
            axisTick: {
                show: false
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,
            },
        }],
        yAxis: [{
            // show:false,
            type: 'value',
            name: '单位：万元',
            nameTextStyle: {
                color: "#ccc",
                fontSize: getSize(0.24),
            },
            axisLabel: {
                interval: 0,
                color: "#ccc",
                fontSize: getSize(0.24),
            },
            splitNumber: 5,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#151C41',
                    width: 0.5,
                    type: 'dashed'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#151C41',
                    width: 1 //这里是为了突出显示加上的
                }
            },
            axisTick: {
                show: false
            },
        }],
        series: [{
            name: legend_arr[0],
            type: 'pictorialBar',
            barCategoryGap: '0%',
            barWidth: "20%",
            barGap: '10%',
            // symbol: 'triangle',
            symbol: 'image://./assets/img/bar1.png',
            symbolSize: ['100%', '100%'],
            symbolRepeat: false,
            label: {
                show: false,
                position: 'top',
                distance: 15,
                color: '#DB5E6A',
                fontWeight: 'bolder',
                fontSize: 20,
            },
            data: ydata,
            z: 10
        }, {
            name: legend_arr[1],
            type: 'pictorialBar',
            barCategoryGap: '0%',
            barWidth: "20%",
            barGap: '10%',
            // symbol: 'triangle',
            symbol: 'image://./assets/img/bar2.png',
            symbolSize: ['100%', '100%'],
            symbolRepeat: false,
            label: {
                show: false,
                position: 'top',
                distance: 15,
                color: '#DB5E6A',
                fontWeight: 'bolder',
                fontSize: 20,
            },
            data: ydata2,
            z: 10
        }]
    };
    myChart.setOption(option);
}
//饼图-1
var chart_pie_1 = function (pxdata, pydata) {
    var mychart = echarts.init(document.getElementById('pie-1'));
    var color_arr = ['#3196fa', '#00ffc6', '#00cd60', '#ffa800'];
    var name_arr = pxdata || ['项目1', '项目2', '项目3', '项目4'];
    var ydata = pydata || S_mock.array(4, 100, 200);
    var seri_data = [];
    var dw = '项';
    for (const key in name_arr) {
        if (key == 0) {
            seri_data.push({
                name: name_arr[key],
                value: ydata[key],
                label: {
                    show: true
                }
            })
        } else {
            seri_data.push({
                name: name_arr[key],
                value: ydata[key]
            })
        }
    }
    var option = {
        color: color_arr,
        title: {
            show: false,
            left: 'center',
            top: 'top',
            text: '标题',
            textStyle: {
                fontWeight: 'normal',
                color: '#facc14',
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
        },
        legend: {
            y: 'center',
            right: '4%',
            // itemWidth: getSize(0.24),
            // itemHeight: getSize(0.14),
            // itemGap: getSize(0.2),
            icon: 'roundRect',
            formatter: function (para) {
                var str = '{a|' + para + '} {b|';
                str += ydata[name_arr.indexOf(para)] + '}  {c|' + dw + '}';
                if (para = '其他') {
                    str = str.replace(/其他/, '其他');
                }
                return str;
            },
            textStyle: {
                padding: [getSize(0.1), getSize(0.2), 0, 0],
                rich: {
                    a: {
                        fontSize: getSize(0.3),
                        color: '#fff'
                    },
                    b: {
                        fontSize: getSize(0.3),
                        color: '#facc14'
                    },
                    c: {
                        fontSize: getSize(0.24),
                        color: '#fff'
                    }
                }
            },
            orient: 'vertical', //horizontal 水平 vertical 垂直
            data: name_arr
        },
        series: [{
            name: '',
            type: 'pie',
            clockWise: false,
            center: ['30%', '50%'],
            radius: ['60%', '75%'],
            startAngle: 90,
            label: {
                show: false,
                fontSize: 16,
                fontFamily: 'DIN',
                position: 'center',
                formatter: '{a|' + getArrSum(ydata) + '}\n{b|总计}',
                rich: {
                    a: {
                        fontSize: getSize(0.44),
                        color: '#FFA800'
                    },
                    b: {
                        fontSize: getSize(0.24),
                        color: '#fff'
                    }
                }
            },
            labelLine: {
                show: true
            },
            data: seri_data
        }]
    }
    mychart.setOption(option);
};
//饼图-2
var chart_pie_2 = function (pxdata, pydata) {
    var colorArr = ['#FACC14', '#F44660', '#00FF00', '#9696FF', '#3196FA'];
    var valueArr = [92, 20, 10, 2, 1];
    var nameArr = ['项目1', '项目2', '项目3', '项目4', '项目5'];
    var dataArr = [];
    var legendArr = [];
    for (var i = 0; i < nameArr.length; i++) {
        dataArr.push({
            name: nameArr[i],
            value: valueArr[i]
        });
        legendArr.push({
            icon: 'roundRect',
            name: nameArr[i],
        });
    }
    var mychart = echarts.init(document.getElementById('pie-2'));
    var option = {
        color: colorArr,
        title: {
            left: '40%',
            top: '25%',
            text: ' 125\n  项',
            textStyle: {
                fontSize: getSize(0.6),
                fontWeight: 'normal',
                color: '#facc14',
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            bottom: '0%',
            width: '60%',
            height: '30%',
            itemWidth: getSize(0.2),
            itemHeight: getSize(0.16),
            itemGap: getSize(0.16),
            formatter: function (para) {
                var str = '{a|' + para + '} {b|';
                str += valueArr[nameArr.indexOf(para)] + '}  {c|项}';
                if (para = '其他') {
                    str = str.replace(/其他/, '其他       ');
                }
                return str;
            },
            textStyle: {
                padding: [getSize(0.1), getSize(0.2), 0, 0],
                rich: {
                    a: {
                        fontSize: getSize(0.3),
                        color: '#fff'
                    },
                    b: {
                        fontSize: getSize(0.3),
                        color: '#facc14'
                    },
                    c: {
                        fontSize: getSize(0.3),
                        color: '#facc14'
                    }
                }
            },
            orient: 'vertical',
            data: legendArr
        },
        series: [{
            name: '非遗代表性项目数',
            type: 'pie',
            clockWise: true,
            center: ['50%', '35%'],
            radius: ['45%', '55%'],
            startAngle: 90,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        fontSize: 16,
                        fontFamily: 'DIN',
                        formatter: '{c}',
                    },
                    labelLine: {
                        show: true
                    }
                }
            },
            data: dataArr
        }]
    }
    mychart.setOption(option);
}
//饼图-3
var chart_pie_3 = function (pxdata, pydata) {
    var colorArr = ['#E4FF00', '#F44660', '#FF9600', '#9696FF', '#3196FA', '#00D564', '#00FFFC'];
    var valueArr = [750, 780, 500, 10500, 800, 450, 300];
    var nameArr = ['项目1', '项目2', '项目3', '项目4', '项目5', '项目6', '项目7'];
    var dataArr = [];
    var legendArr = [];
    for (var i = 0; i < nameArr.length; i++) {
        dataArr.push({
            name: nameArr[i],
            value: valueArr[i]
        });
        legendArr.push({
            icon: 'rect',
            name: nameArr[i],
        });
    }
    var mychart = echarts.init(document.getElementById('pie-3'));
    var option = {
        color: colorArr,
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} 米"
        },
        legend: {
            y: 'center',
            right: '0%',
            itemWidth: getSize(0.24),
            itemHeight: getSize(0.24),
            itemGap: getSize(0.1),
            textStyle: {
                padding: [getSize(0.1), 0, 0, 0],
                rich: {
                    a: {
                        fontSize: getSize(0.28),
                        color: '#fff'
                    },
                    b: {
                        fontSize: getSize(0.24),
                        color: '#facc14'
                    },
                    c: {
                        fontSize: getSize(0.24),
                        color: '#facc14'
                    }
                }
            },
            formatter: function (para) {
                var str = '{a|' + para + '} {b|';
                str += valueArr[nameArr.indexOf(para)] + '}  {c|米}';
                if (para = '其他') {
                    str = str.replace(/其他/, '其他       ');
                }
                return str;
            },
            orient: 'vertical',
            data: legendArr
        },
        series: [{
            name: '特色街区长度',
            type: 'pie',
            clockWise: false,
            center: ['25%', '50%'],
            radius: ['0%', '60%'],
            startAngle: 90,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        fontSize: 16,
                        fontFamily: 'DIN',
                        formatter: '{c}',
                    },
                    labelLine: {
                        show: true
                    }
                }
            },
            data: dataArr
        }]
    }
    mychart.setOption(option);
}
//饼图-4
var chart_pie_4 = function (pxdata, pydata) {
    var colorArr = ['#ffa800', '#00ffb4', '#fffc00', '#00f0ff', '#f12961', '#00bc2c', '#8882ff', '#ff7200', '#3196fa'];
    var valueArr = [900, 900, 900, 900, 900, 900, 900, 900, 900];
    var nameArr = ['项目1', '项目2', '项目3', '项目4', '项目5', '项目6', '项目7', '项目8', '项目9'];
    var dataArr = [];
    var legendArr = [];
    for (var i = 0; i < nameArr.length; i++) {
        dataArr.push({
            name: nameArr[i],
            value: valueArr[i]
        });
        legendArr.push({
            icon: 'rect',
            name: nameArr[i],
        });
    }
    var mychart = echarts.init(document.getElementById('pie-4'));
    var option = {
        color: colorArr,
        title: {
            left: '35%',
            top: '25%',
            text: ' 已处理:8613个\n\n 未处理:8613个',
            textStyle: {
                fontSize: getSize(0.25),
                fontWeight: 'normal',
                color: '#facc14'
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            y: 'bottom',
            right: '10%',
            itemWidth: getSize(0.3),
            // itemHeight: getSize(0.2),
            itemGap: getSize(0.4),
            formatter: function (para) {
                var str = '{a|' + para + '}';
                // str += valueArr[nameArr.indexOf(para)] + '}';
                if (para = '其他') {
                    str = str.replace(/其他/, '其他       ');
                }
                return str;
            },
            textStyle: {
                padding: [0, 0, 0, 0],
                rich: {
                    a: {
                        fontSize: getSize(0.3),
                        color: '#fff'
                    },
                    b: {
                        fontSize: getSize(0.3),
                        color: '#facc14'
                    },
                    c: {
                        fontSize: getSize(0.3),
                        color: '#facc14'
                    }
                }
            },
            orient: 'horizontal',
            data: legendArr
        },
        series: [{
            name: '学校总数',
            type: 'pie',
            clockWise: true,
            center: ['50%', '30%'],
            radius: ['45%', '55%'],
            startAngle: 90,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    formatter: '{d}%',
                    textStyle: {
                        fontSize: getSize(.3),
                        fontWeight: 'bold',
                        padding: [0, 0, getSize(1), 0]
                    }
                }
            },
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        fontSize: 16,
                        fontFamily: 'DIN',
                        formatter: '{c}',
                    },
                    labelLine: {
                        show: true
                    }
                }
            },
            data: dataArr
        }]
    }
    mychart.setOption(option);
}
//饼图-5
var chart_pie_5 = function (pxdata, pydata) {
    var colorArr = ['#FFA800', '#3196FA'];
    var nameArr = pxdata || ['项目1', '项目2'];
    var valueArr = pydata || S_mock.array(2, 100, 200);
    var dataArr = [];
    var legendArr = [];
    for (var i = 0; i < nameArr.length; i++) {
        dataArr.push({
            name: nameArr[i],
            value: valueArr[i]
        });
        legendArr.push({
            icon: 'rect',
            name: nameArr[i],
        });
    }
    var mychart = echarts.init(document.getElementById('pie-5'));
    var option = {
        color: colorArr,
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}元)"
        },
        legend: {
            y: 'center',
            right: '15%',
            itemWidth: getSize(0.4),
            itemHeight: getSize(0.24),
            itemGap: getSize(0.1),
            textStyle: {
                padding: [getSize(0.1), 0, 0, 0],
                rich: {
                    a: {
                        fontSize: getSize(0.28),
                        color: '#fff'
                    },
                    b: {
                        fontSize: getSize(0.24),
                        color: '#facc14'
                    },
                    c: {
                        fontSize: getSize(0.24),
                        color: '#facc14'
                    }
                }
            },
            formatter: function (para) {
                var str = '{a|' + para + '} {b|';
                str += valueArr[nameArr.indexOf(para)] + '}  {c|元}';
                if (para = '其他') {
                    str = str.replace(/其他/, '其他       ');
                }
                return str;
            },
            orient: 'vertical',
            data: legendArr
        },
        series: [{
            name: '累计未支付金额和履约金额占比',
            type: 'pie',
            clockWise: false,
            center: ['30%', '55%'],
            radius: ['0%', '60%'],
            startAngle: 90,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        fontSize: 16,
                        fontFamily: 'DIN',
                        // formatter: '{c}',
                        formatter: '{d}%',
                    },
                    labelLine: {
                        show: true
                    }
                }
            },
            data: dataArr
        }]
    }
    mychart.setOption(option);
}
//饼图-6
var chart_pie_6 = function (pxdata, pydata) {
    var colorArr = ['#3196FA', '#BB9AFF', '#00D564', '#FFCC00', '#FF506D'];
    var valueArr = [1200, 1200, 1200, 1200, 1200];
    var nameArr = ['项目1', '项目2', '项目3', '项目4', '项目5']
    var dataArr = [];
    var legendArr = [];
    for (var i = 0; i < nameArr.length; i++) {
        if (i === 0) {
            dataArr.push({
                name: nameArr[i],
                value: valueArr[i],
                label: {
                    show: true
                }
            });
            legendArr.push({
                icon: 'roundRect',
                name: nameArr[i],
            });
        } else {
            dataArr.push({
                name: nameArr[i],
                value: valueArr[i]
            });
            legendArr.push({
                icon: 'roundRect',
                name: nameArr[i],
            });
        }

    }
    var mychart = echarts.init(document.getElementById('pie-6'));
    var option = {
        color: colorArr,
        // title: {
        //     left: '20%',
        //     top: '45%',
        //     text: ' 42191\n    人',
        //     textStyle: {
        //         fontSize: getSize(0.35),
        //         fontWeight: 'normal',
        //         color: '#facc14',
        //     },
        // },
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c}件 ({d}%)"
        },
        legend: {
            y: 'center',
            right: '0%',
            itemWidth: getSize(0.24),
            itemHeight: getSize(0.14),
            itemGap: getSize(0.16),
            formatter: function (para) {
                var pct = (valueArr[nameArr.indexOf(para)] / getArrSum(valueArr) * 100).toFixed(2);
                var str = '{a|' + para + '}';
                if (nameArr.indexOf(para) === 0) {
                    str += '{b|' + pct + '%}' + '{b1|' + valueArr[nameArr.indexOf(para)] + ' 件}';
                } else if (nameArr.indexOf(para) === 1) {
                    str += '{c|' + pct + '%}' + '{c1|' + valueArr[nameArr.indexOf(para)] + ' 件}';
                } else if (nameArr.indexOf(para) === 2) {
                    str += '{d|' + pct + '%}' + '{d1|' + valueArr[nameArr.indexOf(para)] + ' 件}';
                } else if (nameArr.indexOf(para) === 3) {
                    str += '{e|' + pct + '%}' + '{e|' + valueArr[nameArr.indexOf(para)] + ' 件}';
                } else if (nameArr.indexOf(para) === 4) {
                    str += '{f|' + pct + '%}' + '{f|' + valueArr[nameArr.indexOf(para)] + ' 件}';
                }
                return str;
            },
            textStyle: {
                rich: {
                    a: {
                        width: getSize(1.4),
                        // padding: [0, 5, 0, 0],
                        fontSize: getSize(0.24),
                        color: '#fff'
                    },
                    b: {
                        width: getSize(1.2),
                        fontSize: getSize(0.24),
                        color: colorArr[0]
                    },
                    b1: {
                        width: getSize(1),
                        fontSize: getSize(0.24),
                        color: colorArr[0]
                    },
                    c: {
                        width: getSize(1.2),
                        fontSize: getSize(0.24),
                        color: colorArr[1]
                    },
                    c1: {
                        width: getSize(1),
                        fontSize: getSize(0.24),
                        color: colorArr[1]
                    },
                    d: {
                        width: getSize(1.2),
                        fontSize: getSize(0.24),
                        color: colorArr[2]
                    },
                    d1: {
                        width: getSize(1),
                        fontSize: getSize(0.24),
                        color: colorArr[2]
                    },
                    e: {
                        width: getSize(1.2),
                        fontSize: getSize(0.24),
                        color: colorArr[3]
                    },
                    e1: {
                        width: getSize(1),
                        fontSize: getSize(0.24),
                        color: colorArr[3]
                    },
                    f: {
                        width: getSize(1.2),
                        fontSize: getSize(0.24),
                        color: colorArr[4]
                    },
                    f1: {
                        width: getSize(1),
                        fontSize: getSize(0.24),
                        color: colorArr[4]
                    }
                }
            },
            orient: 'vertical',
            data: legendArr
        },
        series: [{
            name: '',
            type: 'pie',
            clockWise: true,
            center: ['30%', '55%'],
            radius: ['70%', '90%'],
            startAngle: 90,
            label: {
                show: false,
                position: 'center',
                formatter: '{a|总量}\n{b|9316}',
                rich: {
                    a: {
                        fontSize: getSize(0.26),
                        padding: [10, 0, 0, 0],
                        color: '#fff'
                    },
                    b: {
                        fontSize: getSize(0.43),
                        color: '#3196fa'
                    }
                }
            },
            data: dataArr
        }]
    }
    mychart.clear();
    mychart.setOption(option);
}
//饼图-7
var chart_pie_7 = function (pxdata, pydata) {
    var myChart = echarts.init(document.getElementById('pie-7'));
    var colorArr = ['#00ff4e', '#ffa800', '#3196fa'];
    var dataArr = [];
    var legendArr = [];
    var nameArr = ['在建项目', '开工项目', '竣工项目'];
    var valueArr = [46, 23, 31];
    for (var i = 0; i < nameArr.length; i++) {
        if (i === 0) {
            dataArr.push({
                name: nameArr[i],
                value: valueArr[i],
                label: {
                    show: true
                }
            });
        } else {
            dataArr.push({
                name: nameArr[i],
                value: valueArr[i],
            });
        }

        legendArr.push({
            icon: 'roundRect',
            name: nameArr[i]
        });
    }
    var option = {
        color: colorArr,
        title: {
            text: '项目总数量',
            x: 'center',
            top: '0%',
            textStyle: {
                fontWeight: 'normal',
                fontSize: getSize(0.32),
                color: '#fff'
            }
        },
        legend: {
            top: '30%',
            right: '2%',
            itemWidth: getSize(0.34),
            itemHeight: getSize(0.27),
            itemGap: getSize(0.2),
            textStyle: {
                fontSize: getSize(0.24),
                color: '#fff'
            },
            orient: 'vertical',
            data: legendArr
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        series: [{
            name: '建设工程',
            type: 'pie',
            clockWise: true,
            radius: ['40%', '55%'],
            center: ['35%', '52%'],
            startAngle: 90,
            label: {
                show: false,
                position: 'center',
                formatter: '{a|40%}\n{b|在建}',
                rich: {
                    a: {
                        fontSize: getSize(0.44),
                        color: '#00ff4e'
                    },
                    b: {
                        fontSize: getSize(0.24),
                        color: '#fff'
                    }
                }
            },
            labelLine: {
                show: false
            },
            data: dataArr,
        }]
    }
    myChart.setOption(option);
}
//饼图-8
var chart_pie_8 = function (pdata) {
    var mychart = echarts.init(document.getElementById('pie-8'));
    var color_arr = ['#00BD65', '#004181'];
    var name_arr = ['百分比', '总计'];
    var ydata = pdata || S_mock.number(40, 60);
    var seri_data = [];
    for (const key in name_arr) {
        if (key == 0) {
            seri_data.push({
                value: ydata,
                label: {
                    show: true
                }
            })
        } else {
            seri_data.push({
                value: 100 - ydata
            })
        }
    }
    var option = {
        color: color_arr,
        title: {
            text: '楼宇入住率',
            left: 'center',
            top: 'top',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: getSize(0.32)
            }
        },
        tooltip: {
            show: false,
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
        },
        legend: {
            show: false,
            y: 'bottom',
            x: 'center',
            itemWidth: getSize(0.39),
            itemHeight: getSize(0.17),
            itemGap: getSize(0),
            icon: 'roundRect',
            formatter: function (para) {
                if (name_arr.indexOf(para) == 0) {
                    var str = '{a|' + para + '} {b|';
                    str += ydata[name_arr.indexOf(para)] + '场}';
                } else if (name_arr.indexOf(para) == 1) {
                    var str = '{a|' + para + '} {b1|';
                    str += ydata[name_arr.indexOf(para)] + '场}';
                } else if (name_arr.indexOf(para) == 2) {
                    var str = '{a|' + para + '} {b2|';
                    str += ydata[name_arr.indexOf(para)] + '场}';
                } else if (name_arr.indexOf(para) == 3) {
                    var str = '{a|' + para + '} {b3|';
                    str += ydata[name_arr.indexOf(para)] + '场}';
                }
                return str;
            },
            textStyle: {
                padding: [getSize(0.1), getSize(0.2), 0, 0],
                rich: {
                    a: {
                        fontSize: getSize(0.24),
                        color: '#fff'
                    },
                    b: {
                        fontSize: getSize(0.28),
                        color: color_arr[0]
                    },
                    b1: {
                        fontSize: getSize(0.28),
                        color: color_arr[1]
                    },
                    b2: {
                        fontSize: getSize(0.28),
                        color: color_arr[2]
                    },
                    b3: {
                        fontSize: getSize(0.28),
                        color: color_arr[3]
                    },
                }
            },
            orient: 'vertical', //horizontal 水平 vertical 垂直
            data: name_arr
        },
        series: [{
            name: '',
            type: 'pie',
            clockWise: true,
            center: ['50%', '55%'],
            radius: ['60%', '70%'],
            startAngle: 90,
            label: {
                show: false,
                fontSize: 16,
                fontFamily: 'DIN',
                position: 'center',
                formatter: '{a|' + ydata + '}{b|%}',
                rich: {
                    a: {
                        fontSize: getSize(0.48),
                        color: '#FACC14'
                    },
                    b: {
                        fontSize: getSize(0.48),
                        color: '#FACC14'
                    }
                }
            },
            labelLine: {
                show: true
            },
            data: seri_data
        }]
    }
    mychart.setOption(option);
}
//仪表盘-1
var chart_gauge_1 = function (pdata) {
    var mychart = echarts.init(document.getElementById('gauge-1'));
    var value_data = pdata || S_mock.number(10, 80);
    var gradientColor1 = [
        [
            1, new echarts.graphic.LinearGradient(
                0, 0, 1, 0, [{
                        offset: 0,
                        color: '#32c25a'
                    },
                    {
                        offset: 0.25,
                        color: '#8fcc35'
                    },
                    {
                        offset: 0.5,
                        color: '#facc14'
                    },
                    {
                        offset: 0.75,
                        color: '#fa8b38'
                    },
                    {
                        offset: 1,
                        color: '#df4b64'
                    }
                ]
            )
        ]
    ]
    var option = {
        series: [{
            name: '内圈小',
            type: 'gauge',
            pointer: {
                show: true,
                width: getSize(0.1),
                length: '60%'
            },
            itemStyle: {
                color: '#979797'
            },
            radius: '100%',
            min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            splitNumber: 10,
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: gradientColor1,
                    width: getSize(0.15)
                }

            },
            splitLine: { //分隔线样式
                show: false,
                length: getSize(0.1)
            },
            axisLabel: { //刻度标签
                show: true,
                formatter: function (para) {
                    // console.log(para)
                    if (para == 0 || para == 50 || para == 100) {
                        return para;
                    } else {
                        return '';
                    }
                },
                distance: getSize(0.2),
                fontSize: getSize(0.2),
                color: '#fff'
            },
            axisTick: { //刻度样式
                show: false,
            },
            detail: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                padding: [getSize(0.2), 0, 0, 0],
                fontWeight: 'bold',
                formatter: '{a|' + value_data + '}{b| km/h}',
                textStyle: {
                    rich: {
                        a: {
                            fontSize: getSize(0.44),
                            color: '#facc14'
                        },
                        b: {
                            fontSize: getSize(0.28),
                            color: '#facc14'
                        }
                    }
                }
            },
            data: [{
                value: value_data,
                name: ''
            }]
        }]
    };
    mychart.setOption(option);
}
//仪表盘-2
var chart_gauge_2 = function (pdata) {
    var myChart = echarts.init(document.getElementById('gauge-2'));
    var option = {
        series: [{
            name: '空气优良率',
            type: 'gauge',
            min: 0,
            max: 100,
            center: ['50%', '50%'], // 默认全局居中
            splitNumber: 2,
            radius: '95%',
            startAngle: 200,
            endAngle: -20,
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [0.25, '#F1505E'],
                        [0.5, '#EACC16'],
                        [0.75, '#EACC16'],
                        [1, '#37C358']
                    ],
                    width: getSize(0.2),
                }
            },
            axisLabel: { // 坐标轴小标记
                show: true,
                distance: getSize(-0.3),
                textStyle: { // 属性lineStyle控制线条样式
                    color: '#fff',
                    fontSize: getSize(0.25),
                }
            },
            axisTick: { // 坐标轴小标记
                length: 0, // 属性length控制线长
                splitNumber: 11,
                lineStyle: { // 属性lineStyle控制线条样式
                    color: 'auto',
                    width: getSize(0.05),
                }
            },
            splitLine: { //橙色分割线-->
                show: false,
                length: 25,
                lineStyle: {
                    width: 3,
                    color: '#FCD209',
                }
            },
            itemStyle: { //指针颜色
                color: '#979797',
            },
            pointer: { //指针长短
                length: '70%',
                width: getSize(0.1),

            },
            detail: {
                formatter: '{value}%',
                offsetCenter: ['0', '70%'],
                color: '#20D4E7',
                fontWeight: 'bold',
                fontSize: getSize(0.35)
            },
            data: [{
                value: 80
            }]
        }, ]
    };
    //图表显示
    myChart.setOption(option)
}
//仪表盘-3
var chart_gauge_3 = function (pdata, pname) {
    // 初始化实例
    var gauge_val = {
        name: pname || "市一医院周边\n泊位指数",
        value: pdata || S_mock.number(10, 50)
    };
    if (gauge_val.value > 1) {
        var color_pct = parseFloat((gauge_val.value / 100).toFixed(2))
    } else {
        var color_pct = parseFloat(gauge_val.value)
    }
    var myChart = echarts.init(document.getElementById('gauge-3'));
    var option = {
        // backgroundColor: '#043654',
        series: [{
                name: '刻度',
                type: 'gauge',
                radius: '95%',
                min: 0,
                max: 100,
                splitNumber: 5, //刻度数量
                startAngle: 0,
                endAngle: 180,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 1,
                        color: [
                            [1, 'rgba(0,0,0,0)']
                        ]
                    }
                }, //仪表盘轴线
                axisLabel: {
                    show: false,
                    color: '#fff',
                    distance: 10
                }, //刻度标签。
                axisTick: {
                    show: true,
                    splitNumber: 10,
                    lineStyle: {
                        color: '#09C2FF',
                        width: 1
                    },
                    length: -1
                }, //刻度样式
                splitLine: {
                    show: true,
                    length: -1,
                    lineStyle: {
                        color: '#09C2FF',
                        width: 1
                    }
                }, //分隔线样式
                detail: {
                    show: false
                },
                pointer: {
                    show: false
                }
            },
            {
                type: 'gauge',
                radius: '85%',
                center: ['50%', '50%'],
                splitNumber: 0, //刻度数量
                startAngle: 180,
                endAngle: 0,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 10,
                        color: [
                            [
                                color_pct, new echarts.graphic.LinearGradient(
                                    0, 0, 1, 0, [{
                                            offset: 0,
                                            color: 'rgba(59,150,241,1)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(59,150,241,0.2)'
                                        }
                                    ]
                                )
                            ],
                            [
                                1, 'rgba(65,62,84,0)'
                            ]
                        ]
                    }
                },
                //分隔线样式。
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                pointer: {
                    show: false
                },
                title: {
                    show: false,
                    offsetCenter: [0, '-26%'], // x, y，单位px
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    }
                },
                //仪表盘详情，用于显示数据。
                detail: {
                    show: false,
                    offsetCenter: [0, '16%'],
                    color: '#ffffff',
                    formatter: function (params) {
                        return params
                    },
                    textStyle: {
                        fontSize: 44
                    }
                },
                data: [{
                    value: 100
                }]
            },
            {
                type: 'gauge',
                radius: '60%',
                center: ['50%', '50%'],
                splitNumber: 0, //刻度数量
                startAngle: 180,
                endAngle: 0,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 150,
                        color: [
                            [
                                1, new echarts.graphic.LinearGradient(
                                    0, 0, 1, 0, [{
                                            offset: 0,
                                            color: '#012242'
                                        },
                                        {
                                            offset: 1,
                                            color: '#01376D'
                                        }
                                    ]
                                )
                            ]
                        ]
                    }
                },
                //分隔线样式。
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                pointer: {
                    show: false
                },
                title: {
                    show: true,
                    offsetCenter: [0, getSize(0.5)], // x, y，单位px
                    textStyle: {
                        color: '#fff',
                        fontSize: getSize(0.24),
                        lineHeight: getSize(0.35)
                    }
                },
                //仪表盘详情，用于显示数据。
                detail: {
                    show: true,
                    offsetCenter: [0, getSize(-0.2)],
                    color: '#00FCFF',
                    formatter: function (params) {
                        return params
                    },
                    textStyle: {
                        fontSize: getSize(0.3)
                    }
                },
                data: [gauge_val]
            }
        ]
    };
    //图表显示
    myChart.setOption(option)
}
//水滴图-1
var chart_water_1 = function (pdata) {
    var mychart = echarts.init(document.getElementById('water-1'));
    var value = pdata || 0.7152;
    var data = [];
    data.push(value);
    var option = {
        series: [{
            type: 'liquidFill',
            data: data,
            radius: '80%',
            amplitude: '10%',
            waveLength: '100%',
            color: '#0090FF',
            outline: {
                show: true,
                borderDistance: 4,
                itemStyle: {
                    color: 'transparent',
                    borderColor: '#0090FF',
                    borderWidth: 1,
                    shadowBlur: 0,
                    shadowColor: ' rgba(255,0,0,1)'
                }
            },
            backgroundStyle: {
                color: 'transparent'
            },
            label: {
                show: true,
                formatter: (value * 100) + '%',
                fontSize: getSize(0.5),
                color: '#facc14',
                insideColor: '#facc14',
                fontWeight: 'normal',
            },
            itemStyle: {
                shadowBlur: 0,
                color: '#0090FF',
            }
        }],

    }
    mychart.setOption(option);
}
//水滴图-2
var chart_water_2 = function (pdata) {
    var mychart = echarts.init(document.getElementById('water-2'));
    var value = pdata || 0.7152;
    var data_arr = [0.6, 0.5];
    var data = [];
    for (const key in data_arr) {
        if (key == 0) {
            data.push({
                value: data_arr[key],
                itemStyle: {
                    color: '#333',
                }
            })
        } else {
            data.push({
                value: data_arr[key]
            })
        }

    }
    // data.push(value);
    var option = {
        series: [{
            type: 'liquidFill',
            data: data,
            radius: '80%',
            amplitude: '10%',
            waveLength: '100%',
            color: '#0090FF',
            outline: {
                show: true,
                borderDistance: 4,
                itemStyle: {
                    color: 'transparent',
                    borderColor: '#0090FF',
                    borderWidth: 1,
                    shadowBlur: 0,
                    shadowColor: ' rgba(255,0,0,1)'
                }
            },
            backgroundStyle: {
                color: 'transparent'
            },
            label: {
                show: true,
                formatter: '{a|目标值：80%\n}' + (value * 100) + '%',
                // formatter: function (params) {
                //     console.log('params', params);
                //     var str = '';
                //     var value = (params.value * 100) + '%';
                //     str += '{b|目标值}\n'
                //     // str += '{a|' + value + '}';
                // },
                fontSize: getSize(0.5),
                color: '#facc14',
                insideColor: '#facc14',
                fontWeight: 'normal',
                rich: {
                    a: {
                        padding: [10, 0, 0, 0],
                        fontSize: 14,
                        color: "#fff"
                    },
                    b: {
                        color: "#333"
                    }
                }

            },
            itemStyle: {
                shadowBlur: 0,
                color: '#0090FF',
            }
        }],

    }
    mychart.setOption(option);
}
//雷达图-1
var chart_radar_1 = function (pxdata, pydata) {
    var myChart = echarts.init(document.getElementById('radar-1'));
    var xdata = pxdata || ['监测', '年代', '体系', '巡检'];
    var ydata = pydata || S_mock.array(4, 50, 90);
    var indicator_arr = [];
    var avg = (getArrSum(ydata) / ydata.length).toFixed(2);
    for (const key in xdata) {
        indicator_arr.push({
            text: xdata[key],
            max: 100
        })
    }
    var option = {
        legend: {
            show: false,
        },
        title: {
            // text: '总分',
            subtext: avg,
            x: 'center',
            top: '40%',
            subtextStyle: {
                color: '#00fff6',
                fontWeight: 'normal',
                fontSize: getSize(0.48),
            }
        },
        // tooltip: {},
        radar: [{
            center: ['50%', '50%'],
            radius: '55%',
            indicator: indicator_arr,
            startAngle: 90, //起始角度
            splitNumber: 4, //指示器轴的分割段数。
            // shape: 'circle',//雷达图绘制类型
            name: { //雷达图每个指示器名称的配置项。
                formatter: '{value}',
                textStyle: {
                    color: '#fff'
                },
                fontSize: getSize(0.3)
            },
            nameGap: getSize(0.2),
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#217ed2'
                }
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线
                lineStyle: {
                    color: '#217ed2',
                    width: 1,
                }
            },
            splitArea: { //坐标轴在 grid 区域中的分隔区域，默认不显示
                show: false,
                areaStyle: {
                    color: ['#2c2c2d', '#333334', '#3a3a3b', '#333334']
                }
            },
        }],
        series: [{
            name: '雷达图',
            type: 'radar',
            data: [{
                value: ydata,
                // name: '各项得分',
                symbol: 'none',
                type: 'radar',
                itemStyle: {
                    normal: {
                        color: 'rgba(21, 105, 176, 1)'
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1,
                        opacity: 0
                    }
                },
                areaStyle: {
                    normal: {
                        color: '#1568b0',
                        opacity: 0.6
                    }
                }
            }]
        }]
    }
    //图表显示
    myChart.setOption(option);
}
//其他图表-1
var chart_other_1 = function (pxdata, pydata) {
    var myChart = echarts.init(document.getElementById('other-1'));
    var name_arr = pxdata || ['男', '女'];
    var perArr = pydata || S_mock.array(2, 1000, 2000);
    var spirit_1 = 'image://./assets/img/man.png';
    var spirit_2 = 'image://./assets/img/men.png';
    var maxData = Math.max.apply(null, perArr);
    var option = {
        // title: {
        //     text: '男女比例',
        //     x: 'center',
        //     top: '8%',
        //     textStyle: {
        //         fontWeight: 'normal',
        //         fontSize: getSize(0.18),
        //         color: '#fff'
        //     }
        // },
        xAxis: {
            max: maxData,
            splitLine: {
                show: false
            },
            offset: 10,
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false
            },
        },
        yAxis: {
            data: name_arr,
            inverse: true,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    color: '#fff',
                    fontSize: 18
                }
            }
        },
        grid: {
            top: '0%',
            left: '5%',
            right: '30%',
            bottom: '5%',
            containLabel: true
        },
        series: [{
                type: 'pictorialBar',
                symbolRepeat: 'fixed',
                symbolMargin: '5%',
                symbolClip: true,
                symbolSize: 20,
                symbolBoundingData: maxData, //这个属性是『指定图形界限的值』。
                data: [{
                        value: perArr[0],
                        symbol: spirit_1,
                    },
                    {
                        value: perArr[1],
                        symbol: spirit_2,
                    }
                ],
                z: 10
            },
            {
                // full data
                type: 'pictorialBar',
                itemStyle: {
                    normal: {
                        opacity: 0.1
                    }
                },
                label: {
                    normal: {
                        show: true,
                        formatter: '{c}人',
                        position: 'right',
                        offset: [3, 5],
                        textStyle: {
                            color: '#fff',
                            fontSize: 18
                        }
                    }
                },
                animationDuration: 0,
                symbolRepeat: 'fixed',
                symbolMargin: '5%',
                symbolSize: 20,
                symbolBoundingData: maxData,
                data: [{
                        value: perArr[0],
                        symbol: spirit_1,
                    },
                    {
                        value: perArr[1],
                        symbol: spirit_2,
                    }
                ],
                z: 5
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
//其他图表-2
var chart_other_2 = function (pxdata, pydata) {
    var myChart = echarts.init(document.getElementById('other-2'));
    var nameArr = pxdata || ['办理', '办结', '退回']
    var item_data = pydata || S_mock.array(3, 100, 200)
    var dataArr = [];
    for (const key in item_data) {
        dataArr.push({
            name: nameArr[key],
            value: item_data[key]
        })
    }
    var seriesObjs = [];
    var r = getSize(0.8);
    var colorArr = ['#5cfea8', '#00ccff', '#fb7075'];
    var placeHolderStyle = {
        normal: {
            label: {
                show: false,
                position: 'center'
            },
            labelLine: {
                show: false
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0.1)',
            borderWidth: getSize(0.1)
        }
    }
    for (var i = 0; i < dataArr.length; i++) {
        var seriesObj = {
            name: dataArr[i].name,
            type: 'pie',
            clockWise: true,
            center: ['30%', '55%'],
            radius: [r - 1 - i * getSize(0.2), r - i * getSize(0.2)],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    borderWidth: getSize(0.1),
                    borderColor: colorArr[i],
                }
            },
            hoverAnimation: false,
            data: [{
                value: dataArr[i].value / getArrSum(item_data)
            }, {
                name: 'invisible',
                value: 1 - dataArr[i].value / getArrSum(item_data),
                // value: dataArr[0].value * 4 / 3 - dataArr[i].value,
                itemStyle: placeHolderStyle
            }]
            // data: [{
            //     value: dataArr[i].value
            // }, {
            //     name: 'invisible',
            //     value: dataArr[0].value * 4 / 3 - dataArr[i].value,
            //     itemStyle: placeHolderStyle
            // }]
        }
        seriesObjs.push(seriesObj)
    }
    var option = {
        color: colorArr,
        tooltip: {
            position: 'top',
            formatter: '{a}：{d}%'
        },
        legend: {
            y: 'center',
            right: '15%',
            itemWidth: getSize(0.25),
            itemHeight: getSize(0.15),
            itemGap: getSize(0.15),
            formatter: function (para) {
                var str = para + ': ' + dataArr[nameArr.indexOf(para)].value + ' 件';
                return str;
            },
            textStyle: {
                fontSize: getSize(0.16),
                color: '#fff'
            },
            orient: 'vertical',
            icon: 'roundRect',
            data: [dataArr[0].name, dataArr[1].name, dataArr[2].name]
        },
        toolbox: {
            show: false
        },
        series: seriesObjs
    }
    myChart.setOption(option, true);
}
var chart_other_3 = function (pxdata, pydata) {
    var myChart = echarts.init(document.getElementById('other-3'));
    var name_arr = pxdata || ['数字经济', '商贸旅游', '金融服务', '文化创意', '商务服务', '体育健康', '智能制造', '建筑规划'];
    var perArr = pydata || S_mock.array(name_arr.length, 1000, 2000);
    var spirit_1 = 'image://./assets/img/icon-jinbi.png';
    // var spirit_2 = 'image://./assets/img/men.png';
    var maxData = Math.max.apply(null, perArr);
    var seri_data = [];
    for (const key in name_arr) {
        seri_data.push({
            value: perArr[key],
            symbol: spirit_1,
        })
    }
    var option = {
        // title: {
        //     text: '男女比例',
        //     x: 'center',
        //     top: '8%',
        //     textStyle: {
        //         fontWeight: 'normal',
        //         fontSize: getSize(0.18),
        //         color: '#fff'
        //     }
        // },
        xAxis: {
            max: maxData,
            splitLine: {
                show: false
            },
            offset: 10,
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false
            },
        },
        yAxis: {
            data: name_arr,
            inverse: true,
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#00BAFF'
                }
            },
            axisLabel: {
                // margin: 10,
                textStyle: {
                    color: '#fff',
                    fontSize: getSize(0.24)
                }
            }
        },
        grid: {
            top: '0%',
            left: '5%',
            right: '20%',
            bottom: '5%',
            containLabel: true
        },
        series: [{
                type: 'pictorialBar',
                symbolRepeat: 'fixed',
                symbolMargin: '8%',
                symbolClip: true,
                symbolSize: getSize(0.3),
                symbolBoundingData: maxData, //这个属性是『指定图形界限的值』。
                data: seri_data,
                z: 10
            },
            {
                // full data 透明区域
                type: 'pictorialBar',
                itemStyle: {
                    normal: {
                        opacity: 0
                    }
                },
                label: {
                    normal: {
                        show: true,
                        formatter: '{c} 万元',
                        position: 'right',
                        offset: [3, 5],
                        textStyle: {
                            color: '#FACC14',
                            fontSize: getSize(0.24)
                        }
                    }
                },
                animationDuration: 0,
                symbolRepeat: 'fixed',
                symbolMargin: '8%',
                symbolSize: getSize(0.3),
                symbolBoundingData: maxData,
                data: seri_data,
                z: 5
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
$(function () {
    // 进度条
    $('.progress-item').each(function () {
        var percent = $(this).attr('data-percent');
        $(this).find('p').width(percent);
    });
    $('.percent-bar').each(function () {
        var percent = $(this).attr('data-percent');
        $(this).find('p').height(percent);
    });

    var getSize = function (v) {
        var fz = $('html').css('fontSize').replace(/px/, '');
        return v * fz;
    };
    var random = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    //获取数组的和
    var getArrSum = function (arr) {
        return eval(arr.join("+"));
    };


    //左侧上方图表 
    //插件文档地址 http://www.jq22.com/jquery-info4495
    !(function () {
        var i = 0; //计数器
        var trueValue = 99.3
        $('#chart-1').radialIndicator({
            barColor: '#3196FA',
            fontColor: '#facc14',
            barWidth: 10,
            radius: 90,
            initValue: trueValue,
            roundCorner: true,
            percentage: true,
            format: function (value) {
                i = i + 1;
                if (i == 2) {
                    return trueValue; //当前数值
                }
                return trueValue.toFixed(2);
            }
        });
    })();


    //3d饼图-1
    !(function () {
        var chart = Highcharts.chart('bing-1', {
            colors: ['#1976D2', '#0559AD'],
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 40,
                    beta: 0,
                    fitToPlot: true,
                    viewDistance: 150
                },
                margin: [0, 0, 0, 0],
                backgroundColor: 'transparent'
            },
            credits: {
                enabled: false
            },
            title: {
                enabled: false,
                text: ''
            },
            tooltip: {
                enabled: false,
                pointFormat: '{series.name} <b>{point.percentage:.1f}</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    depth: 20,
                    dataLabels: {
                        enabled: false,
                        format: '{point.name}'
                    }
                }
            },
            xAxis: {
                labels: {
                    enabled: false
                }
            },
            series: [{
                type: 'pie',
                size: '110%',
                name: '',
                data: [
                    ['营商环境整体得分', 76.71],
                    ['', 23.29]
                ]
            }]
        });
    })();
    //3d饼图-2
    !(function () {
        var chart = Highcharts.chart('bing-2', {
            colors: ['#ffa800', '#00f0ff', '#3196fa'],
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0,
                    fitToPlot: true,
                },
                backgroundColor: 'transparent'
            },
            credits: {
                enabled: false
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 15,
                    dataLabels: {
                        enabled: true,
                        format: '{point.percentage:.1f}%'
                    },
                    showInLegend: true
                }
            },
            legend: {
                squareSymbol: false,
                symbolWidth: 25,
                symbolRadius: 0,
                itemStyle: {
                    color: '#ccc',
                    fontWeight: 'normal',
                    fontSize: getSize(.25)
                }
            },
            series: [{
                type: 'pie',
                name: '',
                data: [
                    ['项目1', 40],
                    ['项目2', 30],
                    ['其他', 30]
                ],
                dataLabels: {
                    enabled: true,
                    shadow: false,
                    borderWidth: 0,
                    color: '#fff'
                }
            }]
        });
    })();


    //圆形进度条
    //文档地址 https://github.com/TheBolliwood/circleChart
    !(function () {
        $("#circle-1").circleChart({
            size: 150,
            color: "#0078D2",
            backgroundColor: "#fff",
            backgroundFix: true,
            value: 60.45,
            startAngle: 180,
            text: 0,
            textSize: '.4rem',
            onDraw: function (el, circle) {
                $(".circleChart_text").css('color', '#fff')
                $(".circleChart_text", el).html((circle.value).toFixed(2) + '%');
            }
        });
    })();
    //bootstrap进度条
    $('.progress-bar').each(function () {
        var percent = $(this).attr('aria-valuenow');
        $(this).css('width', percent + '%')
    })

    //步骤条
    $('.box').step({
        stepDirection: 'x',
        showStepButton: false,
        stepCount: 5,
        stepTitles: ['标题一', '标题二', '标题三', '标题四', '标题5'],
    });
    $('.box2').step({
        stepDirection: 'y',
        showStepButton: false,
        stepCount: 3,
        stepTitles: ['标题一', '标题二', '标题三'],
    });
    $('.eis-step-icon').click(function () {
        var index = $(this).closest('.eis-form-step').index()
        console.log(index);
    })




});