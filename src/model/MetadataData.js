/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (function() {
  'use strict';

  var ApiClient = require('../ApiClient'),
      MetadataCollection = require('./MetadataCollection'),
      MetadataMetadata = require('./MetadataMetadata'),
      MetadataObject = require('./MetadataObject');



  /**
   * The MetadataData model module.
   * @module model/MetadataData
   * @version 0.2.6
   */

   /**
    * Constructs a <code>MetadataData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MetadataData} obj Optional instance to populate.
    * @return {module:model/MetadataData} The populated <code>MetadataData</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], [MetadataMetadata]);
      }
      if (data.hasOwnProperty('objects')) {
        obj['objects'] = ApiClient.convertToType(data['objects'], [MetadataObject]);
      }
      if (data.hasOwnProperty('collection')) {
        obj['collection'] = ApiClient.convertToType(data['collection'], [MetadataCollection]);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>MetadataData</code>.
   * 
   * @alias module:model/MetadataData
   * @class
   * @param type {String} 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetadataData} obj Optional instance to populate.
   */
  var exports = function(type, theData, obj) {
    var _this = this;

    _this['type'] = type;




    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>MetadataData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetadataData} obj Optional instance to populate.
   * @return {module:model/MetadataData} The populated <code>MetadataData</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * @member {String} type
   * @default 'metadata'
   */
  exports.prototype['type'] = 'metadata';
  /**
   * @member {Array.<module:model/MetadataMetadata>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * Collection of “objects”
   * @member {Array.<module:model/MetadataObject>} objects
   */
  exports.prototype['objects'] = undefined;
  /**
   * Array of objects with their “properties” as a non-hierarchical list.
   * @member {Array.<module:model/MetadataCollection>} collection
   */
  exports.prototype['collection'] = undefined;



  return exports;
}());


