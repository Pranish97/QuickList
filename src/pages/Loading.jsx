import { useEffect, useState } from "react";
import loadingImg from "../public/images/loading.png"

const Loading = () => {
    const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100000000000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container">
    <div className="loading-text">
      LOADING
      <img src={loadingImg} className="character-img" alt="Character" />
    </div>
    <div className="percentage" id="percent">...</div>
  </div>

  )
}

export default Loading