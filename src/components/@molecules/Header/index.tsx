import React, {useState} from 'react';
import * as UI from 'react-native';

import {CommonActions} from '@react-navigation/native';

import Icons from 'react-native-vector-icons/Ionicons';

import {ButtonCustom, ImageLoad, Label} from 'components';

import {styles} from './styles';
import {ICON_LOGO} from 'utils/images';
import {COLORS} from 'styles';

export interface Props {
  navigation: any;
  url: {};
  title: string;
  styles: {};
  titleStyles: {};
}

const Header: React.FC<Props> = _props => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      {visible && (
        <UI.SafeAreaView style={[styles.header, _props.styles]}>
          <ButtonCustom
            loading={false}
            activeOpacity={0.3}
            style={styles.btnBack}
            onPress={() => {
              setVisible(!visible);
              _props.navigation.dispatch(CommonActions.goBack());
            }}>
            <Icons
              name="md-chevron-back-circle"
              size={30}
              color={COLORS.lightColor}
            />
          </ButtonCustom>
          <UI.View style={[styles.headerTitle, _props.titleStyles]}>
            <ImageLoad
              key={'image'}
              styles={styles.image}
              url={_props.url}
              urlLoad={ICON_LOGO}
            />
            <UI.Text style={styles.headerText}>{_props.title}</UI.Text>
          </UI.View>
          {_props.children}
        </UI.SafeAreaView>
      )}
    </>
  );
};

export default Header;
