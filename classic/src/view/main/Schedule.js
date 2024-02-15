Ext.define("nfufront1.view.main.Schedule", {
  extend: "Ext.panel.Panel",
  requires: [
    "nfufront1.view.main.ScheduleController",
    "nfufront1.view.main.Borrow",
  ],
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
      layout: {
        type: "vbox",
        align: "middle",
      },
      style: {
        width: "100%",
        borderRadius: "0.5rem",
        backgroundColor: "lightblue",
        textAlign: "center",
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
              margin: "0 200 0 0",
              width: 250,
              height: 70,
              layout: {
                type: "vbox",
              },
              items: [
                {
                  xtype: "label",
                  text: "日期:",
                  itemId: "dateLabel",
                  margin: "10 0 10 0",
                  layout: {
                    type: "vbox",
                  },
                  listeners: {
                    onDateSlt: "receiveDateSlt",
                  },
                  style: {
                    fontSize: "18px",
                  },
                },
                {
                  xtype: "label",
                  text: "教室:",
                  itemId: "roomLabel",
                  style: {
                    fontSize: "18px",
                  },
                },
              ],
            },
            {
              xtype: "container",
              margin: "20 0 0 0",
              layout: {
                type: "hbox",
              },
              defaults: {
                xtype: "container",
                layout: "hbox",
              },
              items: [
                {
                  margin: "0 10 0 0",
                  items: [
                    {
                      xtype: "component",
                      width: 10,
                      height: 10,
                      style: {
                        backgroundColor: "blue",
                        marginRight: "2px",
                        marginTop: "3px",
                      },
                    },
                    {
                      xtype: "label",
                      text: "已選取",
                    },
                  ],
                },
                {
                  margin: "0 10 0 0",
                  items: [
                    {
                      xtype: "component",
                      width: 10,
                      height: 10,
                      style: {
                        backgroundColor: "orange",
                        marginRight: "2px",
                        marginTop: "3px",
                      },
                    },
                    {
                      xtype: "label",
                      text: "已借出",
                    },
                  ],
                },
                {
                  margin: "0 10 0 0",
                  items: [
                    {
                      xtype: "component",
                      width: 10,
                      height: 10,
                      style: {
                        backgroundColor: "white",
                        marginRight: "2px",
                        marginTop: "3px",
                      },
                    },
                    {
                      xtype: "label",
                      text: "未借出",
                    },
                  ],
                },
                {
                  items: [
                    {
                      xtype: "component",
                      width: 10,
                      height: 10,
                      style: {
                        backgroundColor: "red",
                        marginRight: "2px",
                        marginTop: "3px",
                      },
                    },
                    {
                      xtype: "label",
                      text: "已停用",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          xtype: "container",
          layout: {
            type: "hbox",
            align: "middle",
            pack: "center",
          },
          items: [
            {
              width: "40rem",
              layout: {
                type: "hbox",
                align: "middle",
                pack: "center",
              },
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
                {
                  text: "3",
                  width: 60,
                  align: "center",
                },
                {
                  text: "4",
                  width: 60,
                  align: "center",
                },
                {
                  text: "午",
                  width: 60,
                  align: "center",
                },
                {
                  text: "5",
                  width: 60,
                  align: "center",
                },
                {
                  text: "6",
                  width: 60,
                  align: "center",
                },
                {
                  text: "7",
                  width: 60,
                  align: "center",
                },
                {
                  text: "8",
                  width: 60,
                  align: "center",
                },
                {
                  text: "9",
                  width: 60,
                  align: "center",
                },
              ],
            },
          ],
        },
        {
          xtype: "container",
          layout: {
            type: "hbox",
          },
          items: [
            {
              xtype: "button",
              text: "確定",
              layout: {
                type: "hbox",
              },
              style: {
                borderRadius: "0.5rem",
                marginRight: "0.5rem",
                marginLeft: "2.5rem",
                width: "10rem",
              },
            },
            {
              xtype: "button",
              text: "返回",
              handler: "scheduleBtnPress",
              style: {
                borderRadius: "0.5rem",
                width: "10rem",
              },
            },
          ],
        },
      ],
    },
  ],
});
