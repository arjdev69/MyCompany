import {StyleSheet} from 'react-native';

import {lighten, transparentize} from 'polished';

import {COLORS, HP} from 'styles';

export const styles = StyleSheet.create({
  viewModal: {
    paddingTop: 30,
    backgroundColor: COLORS.transparentDarkColor,
  },
  button: {
    margin: 10,
  },
  boxButton: {
    alignItems: 'center',
  },
  buttonItem: {
    padding: 15,
    width: '100%',
    backgroundColor: transparentize(0.3, COLORS.darkColor),
  },
  label: {
    color: COLORS.lightColor,
  },
  btnClearFilter: {
    padding: 10,
  },
});
