'use strict';

/**
 * driver-license service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::driver-license.driver-license');
