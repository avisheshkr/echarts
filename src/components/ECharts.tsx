import { useEffect, useRef } from "react";
import * as echarts from "echarts";

type EChartsProps = {
  // Add any additional props you need
  chartOptions: any;
  width: string;
  open: boolean;
  type?: string;
  setChartWidth?: any;
};

const ECharts = ({
  chartOptions,
  width,
  open,
  setChartWidth,
}: EChartsProps) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const mainChartRef = useRef<any>(null);

  useEffect(() => {
    if (mainChartRef.current) {
      mainChartRef.current.setOption(chartOptions);
    }
  }, [chartOptions]);

  useEffect(() => {
    if (chartRef.current) {
      // Initialize ECharts
      const chart = echarts.init(chartRef.current);

      mainChartRef.current = chart;

      const handleResize = () => {
        chart.resize();
      };

      window.addEventListener("resize", handleResize);

      // Configure and set chart options
      const options: echarts.EChartOption = chartOptions;

      // Set the options to the chart
      chart.setOption(options);
      setChartWidth && setChartWidth(chart.getWidth());

      // Clean up ECharts instance when component unmounts
      return () => {
        chart.dispose();
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [open]);

  return <div ref={chartRef} style={{ width: width, height: "75vh" }} />;
};

export default ECharts;
