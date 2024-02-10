Ext.define("nfufront1.view.main.BorrowController", {
  extend: "Ext.app.ViewController",
  alias: "controller.borrow",
  config: {
    name: "borrow_layout",
  },
  /*********初始化*********/
  initObj: function () {
    const me = this;
    try {
      console.log("初始化科系選單");
      me.departmentCmb = me.lookupReference("departmentCmb");
      me.roomCmb = me.lookupReference("roomCmb");
      me.dateCmb = me.lookupReference("dateCmb");
      me.departmentCmb.setStore(
        Ext.create("Ext.data.Store", {
          fields: ["text"],
          data: [{ text: "資管系" }, { text: "企管系" }],
        })
      );
    } catch (e) {
      me.showError("MainController/ initObj error:", e);
    }
  },
  /*********查詢*********/
  searchBtn: function () {
    const me = this;
    try {
      console.log("searchBtn的按鈕被按下了, 觸發onBorrowBtnPress事件");
      me.getView().fireEvent("onBorrowBtnPress", "這是borrowBtnPress的訊息");
    } catch (e) {
      me.showError("BorrowController/ borrowBtnPress error:", e);
    }
  },
  /*********清除*********/
  clearBtn: function () {
    const me = this;
    try {
      me.departmentCmb.setValue("");
      me.roomCmb.setValue("");
      me.dateCmb.setValue("");
    } catch (e) {
      me.showError("userController/ clearSearch error:", e);
    }
  },
  /*********教室選單*********/
  selectDepartment: function (record, nV) {
    var Combo2AStore = Ext.create("Ext.data.Store", {
      fields: ["text"],
      data: [{ text: "CMA0210" }, { text: "CMA0211" }],
    });
    var Combo2BStore = Ext.create("Ext.data.Store", {
      fields: ["text"],
      data: [{ text: "CMA0101" }, { text: "CMA0102" }],
    });
    const me = this;
    try {
      switch (record.value) {
        case "資管系":
          console.log(record.value);
          me.roomCmb.getStore().setData(Combo2AStore.getData());
          me.roomCmb.setStore(Combo2AStore);
          break;
        case "企管系":
          console.log(record.value);
          me.roomCmb.getStore().setData(Combo2BStore.getData());
          me.roomCmb.setStore(Combo2BStore);
          break;
      }
    } catch (e) {
      console.log("can't catch");
    }
  },
  getSltDate: function (record, nV) {
    console.log(record.rawValue);
  },
  selectRoom: function (record, nV) {
    console.log(record.value);
  },
});
