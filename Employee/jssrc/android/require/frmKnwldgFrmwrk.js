define("frmKnwldgFrmwrk", function() {
    return function(controller) {
        function addWidgetsfrmKnwldgFrmwrk() {
            this.setDefaultUnit(kony.flex.DP);
            var knowledgeframework = new com.konymp.knowledgeframework({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "knowledgeframework",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "konympkonympslFbox5",
                "top": "0%",
                "width": "100%",
                "zIndex": 50
            }, {}, {});
            this.add(knowledgeframework);
        };
        return [{
            "addWidgets": addWidgetsfrmKnwldgFrmwrk,
            "enabledForIdleTimeout": false,
            "id": "frmKnwldgFrmwrk",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_c17533d709cc44b5b5de009a1ca0ae55,
            "skin": "sknFrmBlue"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});