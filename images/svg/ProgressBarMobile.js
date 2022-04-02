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

const ProgressBarMobile = ({ width = 120, height = 1257, stage, color }) => {
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
      viewBox="0 0 120 1257"
      fill="none"
    >
      <g id="Progress">
        <path
          id="ProgressPath"
          d="M103.053 14.9679C103.053 115.858 17.2118 115.858 17.2118 216.749C17.2118 317.64 103.053 317.641 103.053 418.531C103.053 519.421 17.2118 519.421 17.2118 620.312C17.2118 654.612 27.1348 677.256 40.3068 696.268C65.6608 732.868 103.054 755.508 103.054 822.098C103.054 922.998 17.2128 922.998 17.2128 1023.89C17.2128 1124.79 103.054 1124.79 103.054 1225.69"
          stroke="white"
          strokeWidth="8"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <motion.path
          id="ProgressPath"
          d="M103.053 14.9679C103.053 115.858 17.2118 115.858 17.2118 216.749C17.2118 317.64 103.053 317.641 103.053 418.531C103.053 519.421 17.2118 519.421 17.2118 620.312C17.2118 654.612 27.1348 677.256 40.3068 696.268C65.6608 732.868 103.054 755.508 103.054 822.098C103.054 922.998 17.2128 922.998 17.2128 1023.89C17.2128 1124.79 103.054 1124.79 103.054 1225.69"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          variants={pathVariant}
          initial="initial"
          animate="visible"
        />
        <motion.path
          id="Stage7"
          d="M89.6394 1242.21C89.6394 1250.32 96.2123 1256.89 104.32 1256.89C112.429 1256.89 119.001 1250.32 119.001 1242.21C119.001 1234.11 112.429 1227.53 104.32 1227.53C96.2123 1227.53 89.6394 1234.11 89.6394 1242.21Z"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 6 ? "visible" : "initial"}
        />
        <motion.path
          id="Stage4"
          d="M0.493927 635.009C0.493927 643.117 7.06683 649.69 15.1749 649.69C23.283 649.69 29.8559 643.117 29.8559 635.009C29.8559 626.901 23.283 620.328 15.1749 620.328C7.06683 620.328 0.493927 626.901 0.493927 635.009Z"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 3 ? "visible" : "initial"}
        />
        <motion.path
          id="Stage6"
          d="M0.493927 1046.32C0.493927 1054.43 7.06683 1061.01 15.1749 1061.01C23.283 1061.01 29.8559 1054.43 29.8559 1046.32C29.8559 1038.22 23.283 1031.64 15.1749 1031.64C7.06683 1031.64 0.493927 1038.22 0.493927 1046.32Z"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 5 ? "visible" : "initial"}
        />
        <motion.path
          id="Stage3"
          d="M88.3728 433.502C88.3728 441.61 94.9457 448.183 103.054 448.183C111.162 448.183 117.735 441.61 117.735 433.502C117.735 425.393 111.162 418.821 103.054 418.821C94.9457 418.821 88.3728 425.393 88.3728 433.502Z"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 2 ? "visible" : "initial"}
        />
        <motion.path
          id="Stage5"
          d="M88.3728 839.237C88.3728 847.345 94.9457 853.918 103.054 853.918C111.162 853.918 117.735 847.345 117.735 839.237C117.735 831.129 111.162 824.556 103.054 824.556C94.9457 824.556 88.3728 831.129 88.3728 839.237Z"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 4 ? "visible" : "initial"}
        />
        <motion.path
          id="Stage2"
          d="M0.493927 226.052C0.493927 234.16 7.06683 240.733 15.1749 240.733C23.283 240.733 29.8559 234.16 29.8559 226.052C29.8559 217.944 23.283 211.371 15.1749 211.371C7.06683 211.371 0.493927 217.944 0.493927 226.052Z"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 1 ? "visible" : "initial"}
        />
        <motion.path
          id="Stage1"
          d="M88.3728 14.9679C88.3728 23.076 94.9457 29.6489 103.054 29.6489C111.162 29.6489 117.735 23.076 117.735 14.9679C117.735 6.85977 111.162 0.286865 103.054 0.286865C94.9457 0.286865 88.3728 6.85977 88.3728 14.9679Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default ProgressBarMobile;
