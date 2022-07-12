import "./ChartBar.css";

const ChartBar = (props) => {
  //calculate chart bar fill

  let barFillHeight = "0%";

  if (props.max > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{barFillHeight}}></div>
        <div className="chart-bar__label"></div>
        </div>
    </div>
  )
};

export default ChartBar;
