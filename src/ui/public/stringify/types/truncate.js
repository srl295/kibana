import _ from 'lodash';
import IndexPatternsFieldFormatProvider from 'ui/index_patterns/_field_format/FieldFormat';
export default function TruncateFormatProvider(Private) {
  var FieldFormat = Private(IndexPatternsFieldFormatProvider);
  var omission = '...';

  _.class(Truncate).inherits(FieldFormat);

  function Truncate(params) {
    Truncate.Super.call(this, params);
  }

  Truncate.id = 'truncate';
  Truncate.title = 'Truncated String';
  Truncate.fieldType = ['string'];

  Truncate.prototype._convert = function (val) {
    var length = this.param('fieldLength');
    if (length > 0) {
      return _.trunc(val, {
        'length': length + omission.length,
        'omission': omission
      });
    }

    return val;
  };

  Truncate.editor = require('ui/stringify/editors/truncate.html');

  Truncate.sampleInput = [ require('ui/stringify/samples/large.html') ];

  return Truncate;
};
