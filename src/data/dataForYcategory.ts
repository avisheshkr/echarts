export const optionForYcategory = {
  //   title: {
  //     text: "World Population",
  //   },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {},
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
    boundaryGap: [0, 0.01],
    axisLine: {
      show: true,
    },
    axisLabel: {
      show: true,
      formatter: function (value: number, index: number) {
        if (index < 2) {
          return value + ".00%";
        } else {
          return value + ".0%";
        }
      },
    },
  },
  yAxis: {
    type: "category",
    data: [
      "Product",
      "Office of CEO",
      "Marketing",
      "Customer Support",
      "Finance",
      "HR",
      "IT",
      "Sales",
      "Operations",
    ],
  },
  series: [
    {
      type: "bar",
      color: "#5DB5E3",
      label: {
        show: true,
        color: "#5DB5E3",
        position: "right",
        formatter: "{@score}%",
      },
      data: [9.37, 11, 11.9, 12.3, 12.5, 12.9, 13.7, 15.3, 16.6],
    },
    {
      type: "bar",
      color: "#FF9179",
      label: {
        show: true,
        color: "#FF9179",
        position: "right",
        formatter: "{@score}%",
      },
      data: [8.59, 0, 10.9, 12, 9.27, 20.8, 11.6, 18.1, 16.6],
    },
  ],
};
