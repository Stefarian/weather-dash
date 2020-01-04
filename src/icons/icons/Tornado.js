import React from "react";

function SvgTornado(props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <path
        fillRule="evenodd"
        d="M68.866 36.459H30.871a2 2 0 010-3.999h37.995a2 2 0 010 3.999zm-35.995 4h29.996a2 2 0 010 3.999H32.871a2 2 0 010-3.999zm11.998 7.999h21.998a2 2 0 010 3.999H44.869a2 2 0 010-3.999zm2 15.998h5.999a2 2 0 010 3.999h-5.999a2 2 0 010-3.999zm1-6a2 2 0 012-1.999h13.998a2 2 0 010 3.999H49.869a2 2 0 01-2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgTornado;
