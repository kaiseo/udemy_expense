import "./ChartBar.css";

const ChartBar = (props) => {
  //calculate chart bar fill
  //bar-fill-height: start from 0;
  let barFillHeight = "0%";
  //if max value is greater than 0, round the value
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
