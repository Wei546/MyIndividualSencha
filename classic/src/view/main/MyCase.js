Ext.define("nfufront1.view.main.MyCase", {
  extend: "Ext.panel.Panel",
  requires: ["nfufront1.view.main.MyCaseController"],
  alias: "widget.mycase",
  controller: "mycase",
  title: "MyCase Page",
  header: false,

  layout: {
    type: "vbox",
    align: "middle",
    pack: "top",
  },
  items: [
    {
      layout: {
        type: "hbox",
      },
      xtype: "fieldset",
      style: {
        borderRadius: "0.5rem",
      },
      items: [
        { xtype: "combobox", title: "教室編號" },
        { xtype: "combobox", title: "日期" },
        { xtype: "combobox", title: "時間" },
        { xtype: "combobox", title: "審核狀態" },
        { xtype: "combobox", title: "鑰匙狀態" },
        { xtype: "button", text: "查詢" },
      ],
    },
    {
      xtype: "gridpanel",
      columns: [
        {
          dataIndex: "code",
          text: "編號",
          width: 110,
          align: "center",
        },
        {
          dataIndex: "code",
          text: "教室編號",
          width: 110,
          align: "center",
        },
        {
          dataIndex: "code",
          text: "借用日期",
          width: 110,
          align: "center",
        },
        {
          dataIndex: "code",
          text: "起訖時間",
          width: 110,
          align: "center",
        },
        {
          dataIndex: "code",
          text: "事由",
          width: 110,
          align: "center",
        },
        {
          dataIndex: "code",
          text: "審核狀態",
          width: 110,
          align: "center",
        },
        {
          dataIndex: "code",
          text: "鑰匙狀態",
          width: 110,
          align: "center",
        },
        {
          dataIndex: "code",
          text: "審核人員",
          width: 110,
          align: "center",
        },
      ],
    },
  ],
});
