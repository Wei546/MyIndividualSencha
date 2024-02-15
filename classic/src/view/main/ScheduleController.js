Ext.define("nfufront1.view.main.ScheduleController", {
  extend: "Ext.app.ViewController",
  alias: "controller.schedule",

  config: {
    name: "Schedule Page",
  },

  scheduleBtnPress: function () {
    const me = this;
    try {
      console.log("Schedule的按鈕被按下了, 觸發onScheduleBtnPress事件");
      me.getView().fireEvent(
        "onScheduleBtnPress",
        "這是scheduleBtnPress的訊息"
      );
    } catch (e) {
      me.showError("ScheduleController/ scheduleBtnPress error:", e);
    }
  },
  receiveDateSlt: function (dateSlt) {
    const me = this;
    try {
      const label = Ext.getCmp("dateLabel");
      label.setText("日期:" + dateSlt);
      console.log("Here is receiveDateSlt");
    } catch (e) {
      me.showError("ScheduleController/ receiveDateSlt error:", e);
    }
  },
});
