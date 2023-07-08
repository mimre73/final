import {extendTheme} from 'native-base';

const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      100: '#FFF8E8',
      200: '#FFE4A4',
      300: '#FED676',
      400: '#FEC949',
      500: '#FEBB1B',
      600: '#FEBB1B',
      700: '#FEBB1B',
      800: '#FEBB1B',
      900: '#FEBB1B',
    },
    secondary: {
      100: '#FFF8E8',
      200: '#FFE4A4',
      300: '#FED676',
      400: '#FEC949',
      500: '#FEBB1B',
    },
    success: {
      100: '#4ADE80',
      200: '#4ADE80',
      300: '#4ADE80',
      400: '#4ADE80',
      500: '#4ADE80',
      600: '#4ADE80',
      700: '#4ADE80',
      800: '#4ADE80',
      900: '#4ADE80',
    },
    info: {
      100: '#246BFD',
      200: '#246BFD',
      300: '#246BFD',
      400: '#246BFD',
      500: '#246BFD',
      600: '#246BFD',
      700: '#246BFD',
      800: '#246BFD',
      900: '#246BFD',
    },
    warning: {
      100: '#FACC15',
      200: '#FACC15',
      300: '#FACC15',
      400: '#FACC15',
      500: '#FACC15',
      600: '#FACC15',
      700: '#FACC15',
      800: '#FACC15',
      900: '#FACC15',
    },
    error: {
      100: '#F75555',
      200: '#F75555',
      300: '#F75555',
      400: '#F75555',
      500: '#F75555',
      600: '#F75555',
      700: '#F75555',
      800: '#F75555',
      900: '#F75555',
    },
  },
  config: {
    initialColorMode: 'light',
  },
  fontConfig: {
    Urbanist: {
      100: {
        normal: 'Urbanist-Thin',
      },
      200: {
        normal: 'Urbanist-ExtraLight',
      },
      300: {
        normal: 'Urbanist-Light',
      },
      400: {
        normal: 'Urbanist-Regular',
      },
      500: {
        normal: 'Urbanist-Medium',
      },
      600: {
        normal: 'Urbanist-Bold',
      },
      700: {
        normal: 'Urbanist-SemiBold',
      },
      800: {
        normal: 'Urbanist-ExtraBold',
      },
      900: {
        normal: 'Urbanist-Black',
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Urbanist',
    body: 'Urbanist',
    mono: 'Urbanist',
  },

  // components
  components: {
    Button: {
      baseStyle: {
        borderRadius: 100,
        height: 60,
      },
      defaultProps: {
        _text: {
          color: 'black',
          fontSize: 16,
          fontWeight: 700,
        },
      },
    },
    Input: {
      baseStyle: {
        background: '#FAFAFA',
        borderRadius: 12,
        border: 'none',
        _input: {
          bg: '#f1f1f1',
        },
        _text: {
          fontSize: 14,
        },
      },
      defaultProps: {
        variant: 'filled',
      },
    },
    Checkbox: {
      baseStyle: {
        borderColor: 'primary.500',
        _text: {
          fontWeight: 600,
          fontSize: 14,
        },
      },
    },
    Divider: {
      baseStyle: {
        backgroundColor: '#EEEEEE',
      },
    },
  },
});
export default theme;
