import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {darken, lighten} from 'polished';

export const WP = wp;
export const HP = hp;

export const COLORS = {
  primary: '#2b3870',
  primaryLight: lighten(0.1, '#2b3870'),
  primaryDark: darken(0.19, '#2b3870'),
  primaryText: '#C5C4C9',
  primaryTextDark: '#7D7C82',
  primaryTextLight: '#D3D3E3',
  /*----*/
  secondary: '#1b1a2a',
  secondaryLight: lighten(0.1, '#1b1a2a'),
  secondaryDark: darken(0.19, '#1b1a2a'),
  secondaryText: '#1b1a2a',
  secondaryTextLight: '#1b1a2a',
  secondaryTextDark: '#1b1a2a',
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

  nextColor: '#52284f',

  /*----*/
  transparentLoadColor: '#000000b8',
  transparentLightColor: '#FFF5',
  transparentDarkColor: '#0005',
};

export const SIZES = {
  gradient: {
    position: {
      start: {
        x: 1.1,
        y: 0.6,
      },
      end: {
        x: 0,
        y: 0.2,
      },
    },
    location: [0.1, 0.5, 0.7],
  },
  titleMenu: 20,
  titleMenuSpacing: 4,
  heightMenuMain: 8,
  font: 24,
  bdRadius: 8,
};
