/**
 * @fileoverview Sensor blocks for the nano 33 ble sense
 * @requires Blockly.Blocks
 * @author Beate + Reinhard
 */

'use strict';

goog.provide('Blockly.Blocks.robSensorDefinitionsDataAvailable');
goog.require('Blockly.Blocks');

var integrated_sensor = {};

integrated_sensor.lsm9ds1_acceleration = {};
integrated_sensor.lsm9ds1_acceleration.nano33ble = {
    params: [
        { "target": "VARIABLE_X", "unit": "MILLIG" },
        { "target": "VARIABLE_Y", "unit": "MILLIG" },
        { "target": "VARIABLE_Z", "unit": "MILLIG" }
    ]
};

integrated_sensor.lsm9ds1_gyro = {};
integrated_sensor.lsm9ds1_gyro.nano33ble = {
    params: [
        { "target": "VARIABLE_X", "unit": "DEGREE_PER_SECOND" },
        { "target": "VARIABLE_Y", "unit": "DEGREE_PER_SECOND" },
        { "target": "VARIABLE_Z", "unit": "DEGREE_PER_SECOND" }
    ]
};

integrated_sensor.lsm9ds1_magneticfield = {};
integrated_sensor.lsm9ds1_magneticfield.nano33ble = {
    params: [
        { "target": "VARIABLE_X", "unit": "GAUSS" },
        { "target": "VARIABLE_Y", "unit": "GAUSS" },
        { "target": "VARIABLE_Z", "unit": "GAUSS" }
    ]
};

integrated_sensor.apds9960_distance = {};
integrated_sensor.apds9960_distance.nano33ble = {
    params: [
        { "target": "VARIABLE_VALUE", "unit": "CM" }
    ]
};

integrated_sensor.apds9960_gesture = {};
integrated_sensor.apds9960_gesture.nano33ble = {
    params: [
        { "target": "VARIABLE_VALUE", "unit": "INDEX" }
        ]
};

integrated_sensor.apds9960_color = {};
integrated_sensor.apds9960_color.nano33ble = {
    params: [
        { "target": "VARIABLE_R", "unit": "INDEX" },
        { "target": "VARIABLE_G", "unit": "INDEX" },
        { "target": "VARIABLE_B", "unit": "INDEX" }
        ]
};

integrated_sensor.lps22hb_pressure = {};
integrated_sensor.lps22hb_pressure.nano33ble = {
    params: [
        { "target": "VARIABLE_VALUE", "unit": "PASCAL" }
        ]
};

integrated_sensor.hts221_temperature = {};
integrated_sensor.hts221_temperature.nano33ble = {
    params: [
        { "target": "VARIABLE_VALUE", "unit": "DEGREE_CELSIUS" }
        ]
};

integrated_sensor.hts221_humidity = {};
integrated_sensor.hts221_humidity.nano33ble = {
    params: [
        { "target": "VARIABLE_VALUE", "unit": "PERCENT" }
        ]
};

var integrated_sensorAll = [];
integrated_sensorAll.nano33ble = [];

function init_integrated_sensor() {
    for (var sensor in integrated_sensor) {
        if (integrated_sensor.hasOwnProperty(sensor)) {
            Blockly.Blocks['robSensors_' + sensor + '_getDataAvailableSample'] = {
                sensor: sensor,
                init: function() {
                    Blockly.Blocks['robSensorsDataAvailable_generic'].init.call(this, integrated_sensor[this.sensor][this.workspace.device], this.sensor);
                }
            };
        }
    }
};

init_integrated_sensor();