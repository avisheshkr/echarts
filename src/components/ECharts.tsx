import { useEffect, useRef } from "react";
import * as echarts from "echarts";

type EChartsProps = {
  // Add any additional props you need
  chartOptions: any;
  width: string;
  open: boolean;
};

const ECharts = ({ chartOptions, width, open }: EChartsProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Initialize ECharts
      const chart = echarts.init(chartRef.current);

      // Configure and set chart options
      const options: echarts.EChartOption = chartOptions;

      // Set the options to the chart
      chart.setOption(options);

      // Clean up ECharts instance when component unmounts
      return () => {
        chart.dispose();
      };
    }
  }, [open]);

  return <div ref={chartRef} style={{ width: width, height: "75vh" }} />;
};

export default ECharts;
