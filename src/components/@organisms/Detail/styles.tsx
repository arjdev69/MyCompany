import {StyleSheet} from 'react-native';

import {COLORS, HP} from 'styles';

export const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.transparentDarkColor,
    padding: 0,
    margin: 0,
  },
  viewDescription: {
    flex: 1,
  },
  label: {
    fontSize: 24,
    color: COLORS.lightColor,
    textAlign: 'justify',
  },
});
