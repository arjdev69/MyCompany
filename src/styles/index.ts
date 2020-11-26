import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {lighten} from 'polished';

export const WP = wp;
export const HP = hp;

export const COLORS = {
  primary: lighten(0.001, '#e09400'),
  primaryLight: '#e7e7e7',
  primaryDark: '#262321',
  primaryText: '#C5C4C9',
  primaryTextDark: '#7D7C82',
  primaryTextLight: '#D3D3E3',
  /*----*/
  secondary: '#ab7455',
  secondaryLight: '#FDB933',
  secondaryDark: '#97734a',
  secondaryText: '#ae7850',
  secondaryTextLight: '#e1a87e',
  secondaryTextDark: '#79492f',
  /*------*/
  neutral: '#f2f2f2',
  neutralLight: '#f2f2f2',
  neutralDark: '#71706f',
  neutralText: '#f9f9f9',
  neutralTextLight: '#ffeded',
  neutralTextDark: '#bbb',
  /*------*/
  lightColor: '#FFF',
  darkColor: '#000',

  /*----*/
  transparentLoadColor: '#000000b8',
  transparentLightColor: '#FFF5',
  transparentDarkColor: '#0005',
};

export const SIZES = {
  titleMenu: 20,
  titleMenuSpacing: 4,
  heightMenuMain: 8,
  font: 24,
  bdRadius: 8,
};
