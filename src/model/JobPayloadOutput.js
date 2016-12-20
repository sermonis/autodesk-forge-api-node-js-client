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
      JobPayloadItem = require('./JobPayloadItem');



  /**
   * The JobPayloadOutput model module.
   * @module model/JobPayloadOutput
   * @version 0.2.6
   */

   /**
    * Constructs a <code>JobPayloadOutput</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JobPayloadOutput} obj Optional instance to populate.
    * @return {module:model/JobPayloadOutput} The populated <code>JobPayloadOutput</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('formats')) {
        obj['formats'] = ApiClient.convertToType(data['formats'], [JobPayloadItem]);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>JobPayloadOutput</code>.
   * Group of outputs
   * @alias module:model/JobPayloadOutput
   * @class
   * @param formats {Array.<module:model/JobPayloadItem>} Group of requested formats/types. User can request multiple formats.
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobPayloadOutput} obj Optional instance to populate.
   */
  var exports = function(formats, theData, obj) {
    var _this = this;

    _this['formats'] = formats;

    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>JobPayloadOutput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobPayloadOutput} obj Optional instance to populate.
   * @return {module:model/JobPayloadOutput} The populated <code>JobPayloadOutput</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * Group of requested formats/types. User can request multiple formats.
   * @member {Array.<module:model/JobPayloadItem>} formats
   */
  exports.prototype['formats'] = undefined;



  return exports;
}());


