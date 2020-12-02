import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

import {Label} from 'components';

import {COLORS, HP, WP} from 'styles';

export const Tag = styled(Label)`
  color: #fff;
  margin: 20px;
  background: ${COLORS.transparentDarkColor};
  border-radius: 40px;
  padding: 10px;
`;

export const styles = StyleSheet.create({
  box: {
    height: HP('30%'),
    padding: 0,
    backgroundColor: COLORS.transparentDarkColor,
    margin: 0,
    marginBottom: 1,
  },
  boxLabels: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  label: {
    color: COLORS.lightColor,
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 24,
  },
  title: {
    height: '25%',
    width: '100%',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.3,
    borderColor: COLORS.lightColor,
    borderTopColor: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: COLORS.transparentDarkColor,
  },
  button: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
