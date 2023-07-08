import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';
const RadioSelectedSvg = () => (
  <Svg width={20} height={21} fill="none">
    <Circle cx={10} cy={10.5} r={8.5} stroke="#FEBB1B" strokeWidth={3} />
    <Circle cx={10} cy={10.5} r={5.833} fill="#FEBB1B" />
  </Svg>
);
export default RadioSelectedSvg;
