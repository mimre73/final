import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const CopySvg = () => (
  <Svg width={21} height={20} fill="none">
    <Path
      fill="#FEBB1B"
      d="M17.166 1.667H8.833a1.667 1.667 0 0 0-1.667 1.667v1.667h6.667a1.667 1.667 0 0 1 1.666 1.666v6.667h1.667a1.666 1.666 0 0 0 1.667-1.666V3.334a1.667 1.667 0 0 0-1.667-1.667Z"
    />
    <Path
      fill="#FEBB1B"
      d="M3.833 18.333h8.333c.92 0 1.667-.747 1.667-1.666V8.332c0-.919-.748-1.667-1.667-1.667H3.833c-.92 0-1.667.748-1.667 1.667v8.333c0 .92.748 1.667 1.667 1.667ZM5.499 10h5v1.666h-5V10Zm0 3.333h5V15h-5v-1.667Z"
    />
  </Svg>
);
export default CopySvg;
