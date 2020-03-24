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
  chart_bar_7();
  chart_bar_8();
  chart_bar_9();
  chart_bar_10();

  chart_pie_1(['项目1', '项目2', '项目3', '项目4'], getRomArr(4, 100, 200));
  chart_pie_2();
  chart_pie_3();
  chart_pie_4();
  chart_pie_5();
  chart_pie_6();
  chart_pie_7();
  chart_pie_8();

  chart_gauge_1();
  chart_gauge_2();
  chart_gauge_3();

  chart_water_1();

  chart_radar_1();

  chart_other_1();
  chart_other_2();
})