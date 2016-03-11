require('jquery');
require('node_modules/angular/angular');
module.exports = window.angular;

require('node_modules/angular-elastic/elastic');
require('node_modules/angular-translate/dist/angular-translate');

require('ui/modules').get('kibana', ['monospaced.elastic']);
