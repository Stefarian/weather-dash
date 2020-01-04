import React from "react";

function SvgSnow(props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <path
        fillRule="evenodd"
        d="M63.999 64.943v-4.381a7.993 7.993 0 003.999-6.922 8 8 0 00-7.999-7.998c-1.6 0-3.083.48-4.333 1.291-1.231-5.317-5.974-9.291-11.665-9.291-6.627 0-11.998 5.373-11.998 12 0 3.549 1.55 6.729 4 8.924v4.916c-4.777-2.768-8-7.922-8-13.84 0-8.836 7.163-15.999 15.998-15.999 6.004 0 11.229 3.312 13.965 8.204.664-.113 1.337-.205 2.033-.205 6.627 0 11.999 5.373 11.999 11.998 0 5.223-3.343 9.653-7.999 11.303zm-21.998-7.302a2 2 0 110 4 2 2 0 010-4zm0 8a2 2 0 11.001 3.999 2 2 0 01-.001-3.999zm8-4a2 2 0 110 4 2 2 0 010-4zm0 7.998A2 2 0 1150 73.64a2 2 0 010-4zm7.998-11.998a2 2 0 110 4 2 2 0 010-4zm0 8A2 2 0 1158 69.64a2 2 0 010-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSnow;