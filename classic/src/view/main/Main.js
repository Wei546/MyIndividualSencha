Ext.define("nfufront1.view.main.Main", {
  extend: "Ext.panel.Panel",
  requires: [
    "nfufront1.view.main.MainController",
    "nfufront1.view.main.Borrow",
    "nfufront1.view.main.Schedule",
    "nfufront1.view.main.MyCase",
  ],
  alias: "widget.main",
  controller: "main",
  title: "card_layout_main",
  header: false,
  layout: "card",
  /**********初始化事件***************/
  listeners: {
    afterrender: "initObj",
  },
  /**********借用教室篩選視窗***********/
  /*********跳轉按鈕***********/
  dockedItems: [
    {
      xtype: "panel",
      layout: "hbox",
      dock: "top",
      items: [
        {
          xtype: "button",
          text: "顯示篩選畫面",
          handler: "showBorrow",
        },
        {
          xtype: "button",
          text: "顯示日期表畫面",
          handler: "showSchedule",
        },
        {
          xtype: "button",
          text: "顯示我的案件畫面",
          handler: "showMyCase",
        },
      ],
    },
  ],
  items: [
    {
      xtype: "borrow",
      reference: "card_borrow",
      listeners: {
        onBorrowBtnPress: "receiveBorrowBtn",
      },
    },
    {
      xtype: "schedule",
      reference: "card_schedule",
      listeners: {
        onScheduleBtnPress: "receiveScheduleBtn",
      },
    },
    {
      xtype: "mycase",
      reference: "card_mycase",
    },
  ],
});
