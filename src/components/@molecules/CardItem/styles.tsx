import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

import {Label} from 'components';

import {COLORS, HP, WP} from 'styles';

export const Title = styled(Label)`
  color: #fff;
  margin: 20px;
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
    fontSize: 22,
    padding: 5,
  },
  title: {
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.3,
    borderColor: COLORS.lightColor,
    borderTopColor: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: COLORS.transparentDarkColor,
  },
  tag: {
    backgroundColor: COLORS.transparentDarkColor,
    margin: 10,
    borderRadius: 40,
    padding: 15,
    fontSize: 18,
  },
  button: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
