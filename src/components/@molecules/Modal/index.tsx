import React from 'react';
import * as UI from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import {setVisibleModal} from 'store/modules/Modal/actions';

import {styles} from './styles';
export interface Props {
  name: string;
  icon: any;
  children: any;
  transparent: any;
  animationType: any;
  stylesModal: {};
  stylesIcon: {};
  label: string;
  viewBtn: boolean;
}

const ModalComp: React.FC<Props> = (_props) => {
  const dispatch = useDispatch();
  const {visible} = useSelector((state: any) => state.Modal);

  let visibleModal: {
    [X: number]: boolean;
  };

  const setModalVisible = (_name: any, _visible: boolean) => {
    visibleModal = {[_name]: _visible};
    dispatch(setVisibleModal(visibleModal));
  };

  return (
    <UI.View>
      <UI.Modal
        {..._props}
        visible={visible[_props.name] ? visible[_props.name] : false}
        onDismiss={() => {
          setModalVisible(_props.name, false);
        }}>
        <UI.View style={[styles.parentChildren, _props.stylesModal]}>
          {_props.children}
          <UI.TouchableOpacity
            style={styles.closeButton2}
            onPress={() => {
              setModalVisible(_props.name, !visible[_props.name]);
            }}>
            <UI.Text />
          </UI.TouchableOpacity>
          <UI.TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setModalVisible(_props.name, !visible[_props.name]);
            }}>
            <UI.Text style={styles.textStyle}>X</UI.Text>
          </UI.TouchableOpacity>
        </UI.View>
      </UI.Modal>
      {_props.viewBtn && (
        <UI.TouchableOpacity
          style={styles.openButton}
          onPress={() => {
            setModalVisible(_props.name, true);
          }}>
          <UI.View style={styles.boxImage}>
            <UI.Image
              style={[styles.stretch, _props.stylesIcon]}
              source={_props.icon}
            />
            <UI.Text style={styles.textStyle}>{_props.label}</UI.Text>
          </UI.View>
        </UI.TouchableOpacity>
      )}
    </UI.View>
  );
};

export default ModalComp;
