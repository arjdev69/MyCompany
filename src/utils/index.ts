import {Alert, Linking} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
//import Clipboard from '@react-native-community/clipboard';

export const openWebUrl = async (url: string) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
};

export const removeItem = async (number: any) => {
  try {
    const items = await AsyncStorage.getItem('list');
    let postsFav = JSON.parse(items);
    const postsItems = postsFav.filter(function (e: {number: any}) {
      return e.number !== number;
    });

    // updating 'posts' with the updated 'postsItems'
    await AsyncStorage.setItem('list', JSON.stringify(postsItems));
  } catch (error) {
    console.log('error: ', error);
  }
};

export const asyncFetch = async (_url: RequestInfo) => {
  fetch(_url)
    .then((response) => response.json())
    .then((jsonData) => {
      return jsonData;
    })
    .catch((error) => {
      console.error(error);
    });
};

// export const copyToClipboard = (_item: string) => {
//   Clipboard.setString(_item);
// };

// export const fetchCopiedText = async () => {
//   const text = await Clipboard.getString();
//   return text;
// };
