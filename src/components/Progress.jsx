
const ProgressBar = ({ completed, progress }) => {
    if(completed)progress=100;
  const getColor = (progress) => {
    if (progress <= 30) {
      return "red";
    } else if (progress <= 70) {
      return "orange";
    } else {
      return "green";
    }
  };

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{
          width: `${progress}%`,
          backgroundColor: getColor(progress),
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
