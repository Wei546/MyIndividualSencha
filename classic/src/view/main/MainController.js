Ext.define("nfufront1.view.main.MainController", {
  extend: "Ext.app.ViewController",
  alias: "controller.main",
  config: {
    name: "card_layout_main",
  },

  /********初始化事件********/
  initObj: function () {
    const me = this;
    try {
      me.viewBorrow = me.lookupReference("card_borrow");
      me.viewSchedule = me.lookupReference("card_schedule");
      me.viewMyCase = me.lookupReference("card_mycase");
    } catch (e) {
      me.showError("MainController/ initObj error:", e);
    }
  },
  /*******Borrow主按鈕********/
  showBorrow: function () {
    const me = this;
    try {
      console.log(`顯示篩選頁面 `);
      me.getView().setActiveItem(me.viewBorrow);
    } catch (e) {
      me.showError("MainController/ showBorrow error:", e);
    }
  },

  /*******Schedule主按鈕********/
  showSchedule: function () {
    const me = this;
    try {
      console.log(`顯示日期表頁面`);

      me.getView().setActiveItem(me.viewSchedule);
    } catch (e) {
      me.showError("MainController/ showSchedule error:", e);
    }
  },
  /*******ShowMyCase主按鈕********/
  showMyCase: function () {
    const me = this;
    try {
      console.log(`顯示我的案件頁面`);

      me.getView().setActiveItem(me.viewMyCase);
    } catch (e) {
      me.showError("MainController/ showMyCase error:", e);
    }
  },
  /*******進入Schedule.js********/

  receiveBorrowBtn: function () {
    const me = this;
    try {
      console.log(`收到searchBtn的按鈕事件`);

      me.getView().setActiveItem(me.viewSchedule);
    } catch (e) {
      me.showError("MainController/ receiveBorrowBtn error:", e);
    }
  },
  /*******返回Borrow.js********/
  receiveScheduleBtn: function () {
    const me = this;
    try {
      console.log(`收到ScheduleBtn的按鈕事件`);

      me.getView().setActiveItem(me.viewBorrow);
    } catch (e) {
      me.showError("MainController/  receiveScheduleBtn error:", e);
    }
  },
});
