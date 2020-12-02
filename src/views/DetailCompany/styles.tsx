import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {COLORS, HP} from 'styles';

export const Container = styled.View``;

export const styles = StyleSheet.create({
  headerTitle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 15,
    marginLeft: -30,
  },
  boxLabels: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  viewLabel: {
    width: '30%',
    borderRadius: 10,
    backgroundColor: COLORS.transparentDarkColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  text: {
    color: COLORS.lightColor,
    fontWeight: 'bold',
  },
});
