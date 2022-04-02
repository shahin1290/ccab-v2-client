import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

const progress = {
  1: 0,
  2: 0.18,
  3: 0.345,
  4: 0.5,
  5: 0.68,
  6: 0.85,
  7: 1,
};

const ProgressBar = ({ width = 1258, height = 119, stage, color }) => {
  let currentStage = stage;
  if (currentStage < 1) currentStage = 1;
  if (currentStage > 7) currentStage = 7;

  const animationDuration = 0.7;

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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 1258 119"
      fill="none"
    >
      <g id="Progress">
        <path
          id="ProgressPath"
          d="M15.1249 16.2856C116.015 16.2856 116.015 102.127 216.906 102.127C317.797 102.127 317.798 16.2856 418.688 16.2856C519.578 16.2856 519.578 102.127 620.469 102.127C654.769 102.127 677.413 92.2036 696.425 79.0316C733.025 53.6776 755.665 16.2845 822.255 16.2845C923.155 16.2845 923.155 102.126 1024.05 102.126C1124.94 102.126 1124.95 16.2845 1225.84 16.2845"
          stroke="white"
          strokeWidth="8"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <motion.path
          id="ProgressPath"
          d="M15.1249 16.2856C116.015 16.2856 116.015 102.127 216.906 102.127C317.797 102.127 317.798 16.2856 418.688 16.2856C519.578 16.2856 519.578 102.127 620.469 102.127C654.769 102.127 677.413 92.2036 696.425 79.0316C733.025 53.6776 755.665 16.2845 822.255 16.2845C923.155 16.2845 923.155 102.126 1024.05 102.126C1124.94 102.126 1124.95 16.2845 1225.84 16.2845"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          variants={pathVariant}
          initial="initial"
          animate="visible"
        />
        <motion.path
          id="Stage7"
          d="M1242.37 29.6989C1250.48 29.6989 1257.05 23.126 1257.05 15.0179C1257.05 6.90982 1250.48 0.336914 1242.37 0.336914C1234.26 0.336914 1227.69 6.90982 1227.69 15.0179C1227.69 23.126 1234.26 29.6989 1242.37 29.6989Z"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 6 ? "visible" : "initial"}
        />
        <motion.path
          id="Stage4"
          d="M635.166 118.844C643.274 118.844 649.847 112.272 649.847 104.163C649.847 96.0553 643.274 89.4824 635.166 89.4824C627.058 89.4824 620.485 96.0553 620.485 104.163C620.485 112.272 627.058 118.844 635.166 118.844Z"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 3 ? "visible" : "initial"}
        />
        <motion.path
          id="Stage6"
          d="M1046.48 118.844C1054.59 118.844 1061.16 112.272 1061.16 104.163C1061.16 96.0553 1054.59 89.4824 1046.48 89.4824C1038.37 89.4824 1031.8 96.0553 1031.8 104.163C1031.8 112.272 1038.37 118.844 1046.48 118.844Z"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 5 ? "visible" : "initial"}
        />
        <motion.path
          id="Stage3"
          d="M433.659 30.9655C441.767 30.9655 448.34 24.3926 448.34 16.2845C448.34 8.17642 441.767 1.60352 433.659 1.60352C425.55 1.60352 418.978 8.17642 418.978 16.2845C418.978 24.3926 425.55 30.9655 433.659 30.9655Z"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 2 ? "visible" : "initial"}
        />
        <motion.path
          id="Stage5"
          d="M839.394 30.9655C847.502 30.9655 854.075 24.3926 854.075 16.2845C854.075 8.17642 847.502 1.60352 839.394 1.60352C831.286 1.60352 824.713 8.17642 824.713 16.2845C824.713 24.3926 831.286 30.9655 839.394 30.9655Z"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 4 ? "visible" : "initial"}
        />
        <motion.path
          id="Stage2"
          d="M226.209 118.844C234.317 118.844 240.89 112.272 240.89 104.163C240.89 96.0553 234.317 89.4824 226.209 89.4824C218.101 89.4824 211.528 96.0553 211.528 104.163C211.528 112.272 218.101 118.844 226.209 118.844Z"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 1 ? "visible" : "initial"}
        />
        <motion.path
          id="Stage1"
          d="M15.1248 30.9655C23.2329 30.9655 29.8058 24.3926 29.8058 16.2845C29.8058 8.17642 23.2329 1.60352 15.1248 1.60352C7.01676 1.60352 0.443848 8.17642 0.443848 16.2845C0.443848 24.3926 7.01676 30.9655 15.1248 30.9655Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default ProgressBar;
