(function () {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var accent3 = style.getPropertyValue('--accent3').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  var fmt = function (n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  /* ---------- Chart 1: allocation ---------- */
  var elAlloc = document.getElementById('chart-alloc');
  if (elAlloc) {
    var alloc = echarts.init(elAlloc, null, { renderer: 'svg' });
    var parts = [
      { name: '社区分配', pct: 60, amount: 1260000000000000, color: accent },
      { name: '流动性', pct: 20, amount: 420000000000000, color: accent2 },
      { name: '团队', pct: 10, amount: 210000000000000, color: accent3 },
      { name: '社区金库', pct: 10, amount: 210000000000000, color: muted + '99' }
    ];

    alloc.setOption({
      animation: false,
      grid: { left: 4, right: 4, top: 46, bottom: 8 },
      tooltip: {
        trigger: 'item',
        appendToBody: true,
        backgroundColor: ink,
        borderWidth: 0,
        textStyle: { color: '#F2EDE3', fontSize: 12, fontFamily: 'IBM Plex Mono' },
        formatter: function (p) {
          var d = parts[p.seriesIndex];
          return d.name + ' · ' + d.pct + '%<br/>' + fmt(d.amount) + ' BCONG';
        }
      },
      legend: {
        show: true,
        top: 0,
        left: 0,
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 18,
        icon: 'rect',
        textStyle: { color: ink, fontSize: 11, fontFamily: 'Instrument Sans, PingFang SC' },
        data: parts.map(function (d) { return d.name; })
      },
      xAxis: {
        type: 'value',
        max: 100,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { color: muted, fontSize: 10, formatter: '{value}%' },
        splitLine: { lineStyle: { color: rule, type: 'dashed' } }
      },
      yAxis: {
        type: 'category',
        data: [''],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false }
      },
      series: parts.map(function (d, i) {
        return {
          name: d.name,
          type: 'bar',
          stack: 'total',
          barWidth: 52,
          data: [d.pct],
          itemStyle: { color: d.color },
          label: {
            show: true,
            position: 'inside',
            formatter: d.name + '\n' + d.pct + '%',
            color: i < 2 ? '#F7F2E8' : '#17140F',
            fontSize: 11,
            lineHeight: 15,
            fontFamily: 'Instrument Sans, PingFang SC'
          },
          emphasis: { disabled: true }
        };
      })
    });
    window.addEventListener('resize', function () { alloc.resize(); });
  }

  /* ---------- Chart 2: team vesting ---------- */
  var elVest = document.getElementById('chart-vesting');
  if (elVest) {
    var vest = echarts.init(elVest, null, { renderer: 'svg' });
    var months = [];
    var series = [];
    for (var m = 0; m <= 24; m++) {
      months.push('M' + m);
      series.push(m <= 6 ? 0 : Math.round(((m - 6) / 18) * 100));
    }

    vest.setOption({
      animation: false,
      grid: { left: 42, right: 18, top: 24, bottom: 34 },
      tooltip: {
        trigger: 'axis',
        appendToBody: true,
        backgroundColor: ink,
        borderWidth: 0,
        textStyle: { color: '#F2EDE3', fontSize: 12, fontFamily: 'IBM Plex Mono' },
        formatter: function (p) {
          return p[0].axisValue + ' · 累计解锁 ' + p[0].value + '%';
        }
      },
      xAxis: {
        type: 'category',
        data: months,
        boundaryGap: false,
        axisLine: { lineStyle: { color: rule } },
        axisTick: { show: false },
        axisLabel: {
          color: muted,
          fontSize: 10,
          interval: 5,
          fontFamily: 'IBM Plex Mono'
        }
      },
      yAxis: {
        type: 'value',
        max: 100,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { color: muted, fontSize: 10, formatter: '{value}%' },
        splitLine: { lineStyle: { color: rule, type: 'dashed' } }
      },
      series: [{
        name: '团队份额累计解锁',
        type: 'line',
        step: false,
        data: series,
        smooth: false,
        symbol: 'none',
        lineStyle: { color: accent, width: 2 },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: accent + '2E' },
              { offset: 1, color: accent + '00' }
            ]
          }
        },
        markLine: {
          silent: true,
          symbol: 'none',
          lineStyle: { color: accent2, type: 'dashed', width: 1 },
          label: {
            formatter: '锁仓结束 M6',
            color: accent2,
            fontSize: 10,
            position: 'insideEndTop',
            fontFamily: 'IBM Plex Mono'
          },
          data: [{ xAxis: 'M6' }]
        }
      }]
    });
    window.addEventListener('resize', function () { vest.resize(); });
  }
})();
