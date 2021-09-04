import Image from 'components/Image';
import React, {useRef} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {scaleSize} from 'utils';
import images from 'assets/images';
import Colors from 'utils/Colors';
import Screens from 'navigation/Screens';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const {width: screenWidth} = Dimensions.get('window');
const TABBAR_WIDTH = screenWidth - 10;
const TAB_ITEM_WIDTH = scaleSize(TABBAR_WIDTH / 3);

const getTabIcon = tabName => {
  switch (tabName) {
    case Screens.Home:
      return images.ic_home;
    case Screens.Details:
      return images.ic_location;
    case Screens.Setting:
      return images.ic_setting;
    default:
      return images.ic_setting;
  }
};

const CustomizeTab = props => {
  const {navigation = {}, state = {}} = props || {};
  const {routes = [], index: activeTabIndex} = state || {};
  const activeAnimated = useSharedValue(0);

  const activeLineStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: activeAnimated.value * TAB_ITEM_WIDTH}],
    };
  });

  const navigate = (routeName, indexTab) => {
    if (routeName) {
      activeAnimated.value = withSpring(indexTab);
      navigation?.navigate(routeName);
    }
  };

  const renderTabItems = (itemTab, indexTab) => {
    const {key = '', name = ''} = itemTab;
    const active = indexTab === activeTabIndex;
    const tabIcon = getTabIcon(name);

    return (
      <TouchableOpacity
        key={`item-main-tab-${key}`}
        style={styles.tabItems}
        activeOpacity={0.8}
        onPress={() => {
          if (indexTab !== activeTabIndex) {
            navigate(name, indexTab);
          }
        }}>
        <Image
          source={tabIcon}
          style={[
            styles.icTabar,
            {
              tintColor: active ? Colors.MALACHITE : Colors.SLIVER_CHALICE,
            },
          ]}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.tabContainer}>
      {routes?.map(renderTabItems)}
      <Animated.View style={[styles.hightLight, activeLineStyle]}>
        <View style={styles.under} />
      </Animated.View>
    </View>
  );
};

export default React.memo(CustomizeTab);
const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: scaleSize(20),
    flexDirection: 'row',
    height: scaleSize(60),
    backgroundColor: Colors.WHITE,
    width: scaleSize(TABBAR_WIDTH),
    alignSelf: 'center',
    borderRadius: scaleSize(12),
    shadowColor: Colors.BLACK_80_PERCENT,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10.84,

    elevation: 5,
  },
  icTabar: {
    width: scaleSize(18),
    height: scaleSize(18),
  },
  tabItems: {
    alignItems: 'center',
    justifyContent: 'center',
    width: TAB_ITEM_WIDTH,
  },
  hightLight: {
    width: TAB_ITEM_WIDTH,
    ...StyleSheet.absoluteFillObject,
    height: 8,
    top: scaleSize(45),
    justifyContent: 'center',
    alignItems: 'center',
  },
  under: {
    backgroundColor: Colors.MALACHITE,
    width: scaleSize(5),
    height: scaleSize(5),
    borderRadius: scaleSize(10),
    overflow: 'hidden',
  },
});
