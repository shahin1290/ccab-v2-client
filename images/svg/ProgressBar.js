import { motion } from "framer-motion";
import React from "react";

const progress = {
  1: 0.002,
  2: 0.15,
  3: 0.32,
  4: 0.5,
  5: 0.65,
  6: 0.84,
  7: 1,
};

const ProgressBar = ({
  width = 140,
  height = 50,
  stage,
  color,
  totalStages,
}) => {
  let currentStage = stage;
  if (currentStage < 1) currentStage = 1;
  if (currentStage > 7) currentStage = 7;

  const animationDuration = 0.5;

  const pathVariant = {
    initial: { pathLength: 0 },
    visible: {
      pathLength: progress[stage],
      transition: {
        duration: animationDuration,
      },
    },
  };

  const circleVariant = {
    initial: {
      fill: "#DFDFDF",
    },
    visible: {
      fill: color,
      transition: {
        duration: animationDuration,
      },
    },
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1241.051 80.507">
      <g id="ProgressBar" transform="translate(881 3930.663)">
        <path
          id="WhitePath"
          d="M36.5,225.746c100.89,0,100.89,50,201.781,50s100.892-50,201.782-50,100.89,50,201.781,50,100.892-50,201.786-50,100.9,50,201.795,50,100.9-50,201.795-50"
          transform="translate(-902.819 -4141.729)"
          width={width}
          height={height}
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="8"
        />
        <motion.path
          id="OrangePath"
          d="M36.5,225.746c100.89,0,100.89,50,201.781,50s100.892-50,201.782-50,100.89,50,201.781,50,100.892-50,201.786-50,100.9,50,201.795,50,100.9-50,201.795-50"
          transform="translate(-902.819 -4141.729)"
          fill="none"
          strokeMiterlimit="10"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          variants={pathVariant}
          initial="initial"
          animate="visible"
        />
        <motion.circle
          id="stage6"
          cx="14.681"
          cy="14.681"
          r="14.681"
          transform="translate(330.689 -3930.663)"
          fill="#dfdfdf"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 6 ? "visible" : "initial"}
        />
        <motion.circle
          id="Stage3"
          cx="14.681"
          cy="14.681"
          r="14.681"
          transform="translate(-276.515 -3879.518)"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 3 ? "visible" : "initial"}
        />
        <motion.circle
          id="stage5"
          cx="14.681"
          cy="14.681"
          r="14.681"
          transform="translate(132.442 -3879.518)"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 5 ? "visible" : "initial"}
        />
        <motion.circle
          id="Stage2"
          cx="14.681"
          cy="14.681"
          r="14.681"
          transform="translate(-478.022 -3929.396)"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 2 ? "visible" : "initial"}
        />
        <motion.circle
          id="Stage4"
          cx="14.681"
          cy="14.681"
          r="14.681"
          transform="translate(-72.288 -3929.396)"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 4 ? "visible" : "initial"}
        />
        <motion.circle
          id="Stage1"
          cx="14.681"
          cy="14.681"
          r="14.681"
          transform="translate(-685.472 -3879.518)"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 1 ? "visible" : "initial"}
        />
        <motion.circle
          id="Stage0"
          cx="14.681"
          cy="14.681"
          r="14.681"
          transform="translate(-881 -3930.663)"
          fill="#ffa950"
        />
      </g>
    </svg>
  );
};

export default ProgressBar;
