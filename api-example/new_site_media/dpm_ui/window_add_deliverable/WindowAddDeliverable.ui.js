/*
 * File: WindowAddDeliverable.ui.js
 * Date: Mon Oct 18 2010 18:04:18 GMT+0100 (BST)
 * 
 * This file was generated by Ext Designer version xds-1.0.2.14.
 * http://www.extjs.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

WindowAddDeliverableUi = Ext.extend(Ext.Window, {
    title: 'Add / Edit Deliverable',
    width: 560,
    height: 437,
    modal: true,
    id: 'window_add_deliverable',
    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '15px',
                id: 'form_add_deliverable',
                items: [
                    {
                        xtype: 'textarea',
                        fieldLabel: 'Description',
                        anchor: '100%',
                        name: 'description'
                    },
                    {
                        xtype: 'textarea',
                        fieldLabel: 'Acceptance Criteria',
                        anchor: '100%',
                        name: 'acceptance_criteria'
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Deliverable Tester',
                        anchor: '100%',
                        name: 'deliverable_tester'
                    },
                    {
                        xtype: 'textarea',
                        anchor: '100%',
                        fieldLabel: 'Method',
                        name: 'testing_method'
                    },
                    {
                        xtype: 'textarea',
                        anchor: '100%',
                        fieldLabel: 'Expected Result',
                        name: 'expected_result'
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'RTO',
                        anchor: '100%',
                        name: 'rpo'
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'RTO',
                        anchor: '100%',
                        name: 'rto'
                    }
                ]
            }
        ];
        WindowAddDeliverableUi.superclass.initComponent.call(this);
    }
});
