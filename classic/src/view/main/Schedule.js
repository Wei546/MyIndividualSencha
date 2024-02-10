Ext.define("nfufront1.view.main.Schedule", {
  extend: "Ext.panel.Panel",
  requires: ["nfufront1.view.main.ScheduleController"],
  alias: "widget.schedule",
  controller: "schedule",
  title: "Schedule Page",
  header: false,
  layout: {
    type: "vbox",
    align: "middle",
    pack: "center",
  },
  items: [
    {
      xtype: "fieldset",
      title: "教室借用",
      width: "80%",
      height: "100%",
      style: {
        width: "100%",

        borderRadius: "0.5rem",
      },
      items: [
        {
          xtype: "container",
          layout: {
            type: "hbox",
          },
          items: [
            {
              xtype: "container",
              layout: "vbox",
              items: [
                {
                  xtype: "label",
                  text: "時間：",
                },
                {
                  xtype: "label",
                  text: "教室：",
                },
              ],
            },
            {
              xtype: "container",
              items: [
                {
                  xtype: "label",
                  text: "已選取",
                },
                {
                  xtype: "label",
                  text: "已借出",
                },
                {
                  xtype: "label",
                  text: "未借出",
                },
                {
                  xtype: "label",
                  text: "已停用",
                },
              ],
            },
          ],
        },
        {
          xtype: "container",
          items: [
            {
              xtype: "gridpanel",
              columns: [
                {
                  text: "教室編號",
                  width: 100,
                  align: "center",
                },
                {
                  text: "1",
                  width: 60,
                  align: "center",
                },
                {
                  text: "2",
                  width: 60,
                  align: "center",
                },
              ],
            },
          ],
        },
        {
          xtype: "container",
          items: [
            {
              xtype: "button",
              text: "確定",
            },
            {
              xtype: "button",
              text: "返回",
              handler: "scheduleBtnPress",
            },
          ],
        },
      ],
    },
  ],
});
