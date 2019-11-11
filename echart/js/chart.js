/*
 * @Description: {首页} 
 * @Author: zhuoyan 
 * @Date: 2019-09-26 10:51:22 
 */

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
        }


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
    //折线图-1
    !(function () {
        var mychart = echarts.init(document.getElementById('line-1'));
        var dataArr = [100, 200, 250, 300, 350];
        var xArr = ['2015', '2016', '2017', '2018', '2019']
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
    })();

    //折线图-2
    !(function () {
        var mychart = echarts.init(document.getElementById('line-2'));
        var dataArr = [1, 2, 3, 4, 5];
        var xArr = ['2014', '2015', '2016', '2017', '2018']
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
                show: false,
                text: '林地面积',
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
    })();

    //折线图-3
    !(function () {
        // 初始化实例
        var myChart = echarts.init(document.getElementById('line-3'));
        var Xdata = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
        var Ydata = [10, 20, 30, 40, 50, 40, 30, 20, 10, 20, 30, 40];
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
                                color: '#115482'
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
    })();

    //折线图-4
        !(function () {
        var colorArr = ['#00E0FF', '#00E65A', '#EF4864'];
        var mychart = echarts.init(document.getElementById('line-4'));
        var option = {
            color: colorArr,
            title: {
                show: false,
                text: '水质变化情况'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['图例1', '图例2', '图例3']
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
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        fontSize: getSize(0.24),
                        color: '#cccccc',
                    },
                },
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '102月', '11月', '12月']
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
                splitNumber: 3,
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
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        fontSize: getSize(0.24),
                        color: '#cccccc',
                    },
                },
            },
            legend: {
                data: ["图例1", "图例2", "图例3"],
                textStyle: {
                    color: '#fff'
                },
                icon: "roundRect", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
                itemWidth: 10, // 设置宽度
                itemHeight: 10, // 设置高度
                itemGap: 0 // 设置间距
            },
            series: [{
                    name: '图例1',
                    type: 'line',
                    stack: '总量',
                    data: [1.3, 1.5, 1.3, 1.5, 1.3, 1.5, 1.3, 1.5, 1.3, 1.5, 1.3, 1.5, ]
                },
                {
                    name: '图例2',
                    type: 'line',
                    stack: '总量',
                    data: [0.9, 1, 0.9, 1, 0.9, 1, 0.9, 1, 0.9, 1, 0.9, 1]
                },
                {
                    name: '图例3',
                    type: 'line',
                    stack: '总量',
                    data: [0.8, 1.1, 0.8, 1.1, 0.8, 1.1, 0.8, 1.1, 0.8, 1.1, 0.8, 1.1]
                }
            ]
        };
        mychart.setOption(option);
    })();




});