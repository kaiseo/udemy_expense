import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    //spread all the data point values 
    const totalMaximum = Math.max(...dataPointValues);

    //return the accumulated points mapped
  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint=> (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
