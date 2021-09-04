import deepEqual from 'deep-equal';
import {memo} from 'react';
import {Dimensions} from 'react-native';
const guidelineBaseWidth = 375;
const DEVICE_WIDTH = Dimensions.get('window').width;

export const scaleSize = size => (DEVICE_WIDTH / guidelineBaseWidth) * size;

export const deepMemo = component => {
  return memo(component, (prevProps, nextProps) =>
    deepEqual(prevProps, nextProps),
  );
};
