const Underline = ({ width = 127, fill = "#6364d9" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height="5" viewBox="0 0 127 5">
      <g transform="translate(-611 -925)">
        <path
          d="M104,2.5H0A2.5,2.5,0,0,1-2.5,0,2.5,2.5,0,0,1,0-2.5H104A2.5,2.5,0,0,1,106.5,0,2.5,2.5,0,0,1,104,2.5Z"
          transform="translate(631.5 927.5)"
          fill={fill}
        />
        <path
          d="M6,2.5H0A2.5,2.5,0,0,1-2.5,0,2.5,2.5,0,0,1,0-2.5H6A2.5,2.5,0,0,1,8.5,0,2.5,2.5,0,0,1,6,2.5Z"
          transform="translate(613.5 927.5)"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default Underline;
