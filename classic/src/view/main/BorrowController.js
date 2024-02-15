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
      me.Combo2AStore = Ext.create("Ext.data.Store", {
        fields: ["text"],
        data: [{ text: "CMA0210" }, { text: "CMA0211" }],
      });
      me.Combo2BStore = Ext.create("Ext.data.Store", {
        fields: ["text"],
        data: [{ text: "CMA0101" }, { text: "CMA0102" }],
      });
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
      if (me.dateCmb.rawValue == "" && me.departmentCmb.rawValue == "") {
        Ext.Msg.alert("提示訊息", "請選擇日期及系所");
      } else if (me.departmentCmb.rawValue == "") {
        Ext.Msg.alert("提示訊息", "請選擇系所");
      } else if (me.dateCmb.rawValue == "") {
        Ext.Msg.alert("提示訊息", "請選擇日期");
      } else {
        console.log("searchBtn的按鈕被按下了, 觸發onBorrowBtnPress事件");
        me.getView().fireEvent("onBorrowBtnPress", "這是borrowBtnPress的訊息");
      }
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
      console.log("清除篩選條件");
    } catch (e) {
      me.showError("BorrowController/ clearSearch error:", e);
    }
  },
  /*********教室選單*********/
  selectDepartment: function (record, nV) {
    const me = this;
    try {
      switch (record.value) {
        case "資管系":
          console.log(record.value);
          me.roomCmb.getStore().setData(me.Combo2AStore.getData());
          me.roomCmb.setStore(me.Combo2AStore);
          break;
        case "企管系":
          console.log(record.value);
          me.roomCmb.getStore().setData(me.Combo2BStore.getData());
          me.roomCmb.setStore(me.Combo2BStore);
          break;
      }
    } catch (e) {
      console.log("BorrowController/ clearSearch error:", e);
    }
  },
  getSltDate: function (field, value) {
    const me = this;
    try {
      var dateSlt = field.rawValue;
      console.log(me.fireEvent("onDateSlt", dateSlt));
      me.fireEvent("onDateSlt", dateSlt);
      console.log(dateSlt);
    } catch (e) {
      me.showError("BorrowController/getSltDate ", e);
    }
  },
  selectRoom: function (record, nV) {
    console.log(record.value);
  },
});
