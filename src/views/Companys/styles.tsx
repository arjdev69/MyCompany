import {StyleSheet} from 'react-native';

import {COLORS, WP} from 'styles';

export const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    height: 48,
    width: 48,
    marginBottom: 5,
  },
  headerText: {
    marginBottom: 0,
    padding: 5,
    color: COLORS.lightColor,
    fontWeight: 'bold',
  },
});
