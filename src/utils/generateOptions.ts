export function generateOptionsForYCategory(data: any) {
  const keys = Object.keys(data[0]);
  const dataSet = data?.map((item: any) => {
    return [item[keys[0]], item[keys[1]], item[keys[2]]];
  });

  return {
    // title: {
    //   text: "World Population",
    // },
    // tooltip: {
    //   trigger: "axis",
    //   axisPointer: {
    //     type: "shadow",
    //   },
    // },
    // legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    dataset: {
      source: dataSet,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
      axisLine: {
        show: true,
      },
      axisLabel: {
        show: true,
        formatter: (value: any) => {
          return value;
        },
      },
    },
    yAxis: {
      type: "category",
      inverse: true,
      axisTick: {
        show: true,
      },
    },
    series: [
      {
        type: "bar",
        color: "#5DB5E3",
        label: {
          show: true,
          color: "#5DB5E3",
          position: "right",
          formatter: (value: any) => {
            return value.data[1].toFixed(2);
          },
        },
      },
      {
        type: "bar",
        color: "#FF9179",
        label: {
          show: true,
          color: "#FF9179",
          position: "right",
          formatter: (value: any) => {
            return value.data[2].toFixed(2);
          },
        },
      },
    ],
  };
}

export function generateOptionsForNegativeBar(data: any) {
  const keys = Object.keys(data[0]);
  const dataSet = data.map((item: any) => {
    return [item[keys[0]], item[keys[2]] - item[keys[1]]];
  });
  return {
    // title: {
    //   text: "Diff Chart",
    // },
    grid: {
      top: "10%",
      bottom: "10%",
      right: "15%",
      // right: '5%',
      left: "5%",
      backgroundColor: "white",
    },
    dataset: {
      source: dataSet,
    },
    yAxis: {
      type: "category",
      inverse: true,
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    xAxis: {
      type: "value",
      axisLabel: {
        formatter: (value: any) => {
          return value;
        },
      },
      axisLine: {
        show: true,
        lineStyle: {
          width: 2,
        },
      },
    },
    series: [
      {
        type: "bar",
        barWidth: "80%",
        color: "#59D1C8",
        label: {
          show: true,
          position: "outside",
          color: "#59D1C8",
          formatter: (value: any) => {
            return `${value.data[1].toFixed(2)}`;
          },
        },
      },
    ],
  };
}

export function generateOptionsForWaterfall(data: any, selectedChart: any) {
  console.log({ selectedChart: selectedChart?._api?.getWidth() });
  const key0 = Object.keys(data[0])[0];
  const key1 = Object.keys(data[0])[1];
  const key2 = Object.keys(data[0])[2];
  const differenceData = data?.map((item: any) => {
    return { category: item[key0], diff: item[key2] - item[key1] };
  });

  const netChange = differenceData?.reduce(
    (acc: any, item: any) => acc + Number(item?.diff),
    0
  );

  const sortedDifferenceData = differenceData.slice().sort((a: any, b: any) => {
    return netChange > 0 ? b.diff - a.diff : a.diff - b.diff;
  });

  const positiveData = sortedDifferenceData?.map((item: any) => {
    // return Math.abs(item?.diff.toFixed(2));
    if (netChange > 0) {
      if (item?.diff < 0) {
        return "-";
      } else {
        return Number(item?.diff.toFixed(2));
      }
    } else {
      if (item?.diff > 0) {
        return "-";
      } else {
        return Math.abs(item?.diff.toFixed(2));
      }
    }
  });

  const negativeData = sortedDifferenceData?.map((item: any) => {
    if (netChange > 0) {
      if (item?.diff < 0) {
        return Math.abs(item?.diff.toFixed(2));
      } else {
        return "-";
      }
    } else {
      if (item?.diff > 0) {
        return Number(item?.diff.toFixed(2));
      } else {
        return "-";
      }
    }
  });

  let cumulativeSum = 0;

  const calculatedArray = positiveData.map((data: any, index: any) => {
    const valueToAdd = positiveData[index - 1];
    const valueToSubtract = negativeData[index];
    if (index === 0) {
      return 0;
    }

    if (typeof valueToAdd === "number" && typeof valueToSubtract === "number") {
      cumulativeSum = cumulativeSum + valueToAdd - valueToSubtract;
      return cumulativeSum;
    }

    if (data !== "-") {
      cumulativeSum = cumulativeSum + valueToAdd;
      return cumulativeSum;
    } else {
      cumulativeSum = cumulativeSum - valueToSubtract;
      return cumulativeSum; // Placeholder for elements with '-'
    }
  });

  const barFormingData = [...calculatedArray];

  const newArray = new Array(barFormingData.length).fill(0);
  const netData = [
    ...newArray,
    {
      value: Math.abs(netChange.toFixed(2)),
      label: {
        show: true,
        position: "top",
        color: "#93C5FD",
      },
    },
  ];

  const xAxisData = [
    ...sortedDifferenceData.map((data: any) => {
      return data?.category;
    }),
    "Net Change",
  ];

  console.log({ netData });

  console.log({
    sortedDifferenceData,
    positiveData,
    negativeData,
    barFormingData,
  });

  // const pipe2Width =
  //   ((0.8 * secondLength) / (firstLength + secondLength + 1)) *
  //   chart.offsetWidth;
  // const pipe1Width =
  //   ((0.8 * firstLength) / (firstLength + secondLength + 1)) *
  //   chart.offsetWidth;
  // const pipe1Left = 10 + (10 / chart.offsetWidth) * 100;
  // const pipe2Left = 10 + ((pipe1Width + 10) / chart.offsetWidth) * 100;

  const generateGraphic = () => {
    const width = Number(Math.floor(selectedChart?._api?.getWidth()));
    const length1 = positiveData.filter((p: any) => p !== "-").length;
    const length2 = negativeData.filter((p: any) => p !== "-").length;

    const firstLength = netChange > 0 ? length1 : length2;
    const secondLength = netChange > 0 ? length2 : length1;

    const width1 =
      ((0.85 * firstLength) / (secondLength + firstLength + 1)) * width;
    const width2 =
      ((0.85 * secondLength) / (firstLength + secondLength + 1)) * width;

    const pipe1Left = 10 + (10 / width) * 100;
    const pipe2Left = 10 + ((width1 + 10) / width) * 100;

    console.log({
      width,
      length1,
      length2,
      width1,
      width2,
      pipe1Left,
      pipe2Left,
    });

    return [
      {
        type: "text",
        left: "0%",
        bottom: "5%",
        style: {
          text: "{a|4.85k}\n{b|Starting\nHeadcount}",
          rich: {
            a: {
              fontSize: 14,
              fontWeight: "bold",
              align: "center",
              lineHeight: 16,
            },
            b: {
              fontSize: 11,
              align: "center",
              fontWeight: "lighter",
              lineHeight: 16,
              fill: "rgb(156 163 175)",
            },
          },
        },
      },
      {
        type: "text",
        right: "0%",
        bottom: "40%",
        style: {
          text: "{a|5.23k}\n{b|Ending\nHeadcount}",
          rich: {
            a: {
              fontSize: 14,
              fontWeight: "bold",
              align: "center",
              lineHeight: 16,
            },
            b: {
              fontSize: 11,
              align: "center",
              fontWeight: "lighter",
              lineHeight: 16,
              fill: "rgb(156 163 175)",
            },
          },
        },
      },
      {
        type: "group",
        bottom: 0,
        left: 500,
        children: [
          {
            type: "line",
            shape: {
              x1: width1,
              y1: 0,
              x2: width2,
              // (xAxisData[0] / (xAxisData.length - 1)) *
              // selectedChart?._api?.getWidth() * 0.67 * 2,
              y2: 0,
            },
            style: {
              stroke: "rgb(107 114 128)",
              lineWidth: 3,
            },
          },
          {
            type: "text",
            left: 200,
            // (xAxisData[0] / (xAxisData.length - 1)) *
            //   (selectedChart?._api?.getWidth() * 0.67) -
            // 30,
            top: 10,
            style: {
              text: "INCOMING",
              fontSize: 11,
              align: "center",
              fontWeight: "lighter",
              lineHeight: 16,
              fill: "rgb(156 163 175)",
            },
          },
        ],
      },
      {
        type: "group",
        bottom: "0%",
        left: "10%",
        // (xAxisData[0] / (xAxisData.length - 1)) *
        // (selectedChart?._api?.getWidth() * 0.67) *
        // 2 *
        // 1.4,
        children: [
          {
            type: "line",
            shape: {
              x1: 10,
              y1: 0,
              x2: width1 - 10,
              // (xAxisData[0] / (xAxisData.length - 1)) *
              // (selectedChart?._api?.getWidth() * 0.67) *
              // 2,
              y2: 0,
            },
            style: {
              stroke: "rgb(107 114 128)",
              lineWidth: 3,
            },
          },
          {
            type: "text",
            left: 200,
            // (xAxisData[0] / (xAxisData.length - 1)) *
            //   (selectedChart?._api?.getWidth() * 0.67) -
            // 30,
            top: 10,
            style: {
              text: "OUTGOING",
              fontSize: 11,
              align: "center",
              fontWeight: "lighter",
              lineHeight: 16,
              fill: "rgb(156 163 175)",
            },
          },
        ],
      },
    ];
  };

  const options = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      // formatter: function (params: any) {
      //   let tar;
      //   if (params[1] && params[1].value !== "-") {
      //     tar = params[1];
      //   } else {
      //     tar = params[2];
      //   }
      //   return tar && tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
      // },
    },
    grid: {
      left: "6%",
      right: "7%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: xAxisData,
      axisLabel: {
        interval: 0,
        rotate: 15,
      },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Placeholder",
        type: "bar",
        stack: "Total",
        barWidth: "80%",
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
        tooltip: {
          show: true,
        },
        data: barFormingData,
      },
      {
        // name: "Income",
        type: "bar",
        stack: "Total",
        color:
          netChange > 0
            ? "rgba(75, 222, 129, 0.6)"
            : "rgba(249, 133, 133, 0.7)",
        label: {
          show: true,
          position: "top",
          color: netChange > 0 ? "rgba(75, 222, 129)" : "rgba(249, 133, 133)",
          formatter: netChange > 0 ? "+{@score}" : "-{@score}",
        },
        data: positiveData,
      },
      {
        // name: "Expenses",
        type: "bar",
        stack: "Total",
        color:
          netChange > 0
            ? "rgba(249, 133, 133, 0.7)"
            : "rgba(75, 222, 129, 0.6)",
        label: {
          show: true,
          position: "bottom",
          color: netChange > 0 ? "rgba(249, 133, 133)" : "rgba(75, 222, 129)",
          formatter: netChange > 0 ? "-{@score}" : "+{@score}",
        },
        data: negativeData,
      },
      {
        name: "Net Change",
        type: "bar",
        stack: "Total",
        color: "#93C5FD",
        label: {
          show: false,
          position: "bottom",
          color: "#000",
          formatter: netChange > 0 ? "+{@score}" : "-{@score}",
        },
        data: netData,
      },
    ],
    graphic: generateGraphic(),
    // graphic: [
    //   {
    //     type: "text",
    //     left: 10,
    //     top: 10,
    //     style: {
    //       text: "Your Text Here",
    //       fill: "red", // Text color
    //       fontSize: 14,
    //     },
    //   },
    // ],
  };

  return options;
}
