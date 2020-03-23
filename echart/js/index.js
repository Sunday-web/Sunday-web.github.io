$(function () {
  chart_line_1(S_mock.xdata(2015, 2019, '年'), getRomArr(5, 100, 200));
  chart_line_2();
  chart_line_3();
  chart_line_4();
  chart_line_5();
  chart_line_6();

  chart_bar_1();
  chart_bar_2();
  chart_bar_3();
  chart_bar_4();
  chart_bar_5();
  chart_bar_6();
  chart_pie_1(['项目1', '项目2', '项目3', '项目4'], getRomArr(4, 100, 200));
})