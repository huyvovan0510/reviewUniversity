import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {scaleSize} from 'utils';

const listScreens = [{id: '1', screen: 'SortList'}];

const Animated = ({navigation}) => {
  const onPressItem = item => {
    navigation.navigate(item?.screen);
  };

  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        style={styles.item}
        key={index}
        onPress={() => {
          onPressItem(item);
        }}>
        <Text>{item?.screen}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{listScreens.map(renderItem)}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: scaleSize(40),
    justifyContent: 'center',
    paddingHorizontal: scaleSize(20),
  },
});
export default Animated;
