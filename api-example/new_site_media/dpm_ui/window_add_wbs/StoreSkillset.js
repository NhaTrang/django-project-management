/*
 * File: StoreSkillset.js
 * Date: Thu Oct 21 2010 17:45:15 GMT+0100 (BST)
 * 
 * This file was generated by Ext Designer version xds-1.0.2.14.
 * http://www.extjs.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

StoreSkillset = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        StoreSkillset.superclass.constructor.call(this, Ext.apply({
            storeId: 'st_skillset',
            root: 'data',
            url: '/api/skillsets/?format=ext-json',
            autoLoad: true,
            fields: [
                {
                    name: 'id',
                    mapping: 'id'
                },
                {
                    name: 'skillset',
                    mapping: 'skillset'
                }
            ]
        }, cfg));
    }
});
new StoreSkillset();