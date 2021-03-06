/*
 * File: WindowAddRisk.ui.js
 * Date: Thu Oct 21 2010 16:06:58 GMT+0100 (BST)
 * 
 * This file was generated by Ext Designer version xds-1.0.2.14.
 * http://www.extjs.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

WindowAddRiskUi = Ext.extend(Ext.Window, {
    title: 'Add / Edit Risk',
    width: 560,
    height: 437,
    modal: true,
    id: 'window_add_risk',
    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '15px',
                id: 'form_add_risk',
                items: [
                    {
                        xtype: 'textarea',
                        fieldLabel: 'Description',
                        anchor: '100%',
                        name: 'description'
                    },
                    {
                        xtype: 'combo',
                        fieldLabel: 'Owner',
                        anchor: '100%',
                        name: 'owner',
                        triggerAction: 'all',
                        mode: 'local',
                        displayField: 'data',
                        valueField: 'id',
                        store: 'st_resources',
                        hiddenName: 'owner'
                    },
                    {
                        xtype: 'sliderfield',
                        value: 48,
                        fieldLabel: 'Probability',
                        anchor: '100%',
                        name: 'probability',
                        minValue: 1,
                        maxValue: 4,
                        id: 'probability'
                    },
                    {
                        xtype: 'sliderfield',
                        value: 40,
                        fieldLabel: 'Impact',
                        anchor: '100%',
                        name: 'impact',
                        minValue: 1,
                        maxValue: 4,
                        id: 'impact'
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Rating',
                        anchor: '100%',
                        name: 'rating',
                        readOnly: true,
                        id: 'rating'
                    },
                    {
                        xtype: 'combo',
                        fieldLabel: 'Counter Measure',
                        anchor: '100%',
                        name: 'counter_measure',
                        store: 'st_counter',
                        mode: 'local',
                        triggerAction: 'all',
                        valueField: 'id',
                        displayField: 'data',
                        hiddenName: 'counter_measure'
                    },
                    {
                        xtype: 'combo',
                        fieldLabel: 'Status',
                        anchor: '100%',
                        name: 'status',
                        store: 'st_risk_status',
                        triggerAction: 'all',
                        mode: 'local',
                        valueField: 'id',
                        displayField: 'data',
                        hiddenName: 'status'
                    },
                    {
                        xtype: 'textarea',
                        anchor: '100%',
                        fieldLabel: 'Update',
                        name: 'update'
                    },
                    {
                        xtype: 'textarea',
                        anchor: '100%',
                        fieldLabel: 'History',
                        name: 'history',
                        readOnly: true
                    }
                ]
            }
        ];
        WindowAddRiskUi.superclass.initComponent.call(this);
    }
});
