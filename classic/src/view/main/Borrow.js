Ext.define("nfufront1.view.main.Borrow", {
  extend: "Ext.panel.Panel",
  requires: ["nfufront1.view.main.BorrowController"],
  alias: "widget.borrow",
  controller: "borrow",
  title: "borrow_layout",
  header: false,

  listeners: {
    afterrender: "initObj",
  },
  /*******布局******/

  layout: {
    type: "vbox",
    align: "middle",
    pack: "center",
  },
  items: [
    {
      bodyPadding: 10,
      title: "教室借用",
      style: {
        borderColor: "#5e80e5",
        borderStyle: "solid",
        borderRadius: "0.5rem",
      },

      items: [
        {
          xtype: "container",
          style: {
            borderRadius: "0.5rem",
          },
          xtype: "fieldset",
          title: "日期",
          items: [
            {
              xtype: "datefield",
              id: "borrowDate",
              reference: "dateCmb",
              format: "Y-m-d",
              listeners: {
                change: "getSltDate",
              },
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
              xtype: "fieldset",
              title: "系別",
              style: {
                borderRadius: "0.5rem",
                marginRight: "0.5rem",
              },
              items: [
                {
                  xtype: "combobox",
                  reference: "departmentCmb",
                  displayField: "text",
                  listeners: {
                    select: "selectDepartment",
                  },
                },
              ],
            },
            {
              title: "教室編號(選填)",
              xtype: "fieldset",
              style: {
                borderRadius: "0.5rem",
              },
              items: [
                {
                  xtype: "combobox",
                  reference: "roomCmb",
                  displayField: "text",
                  listeners: {
                    select: "selectRoom",
                  },
                },
              ],
            },
          ],
        },

        {
          xtype: "container",
          items: [
            {
              text: "查詢",
              xtype: "button",
              handler: "searchBtn",
              style: {
                borderRadius: "0.5rem",
                marginTop: "0.4rem",
                marginRight: "0.5rem",
                marginLeft: "2.5rem",
                width: "10rem",
              },
            },
            {
              text: "清除",
              xtype: "button",
              handler: "clearBtn",
              style: {
                borderRadius: "0.5rem",
                marginTop: "0.4rem",
                width: "10rem",
              },
            },
          ],
        },
      ],
    },
  ],
});
