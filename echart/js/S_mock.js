/*
js模拟数据 通用插件 by:Sunday 2020-03-18
随机数字
随机数组 （可排序）
调用示例
S_mock.number();
S_mock.number(100,200,true); 随机数字 开启小数点
S_mock.array(5,100,200); 随机数组
S_mock.array(5,100,200,true,1); 降序数组 开启小数点
S_mock.array(5,100,200,false,2); 升序数组 关闭小数点
S_mock.xdata(1,12,'月'); 生成1-12月份的数组
*/
var random = function (min, max, point) {
  if (point) {
    return Math.floor(Math.random() * (max - min)) + min + Number(Math.random().toFixed(2));
  } else {
    return Math.floor(Math.random() * (max - min)) + min;
  }
};
var S_mock = {
  number: function (min, max,point) {
    return random(min || 10, max || 20,point)
  },
  array: function (number, min, max, point,sort) {
    var arr = [];
    for (let index = 1; index <= number; index++) {
      arr.push(random(min, max,point))
    }
    if (sort == 1) {
      return arr.sort(function (a, b) {
        return b - a
      });
    } else if (sort == 2) {
      return arr.sort(function (a, b) {
        return a - b
      });
    } else {
      return arr;
    }
  },
  xdata:function (start,end,str) {
    let arr=[];
    for (let index = start; index <= end; index++) {
       arr.push(index+str)
    }
    return arr;
  }
}