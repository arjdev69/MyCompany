import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {COLORS, HP, WP} from 'styles';

export const Container = styled.View``;

export const styles = StyleSheet.create({
  header: {
    height: HP('30%'),
    backgroundColor: COLORS.primary,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: WP('20%'),
    borderRadius: 40,
    marginBottom: 10,
    resizeMode: 'cover',
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
