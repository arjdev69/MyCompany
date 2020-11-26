import * as UI from 'react-native';

import styled from 'styled-components/native';

import {COLORS} from 'styles';

export const Container = styled.View``;

export const styles = UI.StyleSheet.create({
  parentChildren: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#0000',
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: COLORS.neutralDark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    borderRadius: 0,
    padding: 0,
  },
  closeButton: {
    padding: 10,
    width: '100%',
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  closeButton2: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: -1,
  },
  textStyle: {
    color: COLORS.neutralTextLight,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  stretch: {
    width: 42,
    height: 42,
    resizeMode: 'contain',
  },
  boxImage: {
    alignItems: 'center',
    padding: 2,
    margin: 5,
  },
});
