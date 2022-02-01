import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const expenseValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxExpense = Math.max(...expenseValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxExpense}
        />
      ))}
    </div>
  );
};

export default Chart;
