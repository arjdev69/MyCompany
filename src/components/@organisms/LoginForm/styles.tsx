import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {COLORS, HP} from 'styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${COLORS.transparentDarkColor};
  margin: 70px 15px;
  border-radius: 25px;
`;

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
