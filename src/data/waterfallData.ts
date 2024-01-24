export const optionsWaterfall = {
  // title: {
  //   text: 'Accumulated Waterfall Chart'
  // },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    formatter: function (params: any) {
      let tar;
      if (params[1] && params[1].value !== "-") {
        tar = params[1];
      } else {
        tar = params[2];
      }
      return tar && tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
    },
  },
  // legend: {
  //   data: ['Expenses', 'Income']
  // },
  grid: {
    left: "6%",
    right: "7%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: [
      "Expantion",
      "Replacement",
      "Involuntary Turnover",
      "Voluntary Turnover",
      "Discrepancies",
      "Net Change",
    ],
  },
  yAxis: {
    type: "value",
    interval: 200,
  },
  series: [
    {
      name: "Placeholder",
      type: "bar",
      stack: "Total",
      barWidth: "90%",
      silent: true,
      itemStyle: {
        borderColor: "transparent",
        color: "transparent",
      },
      emphasis: {
        itemStyle: {
          borderColor: "transparent",
          color: "transparent",
        },
      },
      data: [0, 379, 587, 355, 355, 0],
    },
    {
      name: "Income",
      type: "bar",
      stack: "Total",
      color: "rgba(75, 222, 129, 0.6)",
      label: {
        show: true,
        position: "top",
        color: "rgba(75, 222, 129)",
        formatter: "+{@score}",
      },
      data: [
        379,
        326,
        "-",
        "-",
        {
          value: 7,
          label: { color: "#C4C8CF" },
          itemStyle: {
            color: "#C4C8CF",
          },
        },
        {
          value: 362,
          label: { color: "#93C5FD" },
          itemStyle: {
            color: "rgba(147, 197, 253, 0.6)",
          },
        },
      ],
    },
    {
      name: "Expenses",
      type: "bar",
      stack: "Total",
      color: "rgba(249, 133, 133, 0.7)",
      label: {
        show: true,
        position: "bottom",
        color: "rgba(249, 133, 133)",
        formatter: "-{@score}",
      },
      data: ["-", "-", 118, 232, "-", "-"],
    },
  ],
};
