import * as React from 'react';
import Svg, {Circle, Defs, LinearGradient, Stop} from 'react-native-svg';

interface Props extends React.SVGProps<SVGSVGElement> {
  firstColor: string;
  secondColor: string;
}

const OfferSvg = (props: Props) => (
  <Svg width={83} height={80} fill="none">
    <Circle cx={42.5} cy={40.5} r={31.5} fill="url(#a)" />
    <Circle cx={79.5} cy={12.5} r={3.5} fill="url(#b)" />
    <Circle cx={8.5} cy={4.5} r={4.5} fill="url(#c)" />
    <Circle cx={4} cy={59} r={2} fill="url(#d)" />
    <Circle cx={73} cy={71} r={1} fill="url(#e)" />
    <Circle cx={47} cy={2} r={1} fill="url(#f)" />
    <Circle cx={27.5} cy={78.5} r={1.5} fill="url(#g)" />
    <Circle cx={54.5} cy={76.5} r={0.5} fill="url(#h)" />
    <Circle cx={76} cy={49} r={1} fill="url(#i)" />
    <Circle cx={0.5} cy={33.5} r={0.5} fill="url(#j)" />
    <Defs>
      <LinearGradient
        id="a"
        x1={74}
        x2={-0.964}
        y1={72}
        y2={50.265}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={props.firstColor} />
        <Stop offset={1} stopColor={props.secondColor} />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={83}
        x2={74.671}
        y1={16}
        y2={13.585}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={props.firstColor} />
        <Stop offset={1} stopColor={props.secondColor} />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={13}
        x2={2.291}
        y1={9}
        y2={5.895}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={props.firstColor} />
        <Stop offset={1} stopColor={props.secondColor} />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={6}
        x2={1.24}
        y1={61}
        y2={59.62}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={props.firstColor} />
        <Stop offset={1} stopColor={props.secondColor} />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={74}
        x2={71.62}
        y1={72}
        y2={71.31}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={props.firstColor} />
        <Stop offset={1} stopColor={props.secondColor} />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={48}
        x2={45.62}
        y1={3}
        y2={2.31}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={props.firstColor} />
        <Stop offset={1} stopColor={props.secondColor} />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={29}
        x2={25.43}
        y1={80}
        y2={78.965}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={props.firstColor} />
        <Stop offset={1} stopColor={props.secondColor} />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={55}
        x2={53.81}
        y1={77}
        y2={76.655}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={props.firstColor} />
        <Stop offset={1} stopColor={props.secondColor} />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={77}
        x2={74.62}
        y1={50}
        y2={49.31}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={props.firstColor} />
        <Stop offset={1} stopColor={props.secondColor} />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={1}
        x2={-0.19}
        y1={34}
        y2={33.655}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={props.firstColor} />
        <Stop offset={1} stopColor={props.secondColor} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default OfferSvg;
