var ZZ_NAME = "sd";

// 监听下拉框
$("#name").change(function (e) {
  let val = $(this).val();
  create_member(val);
  ZZ_NAME = val;
  // ZZ_NAME = NAME_MAP[val]
});

// 添加一行按钮点击
$(document).on("click", ".add_line", function () {
  let node = `
  <div class="item">
    <div class="left"><input type="text" placeholder="请输入项目名称"></div>
    <div class="right"><input type="text" placeholder="请输入任务数量"><span class="add_line">添加一行</span><span class="del">删除</span></div>
  </div>
  `;
  $(".task .list").append(node);
});

// 删除按钮点击
$("body").on("click", ".del", function () {
  $(this).parents(".item").remove();
});

create_member("sd");
//渲染成员列表
function create_member(idx) {
  let data = MEMBER_DATA[idx];
  let list = "";
  data.forEach((e) => {
    list += `
        <div class="item">
          <div class="name">${e}</div>
          <div class="content">
            <textarea name="" cols="30" rows="10"></textarea>
          </div>
        </div>
    `;
  });
  $(".member .list").empty().append(list);
}

//导出按钮点击
$(".submit").click(function () {
  let data_obj = {
    zz_name: ZZ_NAME,
    task: [],
    member: [],
  };
  // $(".task .list .item").each(function (i, e) {
  //   data_obj.task.push({
  //     name: $(e).find(".left input").val(),
  //     num: $(e).find(".right input").val(),
  //   });
  // });
  var taskText = $("#taskTotal").val();
  var taskArr = taskText.split("\n");
  console.log(taskArr);
  taskArr.forEach(function (d, index) {
    if (d.indexOf("：") > -1) {
      var dSplit = d.split("：");
      data_obj.task.push({
        name: dSplit[0],
        num: dSplit[1].split("个")[0],
      });
    }
  });
  $(".member .list .item").each(function (i, e) {
    data_obj.member.push({
      name: $(e).find(".name").text(),
      content: $(e).find("textarea").val().replace(/\r\n/g, "<br/>"),
      // content: $(e).find('textarea').val(),
    });
  });
  let file_name = `${ZZ_NAME}_${getTime()}.json`;
  // let file_name=`${ZZ_NAME}组周任务统计${getTime()}.json`;
  console.log("file_name", file_name);
  saveJSON(data_obj, file_name);
});

function saveJSON(data, filename) {
  if (!data) {
    alert("保存的数据为空");
    return;
  }
  if (!filename) filename = "json.json";
  if (typeof data === "object") {
    data = JSON.stringify(data, undefined, 4);
  }
  var blob = new Blob([data], {
      type: "text/json",
    }),
    e = document.createEvent("MouseEvents"),
    a = document.createElement("a");
  a.download = filename;
  a.href = window.URL.createObjectURL(blob);
  a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
  e.initMouseEvent(
    "click",
    true,
    false,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  a.dispatchEvent(e);
}

function getTime() {
  var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    weekArry = [
      "星期天",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
    ],
    hour = hour < 10 ? "0" + hour : hour,
    month = month < 10 ? "0" + month : month,
    day = day < 10 ? "0" + day : day,
    minute = minute < 10 ? "0" + minute : minute,
    second = second < 10 ? "0" + second : second,
    timeStr = hour + ":" + minute + ":" + second,
    weekStr = weekArry[date.getDay()],
    dateStr = year + "/" + month + "/" + day;
  // this.ele.html(dateStr + '    ' + weekStr + '    ' + hour + ':' + minute + ':' + second);
  //this.ele2.html(year + '年' + month + '月' + day+'日 ('+weekStr+') '+hour + ':' + minute + ':' + second);
  return dateStr;
}
