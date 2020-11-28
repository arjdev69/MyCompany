import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {COLORS, HP, WP} from 'styles';

import {ButtonCustom, Label} from 'components';
import {lighten} from 'polished';

export const Form = styled.View`
  width: 100%;
  margin: 15px 0;
`;

export const Button = styled(ButtonCustom)`
  align-items: center;
  background: ${COLORS.transparentDarkColor};
  border-radius: 5px;
  padding: 20px;
  width: 70%;
  margin-top: 25px;
`;

export const Text = styled(Label)`
  color: #fff;
  font-size: 16px;
`;

export const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    padding: 30,
    width: WP('100%'),
  },
  boxInput: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomColor: COLORS.lightColor,
    borderBottomWidth: 0.3,
  },
  input: {
    flex: 1,
    color: COLORS.lightColor,
    fontSize: HP('1.8%'),
    margin: 15,
    marginLeft: 10,
    letterSpacing: 1,
  },
  error: {
    color: COLORS.errorColor,
    borderBottomColor: COLORS.errorColor,
  },
});
