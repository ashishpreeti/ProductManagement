'use strict';

angular.module('productManagement.version', [
  'productManagement.version.interpolate-filter',
  'productManagement.version.version-directive'
])

.value('version', '0.1');
