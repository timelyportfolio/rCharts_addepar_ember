// copied most from Addepar
// this was probably most helpful
// http://jsbin.com/eVOgUrE/3/edit as one simpler example than the addepar maze


window.App = Ember.Application.create({
  customEvents: {
    blur: 'blur'
  }
});

App.ApplicationController = Ember.Controller.extend({
  columns: Ember.computed(function() {
    var closeColumn, dateColumn, highColumn, lowColumn, openColumn;
    dateColumn = Ember.Table.ColumnDefinition.create({
      columnWidth: 150,
      textAlign: 'text-align-left',
      headerCellName: 'Date',
      getCellContent: function(row) {
        return new Date(row['Date'] * 24 * 60 * 60 * 1000).toDateString();
      }
    });
    openColumn = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Open',
      getCellContent: function(row) {
        return row['Open'].toFixed(2);
      }
    });
    highColumn = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'High',
      getCellContent: function(row) {
        return row['High'].toFixed(2);
      }
    });
    lowColumn = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Low',
      getCellContent: function(row) {
        return row['Low'].toFixed(2);
      }
    });
    closeColumn = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Close',
      getCellContent: function(row) {
        return row['Close'].toFixed(2);
      }
    });
    return [dateColumn, openColumn, highColumn, lowColumn, closeColumn];
  }),
  content: [{"Date":13662,"Open":1515.55,"High":1521.8,"Low":1512.02,"Close":1518.11,"Volume":2571790000,"Adj. Close":1518.11},{"Date":13663,"Open":1517.6,"High":1530.23,"Low":1510.06,"Close":1530.23,"Volume":2980210000,"Adj. Close":1530.23},{"Date":13664,"Open":1530.19,"High":1535.56,"Low":1528.26,"Close":1530.62,"Volume":3335530000,"Adj. Close":1530.62},{"Date":13665,"Open":1530.62,"High":1540.56,"Low":1530.62,"Close":1536.34,"Volume":2927020000,"Adj. Close":1536.34},{"Date":13668,"Open":1536.28,"High":1540.53,"Low":1532.31,"Close":1539.18,"Volume":2738930000,"Adj. Close":1539.18},{"Date":13669,"Open":1539.12,"High":1539.12,"Low":1525.62,"Close":1530.95,"Volume":2939450000,"Adj. Close":1530.95},{"Date":13670,"Open":1530.57,"High":1530.57,"Low":1514.13,"Close":1517.38,"Volume":2964190000,"Adj. Close":1517.38},{"Date":13671,"Open":1517.36,"High":1517.36,"Low":1490.37,"Close":1490.72,"Volume":3538470000,"Adj. Close":1490.72},{"Date":13672,"Open":1490.71,"High":1507.76,"Low":1487.41,"Close":1507.67,"Volume":2993460000,"Adj. Close":1507.67},{"Date":13675,"Open":1507.64,"High":1515.53,"Low":1503.35,"Close":1509.12,"Volume":2525280000,"Adj. Close":1509.12},{"Date":13676,"Open":1509.12,"High":1511.33,"Low":1492.97,"Close":1493,"Volume":3056200000,"Adj. Close":1493},{"Date":13677,"Open":1492.65,"High":1515.7,"Low":1492.65,"Close":1515.67,"Volume":3077930000,"Adj. Close":1515.67},{"Date":13678,"Open":1515.58,"High":1526.45,"Low":1515.58,"Close":1522.97,"Volume":2813630000,"Adj. Close":1522.97},{"Date":13679,"Open":1522.97,"High":1538.71,"Low":1522.97,"Close":1532.91,"Volume":3406030000,"Adj. Close":1532.91},{"Date":13682,"Open":1532.9,"High":1535.44,"Low":1529.31,"Close":1531.05,"Volume":2480240000,"Adj. Close":1531.05},{"Date":13683,"Open":1531.02,"High":1535.85,"Low":1525.67,"Close":1533.7,"Volume":2873590000,"Adj. Close":1533.7},{"Date":13684,"Open":1533.68,"High":1537.32,"Low":1512.36,"Close":1512.84,"Volume":3286900000,"Adj. Close":1512.84},{"Date":13685,"Open":1512.5,"High":1522.9,"Low":1504.75,"Close":1522.19,"Volume":3161110000,"Adj. Close":1522.19},{"Date":13686,"Open":1522.19,"High":1522.19,"Low":1500.74,"Close":1502.56,"Volume":4284320000,"Adj. Close":1502.56},{"Date":13689,"Open":1502.56,"High":1514.29,"Low":1492.68,"Close":1497.74,"Volume":3287250000,"Adj. Close":1497.74},{"Date":13690,"Open":1497.68,"High":1506.12,"Low":1490.54,"Close":1492.89,"Volume":3398530000,"Adj. Close":1492.89},{"Date":13691,"Open":1492.62,"High":1506.8,"Low":1484.18,"Close":1506.34,"Volume":3398150000,"Adj. Close":1506.34},{"Date":13692,"Open":1506.32,"High":1514.84,"Low":1503.41,"Close":1505.71,"Volume":3006710000,"Adj. Close":1505.71},{"Date":13693,"Open":1505.7,"High":1517.53,"Low":1493.61,"Close":1503.35,"Volume":3165410000,"Adj. Close":1503.35},{"Date":13696,"Open":1504.66,"High":1519.45,"Low":1504.66,"Close":1519.43,"Volume":2644990000,"Adj. Close":1519.43},{"Date":13697,"Open":1519.12,"High":1526.01,"Low":1519.12,"Close":1524.87,"Volume":1560790000,"Adj. Close":1524.87},{"Date":13699,"Open":1524.86,"High":1526.57,"Low":1517.72,"Close":1525.4,"Volume":2622950000,"Adj. Close":1525.4},{"Date":13700,"Open":1524.96,"High":1532.4,"Low":1520.47,"Close":1530.44,"Volume":2441520000,"Adj. Close":1530.44},{"Date":13703,"Open":1530.43,"High":1534.26,"Low":1527.45,"Close":1531.85,"Volume":2715330000,"Adj. Close":1531.85},{"Date":13704,"Open":1531.85,"High":1531.85,"Low":1510.01,"Close":1510.12,"Volume":3244280000,"Adj. Close":1510.12},{"Date":13705,"Open":1509.93,"High":1519.34,"Low":1506.1,"Close":1518.76,"Volume":3082920000,"Adj. Close":1518.76},{"Date":13706,"Open":1518.74,"High":1547.92,"Low":1518.74,"Close":1547.7,"Volume":3489600000,"Adj. Close":1547.7},{"Date":13707,"Open":1547.68,"High":1555.1,"Low":1544.85,"Close":1552.5,"Volume":2801120000,"Adj. Close":1552.5},{"Date":13710,"Open":1552.5,"High":1555.9,"Low":1546.69,"Close":1549.52,"Volume":2704110000,"Adj. Close":1549.52},{"Date":13711,"Open":1549.52,"High":1555.32,"Low":1547.74,"Close":1549.37,"Volume":3007140000,"Adj. Close":1549.37},{"Date":13712,"Open":1549.2,"High":1549.2,"Low":1533.67,"Close":1546.17,"Volume":3609220000,"Adj. Close":1546.17},{"Date":13713,"Open":1546.13,"High":1555.2,"Low":1546.13,"Close":1553.08,"Volume":3251450000,"Adj. Close":1553.08},{"Date":13714,"Open":1553.19,"High":1553.19,"Low":1529.2,"Close":1534.1,"Volume":3745780000,"Adj. Close":1534.1},{"Date":13717,"Open":1534.06,"High":1547.23,"Low":1534.06,"Close":1541.57,"Volume":3102700000,"Adj. Close":1541.57},{"Date":13718,"Open":1541.57,"High":1541.57,"Low":1508.62,"Close":1511.04,"Volume":4115830000,"Adj. Close":1511.04},{"Date":13719,"Open":1511.03,"High":1524.31,"Low":1503.73,"Close":1518.09,"Volume":4283200000,"Adj. Close":1518.09},{"Date":13720,"Open":1518.09,"High":1518.09,"Low":1465.3,"Close":1482.66,"Volume":4472550000,"Adj. Close":1482.66},{"Date":13721,"Open":1482.44,"High":1488.53,"Low":1458.95,"Close":1458.95,"Volume":4784650000,"Adj. Close":1458.95},{"Date":13724,"Open":1458.93,"High":1477.88,"Low":1454.32,"Close":1473.91,"Volume":4128780000,"Adj. Close":1473.91},{"Date":13725,"Open":1473.9,"High":1488.3,"Low":1454.25,"Close":1455.27,"Volume":4524520000,"Adj. Close":1455.27},{"Date":13726,"Open":1455.18,"High":1468.38,"Low":1439.59,"Close":1465.81,"Volume":5256780000,"Adj. Close":1465.81},{"Date":13727,"Open":1465.46,"High":1476.43,"Low":1460.58,"Close":1472.2,"Volume":4368850000,"Adj. Close":1472.2},{"Date":13728,"Open":1472.18,"High":1473.23,"Low":1432.8,"Close":1433.06,"Volume":4272110000,"Adj. Close":1433.06},{"Date":13731,"Open":1433.04,"High":1467.67,"Low":1427.39,"Close":1467.67,"Volume":5067200000,"Adj. Close":1467.67},{"Date":13732,"Open":1467.62,"High":1488.3,"Low":1455.8,"Close":1476.71,"Volume":4909390000,"Adj. Close":1476.71},{"Date":13733,"Open":1476.22,"High":1503.89,"Low":1476.22,"Close":1497.49,"Volume":5499560000,"Adj. Close":1497.49},{"Date":13734,"Open":1497.21,"High":1497.21,"Low":1453.09,"Close":1453.09,"Volume":5889600000,"Adj. Close":1453.09},{"Date":13735,"Open":1453.09,"High":1462.02,"Low":1429.74,"Close":1453.64,"Volume":5345780000,"Adj. Close":1453.64},{"Date":13738,"Open":1453.42,"High":1466.29,"Low":1451.54,"Close":1452.92,"Volume":3696280000,"Adj. Close":1452.92},{"Date":13739,"Open":1452.87,"High":1456.74,"Low":1426.2,"Close":1426.54,"Volume":3814630000,"Adj. Close":1426.54},{"Date":13740,"Open":1426.15,"High":1440.78,"Low":1404.36,"Close":1406.7,"Volume":4290930000,"Adj. Close":1406.7},{"Date":13741,"Open":1406.64,"High":1415.97,"Low":1370.6,"Close":1411.27,"Volume":6509300000,"Adj. Close":1411.27},{"Date":13742,"Open":1411.26,"High":1450.33,"Low":1411.26,"Close":1445.94,"Volume":3570040000,"Adj. Close":1445.94},{"Date":13745,"Open":1445.94,"High":1451.75,"Low":1430.54,"Close":1445.55,"Volume":3321340000,"Adj. Close":1445.55},{"Date":13746,"Open":1445.55,"High":1455.32,"Low":1439.76,"Close":1447.12,"Volume":3012150000,"Adj. Close":1447.12},{"Date":13747,"Open":1447.03,"High":1464.86,"Low":1447.03,"Close":1464.07,"Volume":3309120000,"Adj. Close":1464.07},{"Date":13748,"Open":1464.05,"High":1472.06,"Low":1453.88,"Close":1462.5,"Volume":3084390000,"Adj. Close":1462.5},{"Date":13749,"Open":1462.34,"High":1479.4,"Low":1460.54,"Close":1479.37,"Volume":2541400000,"Adj. Close":1479.37},{"Date":13752,"Open":1479.36,"High":1479.36,"Low":1465.98,"Close":1466.79,"Volume":2406180000,"Adj. Close":1466.79},{"Date":13753,"Open":1466.72,"High":1466.72,"Low":1432.01,"Close":1432.36,"Volume":3078090000,"Adj. Close":1432.36},{"Date":13754,"Open":1432.01,"High":1463.76,"Low":1432.01,"Close":1463.76,"Volume":2824070000,"Adj. Close":1463.76},{"Date":13755,"Open":1463.67,"High":1468.43,"Low":1451.25,"Close":1457.64,"Volume":2582960000,"Adj. Close":1457.64},{"Date":13756,"Open":1457.61,"High":1481.47,"Low":1457.61,"Close":1473.99,"Volume":2731610000,"Adj. Close":1473.99},{"Date":13760,"Open":1473.96,"High":1496.4,"Low":1472.15,"Close":1489.42,"Volume":2766600000,"Adj. Close":1489.42},{"Date":13761,"Open":1488.76,"High":1488.76,"Low":1466.34,"Close":1472.29,"Volume":2991600000,"Adj. Close":1472.29},{"Date":13762,"Open":1472.03,"High":1481.49,"Low":1467.41,"Close":1478.55,"Volume":2459590000,"Adj. Close":1478.55},{"Date":13763,"Open":1478.55,"High":1478.55,"Low":1449.07,"Close":1453.55,"Volume":3191080000,"Adj. Close":1453.55},{"Date":13766,"Open":1453.5,"High":1462.25,"Low":1439.29,"Close":1451.7,"Volume":2835720000,"Adj. Close":1451.7},{"Date":13767,"Open":1451.69,"High":1472.48,"Low":1451.69,"Close":1471.49,"Volume":3015330000,"Adj. Close":1471.49},{"Date":13768,"Open":1471.1,"High":1479.5,"Low":1465.75,"Close":1471.56,"Volume":2885720000,"Adj. Close":1471.56},{"Date":13769,"Open":1471.47,"High":1489.58,"Low":1471.47,"Close":1483.95,"Volume":2877080000,"Adj. Close":1483.95},{"Date":13770,"Open":1483.95,"High":1485.99,"Low":1473.18,"Close":1484.25,"Volume":2641740000,"Adj. Close":1484.25},{"Date":13773,"Open":1484.24,"High":1484.24,"Low":1471.82,"Close":1476.65,"Volume":2598390000,"Adj. Close":1476.65},{"Date":13774,"Open":1476.63,"High":1519.89,"Low":1476.63,"Close":1519.78,"Volume":3708940000,"Adj. Close":1519.78},{"Date":13775,"Open":1519.75,"High":1538.74,"Low":1519.75,"Close":1529.03,"Volume":3846750000,"Adj. Close":1529.03},{"Date":13776,"Open":1528.69,"High":1529.14,"Low":1516.42,"Close":1518.75,"Volume":2957700000,"Adj. Close":1518.75},{"Date":13777,"Open":1518.75,"High":1530.89,"Low":1518.75,"Close":1525.75,"Volume":3679460000,"Adj. Close":1525.75},{"Date":13780,"Open":1525.75,"High":1530.18,"Low":1516.15,"Close":1517.73,"Volume":3131310000,"Adj. Close":1517.73},{"Date":13781,"Open":1516.34,"High":1518.27,"Low":1507.13,"Close":1517.21,"Volume":3187770000,"Adj. Close":1517.21},{"Date":13782,"Open":1518.62,"High":1529.39,"Low":1518.62,"Close":1525.42,"Volume":3237390000,"Adj. Close":1525.42},{"Date":13783,"Open":1527.32,"High":1532.46,"Low":1525.81,"Close":1531.38,"Volume":2872180000,"Adj. Close":1531.38},{"Date":13784,"Open":1531.24,"High":1533.74,"Low":1521.99,"Close":1526.75,"Volume":2925350000,"Adj. Close":1526.75},{"Date":13787,"Open":1527.29,"High":1549.02,"Low":1527.25,"Close":1547.04,"Volume":3281990000,"Adj. Close":1547.04},{"Date":13788,"Open":1546.96,"High":1548.01,"Low":1540.37,"Close":1546.63,"Volume":3101910000,"Adj. Close":1546.63},{"Date":13789,"Open":1545.8,"High":1545.84,"Low":1536.34,"Close":1539.59,"Volume":3065320000,"Adj. Close":1539.59},{"Date":13790,"Open":1539.91,"High":1544.02,"Low":1537.63,"Close":1542.84,"Volume":2690430000,"Adj. Close":1542.84},{"Date":13791,"Open":1543.84,"High":1561.91,"Low":1543.84,"Close":1557.59,"Volume":2919030000,"Adj. Close":1557.59},{"Date":13794,"Open":1556.51,"High":1556.51,"Low":1549,"Close":1552.58,"Volume":2040650000,"Adj. Close":1552.58},{"Date":13795,"Open":1553.18,"High":1565.26,"Low":1551.82,"Close":1565.15,"Volume":2932040000,"Adj. Close":1565.15},{"Date":13796,"Open":1564.98,"High":1565.42,"Low":1555.46,"Close":1562.47,"Volume":3044760000,"Adj. Close":1562.47},{"Date":13797,"Open":1564.72,"High":1576.09,"Low":1546.72,"Close":1554.41,"Volume":3911260000,"Adj. Close":1554.41},{"Date":13798,"Open":1555.41,"High":1563.03,"Low":1554.09,"Close":1561.8,"Volume":2788690000,"Adj. Close":1561.8},{"Date":13801,"Open":1562.25,"High":1564.74,"Low":1540.81,"Close":1548.71,"Volume":3139290000,"Adj. Close":1548.71},{"Date":13802,"Open":1547.81,"High":1547.81,"Low":1536.29,"Close":1538.53,"Volume":3234560000,"Adj. Close":1538.53},{"Date":13803,"Open":1544.44,"High":1550.66,"Low":1526.01,"Close":1541.24,"Volume":3638070000,"Adj. Close":1541.24}]
});

