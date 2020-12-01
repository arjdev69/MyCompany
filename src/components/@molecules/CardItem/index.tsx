import React from 'react';
import * as UI from 'react-native';

import {Label, Box} from 'components';
import {ICON_LOGO} from 'utils/images';

import {styles} from './styles';

export interface Props {
  title: string;
  tag: string;
  styles: {};
  url: {};
  urlLoad: {};
  onPress: any;
}

const CardItem: React.FC<Props> = _props => {
  return (
    <Box styles={styles.box}>
      <UI.ImageBackground
        style={[_props.styles, styles.image]}
        source={_props.url ? _props.url : ICON_LOGO}
        progressiveRenderingEnabled={true}
        loadingIndicatorSource={_props.urlLoad}>
        <Box styles={styles.boxLabels}>
          <Label style={[styles.label, styles.title]}>{_props.title}</Label>
          <Label style={[styles.label, styles.tag]}>{_props.tag}</Label>
        </Box>
      </UI.ImageBackground>
    </Box>
  );
};

export default CardItem;
