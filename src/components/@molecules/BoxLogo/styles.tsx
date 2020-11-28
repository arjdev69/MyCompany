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
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 50,
    padding: 30,
    width: WP('100%'),
  },
  image: {
    height: 94,
    width: 94,
  },
});
