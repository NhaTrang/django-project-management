/*
 * File: StoreRiskStatus.js
 * Date: Thu Oct 21 2010 16:06:58 GMT+0100 (BST)
 * 
 * This file was generated by Ext Designer version xds-1.0.2.14.
 * http://www.extjs.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

StoreRiskStatus = Ext.extend(Ext.data.ArrayStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        StoreRiskStatus.superclass.constructor.call(this, Ext.apply({
            storeId: 'st_risk_status',
            data: [
                [
                    1,
                    "Closed"
                ],
                [
                    2,
                    "Reducing"
                ],
                [
                    3,
                    "Increasing"
                ],
                [
                    4,
                    "No Change"
                ]
            ],
            fields: [
                {
                    name: 'id'
                },
                {
                    name: 'data'
                }
            ]
        }, cfg));
    }
});
new StoreRiskStatus();