export const optionsForNegative = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    top: 80,
    bottom: 50,
  },
  xAxis: {
    type: "value",
    position: "bottom",
    axisLine: { show: true },
    minInterval: 20,
    maxInterval: 20,
    interval: 10,
    axisLabel: {
      formatter: function (value: number) {
        if (value === 0) {
          return value + ".00 pp";
        } else {
          return value + ".0 pp";
        }
      },
    },
    splitLine: {
      lineStyle: {
        type: "dashed",
      },
    },
  },
  yAxis: {
    type: "category",
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
  },
  series: [
    {
      name: "Difference",
      color: "#59D1C8",
      type: "bar",
      stack: "Total",
      label: {
        show: true,
        color: "#59D1C8",
        position: "right",
        formatter: "+{@score} pp",
      },
      data: [
        0.78,
        { value: 11, label: { formatter: "+{@score}.0 pp" } },
        1.08,
        0.34,
        { value: 3.2, label: { formatter: "+{@score}0 pp" } },
        {
          value: -7.9,
          label: {
            position: "left",
            formatter: "{@score}0 pp",
          },
        },
        2.04,
        {
          value: -2.87,
          label: {
            position: "left",
            formatter: "{@score} pp",
          },
        },
        0.01,
      ],
    },
  ],
};
