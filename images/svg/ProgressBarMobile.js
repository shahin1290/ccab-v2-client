import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

const progress = {
  1: 0,
  2: 0.15,
  3: 0.33,
  4: 0.5,
  5: 0.66,
  6: 0.83,
  7: 1,
};

const ProgressBarMobile = ({ width = 78, height = 814, stage, color }) => {
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
      viewBox="0 0 78 814"
      fill="none"
    >
      <g id="Progress">
        <path
          id="ProgressPath"
          d="M68.2451 9.625C68.2451 75.77 11.9661 75.77 11.9661 141.916C11.9661 208.062 68.2451 208.062 68.2451 274.208C68.2451 340.354 11.9661 340.353 11.9661 406.498C11.9661 472.643 68.2451 472.644 68.2451 538.792C68.2451 604.94 11.9661 604.942 11.9661 671.092C11.9661 737.242 68.2451 737.242 68.2451 803.392"
          stroke="white"
          strokeWidth="8"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <motion.path
          id="ProgressPath"
          d="M68.2441 9.62402C68.2441 75.769 11.9651 75.769 11.9651 141.915C11.9651 208.061 68.2441 208.061 68.2441 274.207C68.2441 340.353 11.9651 340.352 11.9651 406.497C11.9651 472.642 68.2441 472.643 68.2441 538.791C68.2441 604.939 11.9651 604.941 11.9651 671.091C11.9651 737.241 68.2441 737.241 68.2441 803.391"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          variants={pathVariant}
          initial="initial"
          animate="visible"
        />
        <motion.path
          id="Stage7"
          d="M58.6191 804.028C58.6191 809.344 62.9284 813.653 68.2441 813.653C73.5599 813.653 77.8691 809.344 77.8691 804.028C77.8691 798.712 73.5599 794.403 68.2441 794.403C62.9284 794.403 58.6191 798.712 58.6191 804.028Z"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 6 ? "visible" : "initial"}
        />

        <motion.path
          id="Stage6"
          d="M0.174133 675.6C0.174133 680.916 4.48339 685.225 9.79913 685.225C15.1149 685.225 19.4241 680.916 19.4241 675.6C19.4241 670.284 15.1149 665.975 9.79913 665.975C4.48339 665.975 0.174133 670.284 0.174133 675.6Z"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 5 ? "visible" : "initial"}
        />

        <motion.path
          id="Stage5"
          d="M57.7881 539.829C57.7881 545.145 62.0974 549.454 67.4131 549.454C72.7289 549.454 77.0381 545.145 77.0381 539.829C77.0381 534.513 72.7289 530.204 67.4131 530.204C62.0974 530.204 57.7881 534.513 57.7881 539.829Z"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 4 ? "visible" : "initial"}
        />
        <motion.path
          id="Stage4"
          d="M0.174133 405.935C0.174133 411.251 4.48339 415.56 9.79913 415.56C15.1149 415.56 19.4241 411.251 19.4241 405.935C19.4241 400.619 15.1149 396.31 9.79913 396.31C4.48339 396.31 0.174133 400.619 0.174133 405.935Z"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 3 ? "visible" : "initial"}
        />
        <motion.path
          id="Stage3"
          d="M57.7881 273.823C57.7881 279.139 62.0974 283.448 67.4131 283.448C72.7289 283.448 77.0381 279.139 77.0381 273.823C77.0381 268.507 72.7289 264.198 67.4131 264.198C62.0974 264.198 57.7881 268.507 57.7881 273.823Z"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 2 ? "visible" : "initial"}
        />
        <motion.path
          id="Stage2"
          d="M0.174133 137.816C0.174133 143.132 4.48339 147.441 9.79913 147.441C15.1149 147.441 19.4241 143.132 19.4241 137.816C19.4241 132.5 15.1149 128.191 9.79913 128.191C4.48339 128.191 0.174133 132.5 0.174133 137.816Z"
          variants={circleVariant}
          initial="initial"
          animate={currentStage > 1 ? "visible" : "initial"}
        />
        <motion.path
          id="Stage1"
          d="M58.6191 9.625C58.6191 14.9407 62.9284 19.25 68.2441 19.25C73.5599 19.25 77.8691 14.9407 77.8691 9.625C77.8691 4.30926 73.5599 0 68.2441 0C62.9284 0 58.6191 4.30926 58.6191 9.625Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default ProgressBarMobile;
