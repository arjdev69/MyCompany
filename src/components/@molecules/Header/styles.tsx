import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {COLORS, HP} from 'styles';

export const Container = styled.View``;

export const styles = StyleSheet.create({
  header: {
    height: HP('25%'),
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 8,
    height: '100%',
  },
  btnBack: {
    flex: 1,
    margin: 15,
  },
  image: {
    padding: 40,
    borderRadius: 40,
    marginBottom: 10,
  },
  headerText: {
    color: COLORS.lightColor,
    fontSize: 16,
  },
  loading: {
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.transparentLoadColor,
  },
});
