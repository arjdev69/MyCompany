import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {COLORS, HP} from 'styles';

export const Container = styled.View``;

export const styles = StyleSheet.create({
  boxNotFound: {
    height: HP('100%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelNotFound: {
    color: COLORS.primary,
    fontSize: 32,
  },
});
