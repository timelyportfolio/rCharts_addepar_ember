window.App = Ember.Application.create({
  customEvents: {
    blur: 'blur'
  }
});

App.BarTableCell = Ember.Table.TableCell.extend({
  templateName: 'bar_table',
  classNameBindings: ['column.color'],
  barWidth: Ember.computed(function() {
    var column, row, _ref;
    _ref = this.getProperties('column', 'row'), column = _ref.column, row = _ref.row;
    if (!(column && row)) {
      return 0;
    }
    return Math.round(+this.get('cellContent'));
  }).property('column', 'row', 'cellContent'),
  histogramStyle: Ember.computed(function() {
    return "width: " + (this.get('barWidth')) + "%;";
  }).property('barWidth')
});



App.ApplicationController = Ember.Controller.extend({
  numRows: 100,
  columns: Ember.computed(function() {
    var colors, column1, columns;
    colors = ['blue', 'teal', 'green', 'yellow', 'orange'];
    column1 = Ember.Table.ColumnDefinition.create({
      columnWidth: 50,
      headerCellName: 'Name',
      contentPath: 'key'
    });
    columns = [1, 2, 3, 4, 5].map(function(number, index) {
      return Ember.Table.ColumnDefinition.create({
        color: colors[index],
        headerCellName: 'Bar',
        tableCellViewClass: 'App.BarTableCell',
        contentPath: "value" + number
      });
    });
    columns.unshift(column1);
    return columns;
  }),
  content: Ember.computed(function() {
    var _i, _ref, _results;
    return (function() {
      _results = [];
      for (var _i = 0, _ref = this.get('numRows'); 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this).map(function(num, index) {
      return {
        key: index,
        value1: Math.random() * 80 + 10,
        value2: Math.random() * 80 + 10,
        value3: Math.random() * 80 + 10,
        value4: Math.random() * 80 + 10,
        value5: Math.random() * 80 + 10
      };
    });
  }).property('numRows')
});
