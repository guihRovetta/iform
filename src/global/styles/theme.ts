import { moderateScale } from 'react-native-size-matters';

export default {
  fonts: {
    light: 'Lato_300Light',
    regular: 'Lato_400Regular',
    bold: 'Lato_700Bold',
  },
  fontSize: {
    xsmall: moderateScale(8),
    small: moderateScale(10),
    regular: moderateScale(12),
    xregular: moderateScale(14),
    large: moderateScale(16),
    xlarge: moderateScale(24),
    xxlarge: moderateScale(32),
  },
  colors: {
    background: '#FFFFFF',
    primary: '#FEC260',
    text500: '#292929',
    text400: '#757575',

    grey100: '#EDEDED',
    green500: '#40bc86',
    red500: '#ec555c',
  },
  radii: {
    small: moderateScale(8),
    regular: moderateScale(12),
    large: moderateScale(16),
  },
};
