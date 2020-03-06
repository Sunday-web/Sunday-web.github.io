    //url请求头
    var baseUrl = 'http://192.168.3.82:8003';
    // 地区code
    var areaCode = 'JD_YQ';
    // 指标值类型数据请求地址
    var countSrc = "/public/risen/oa/collector/count";
    // 图表类型数据请求地址
    var chartsSrc = "/public/risen/oa/collector/charts";
    // 目录类型数据请求地址
    var catalogSrc = "/public/risen/oa/collector/cataLog";
    //rem字体大小
    var getSize = function (v) {
      var fz = $('html').css('fontSize').replace(/px/, '');
      return v * fz;
    };
    //获取随机数
    var random = function (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    //获取指定长度的随机数组 模拟数据
    var getRomArr = function (number, min, max) {
      var arr = [];
      for (let index = 1; index <= number; index++) {
        arr.push(random(min, max))
      }
      return arr;
    }
    //获取数组的和
    var getArrSum = function (arr) {
      return eval(arr.join("+"));
    };
    //通用ajax请求
    var defaultAjaxAsync = function (url, reqData, susccess, async) {
      console.log(reqData)
      $.ajax({
        type: 'post',
        url: baseUrl + url,
        data: reqData,
        contentType: "application/json; charset=utf-8",
        dataType: 'json', //json  text
        async: async,
        success: susccess
      });
    }
    //通用指标值填充
    var fillData = function (code, value) {
      $('.fillData[index=' + code + ']').html(value);
    }