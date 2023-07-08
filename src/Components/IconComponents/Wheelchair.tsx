import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const WheelchairSvg = () => (
  <Svg fill="none" width={26} height={26}>
    <Path
      stroke="#EBAD18"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.25 18.417a5.417 5.417 0 1 1-7.583-4.966M11.916 4.333a1.083 1.083 0 1 0 0-2.166 1.083 1.083 0 0 0 0 2.166Z"
    />
    <Path
      stroke="#EBAD18"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m20.584 23.292-1.738-6.517a2.167 2.167 0 0 0-2.094-1.608h-4.835V7.583l6.5 3.25"
    />
  </Svg>
);
export default WheelchairSvg;
