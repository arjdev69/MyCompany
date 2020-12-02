import * as UI from 'react-native';

import styled from 'styled-components/native';

import {COLORS} from 'styles';

export const Container = styled.View``;

export const styles = UI.StyleSheet.create({
  box: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.transparentDarkColor,
    paddingRight: 5,
    paddingLeft: 5,
  },
  viewSearch: {
    flex: 1,
    padding: 15,
  },
  label: {
    color: COLORS.lightColor,
    fontSize: 16,
  },
});
