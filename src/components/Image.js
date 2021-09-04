import images from '../assets/images';
import React from 'react';
import {ImageBackground, Image as RNImage} from 'react-native';
import FastImage from 'react-native-fast-image';
import {deepMemo} from 'utils';

interface IProps {
  source: String | Number;
  useFastImage?: Boolean;
}

const getSource = source => {
  let newSource = source;
  if (typeof source === 'string') {
    newSource = {uri: source};
  }
  return newSource;
};

const Image = (props: IProps) => {
  const {source = images.ic_home, children, useFastImage = true} = props || {};
  let image = getSource(source);
  let ImageComponent = children ? ImageBackground : RNImage;

  const getUriImage = uri => {
    return uri !== null &&
      uri !== undefined &&
      uri.includes('/') &&
      uri.includes('.')
      ? uri
      : '';
  };

  if (useFastImage && image?.uri) {
    return (
      <FastImage
        {...props}
        source={{
          uri: getUriImage(image.uri),
          cache: FastImage.cacheControl.immutable,
        }}
      />
    );
  }

  return <ImageComponent resizeMode="contain" {...props} source={image} />;
};
export default deepMemo(Image);
