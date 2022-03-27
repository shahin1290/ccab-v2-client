const Border = ({ width = 308, height = 234, fill, children }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 308 234"
      style={{ position: "absolute" }}>
      <path
        d="M307.466 233.415H33.756C24.9391 233.405 16.4862 229.898 10.2516 223.664C4.01707 217.43 0.510058 208.977 0.5 200.16V171.983H7.1V200.16C7.10821 207.226 9.91887 214 14.9154 218.996C19.9119 223.992 26.6862 226.802 33.752 226.81H300.862V195.559H283.31C275.9 195.55 268.795 192.603 263.556 187.363C258.316 182.123 255.368 175.018 255.36 167.608V65.476C255.368 58.0657 258.316 50.9613 263.556 45.7214C268.795 40.4814 275.9 37.5337 283.31 37.525H300.862V7.1H33.756C26.689 7.10794 19.9138 9.91915 14.9172 14.9167C9.92055 19.9143 7.11062 26.69 7.104 33.757V69.983H0.503998V33.757C0.513789 24.9406 4.0201 16.488 10.2538 10.2533C16.4875 4.0187 24.9396 0.511116 33.756 0.5L307.466 0.5V44.129H283.31C277.651 44.1356 272.225 46.3868 268.223 50.3888C264.221 54.3907 261.97 59.8165 261.964 65.476V167.607C261.97 173.266 264.221 178.692 268.223 182.694C272.225 186.696 277.651 188.947 283.31 188.954H307.466V233.413V233.415Z"
        fill={fill}
      />
      {children}
    </svg>
  );
};

export default Border;
