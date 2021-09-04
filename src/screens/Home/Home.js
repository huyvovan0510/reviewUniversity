import images from 'assets/images';
import Image from 'components/Image';
import {t} from 'localize';
import Screens from 'navigation/Screens';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import {scaleSize} from 'utils';
import Colors from 'utils/Colors';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('screen');
const WIDTH_ITEM = scaleSize(width * 0.8);
const HEIGHT_ITEM = scaleSize(350);

const data = [
  {
    id: 1,
    images: [
      {
        id: '1',
        imgSrc:
          'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      },
      {
        id: '2',
        imgSrc:
          'https://images.pexels.com/photos/2385210/pexels-photo-2385210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '3',
        imgSrc:
          'https://images.pexels.com/photos/5220130/pexels-photo-5220130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '4',
        imgSrc:
          'https://images.pexels.com/photos/3014738/pexels-photo-3014738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '5',
        imgSrc:
          'https://images.pexels.com/photos/4012903/pexels-photo-4012903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
    ],
    title: 'Japan tour',
    desc: 'Great experience with Japanese culture and people',
  },
  {
    id: 2,
    images: [
      {
        id: '1',
        imgSrc:
          'https://images.pexels.com/photos/58597/pexels-photo-58597.jpeg?cs=srgb&dl=pexels-foc-foodoncam-58597.jpg&fm=jpg',
      },
      {
        id: '2',
        imgSrc:
          'https://images.pexels.com/photos/4327790/pexels-photo-4327790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '3',
        imgSrc:
          'https://images.pexels.com/photos/2230346/pexels-photo-2230346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '4',
        imgSrc:
          'https://images.pexels.com/photos/3014738/pexels-photo-3014738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '5',
        imgSrc:
          'https://images.pexels.com/photos/4012903/pexels-photo-4012903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
    ],
    title: 'Japan tour',
    desc: 'Great experience with Japanese culture and people',
  },
  {
    id: 1,
    images: [
      {
        id: '1',
        imgSrc:
          'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      },
      {
        id: '2',
        imgSrc:
          'https://images.pexels.com/photos/2385210/pexels-photo-2385210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '3',
        imgSrc:
          'https://images.pexels.com/photos/5220130/pexels-photo-5220130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '4',
        imgSrc:
          'https://images.pexels.com/photos/3014738/pexels-photo-3014738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '5',
        imgSrc:
          'https://images.pexels.com/photos/4012903/pexels-photo-4012903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
    ],
    title: 'Japan tour',
    desc: 'Great experience with Japanese culture and people',
  },
  {
    id: 3,
    images: [
      {
        id: '1',
        imgSrc:
          'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      },
      {
        id: '2',
        imgSrc:
          'https://images.pexels.com/photos/2385210/pexels-photo-2385210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '3',
        imgSrc:
          'https://images.pexels.com/photos/5220130/pexels-photo-5220130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '4',
        imgSrc:
          'https://images.pexels.com/photos/3014738/pexels-photo-3014738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '5',
        imgSrc:
          'https://images.pexels.com/photos/4012903/pexels-photo-4012903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
    ],
    title: 'Japan tour',
    desc: 'Great experience with Japanese culture and people',
  },
  {
    id: 4,
    images: [
      {
        id: '1',
        imgSrc:
          'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      },
      {
        id: '2',
        imgSrc:
          'https://images.pexels.com/photos/2385210/pexels-photo-2385210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '3',
        imgSrc:
          'https://images.pexels.com/photos/5220130/pexels-photo-5220130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '4',
        imgSrc:
          'https://images.pexels.com/photos/3014738/pexels-photo-3014738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '5',
        imgSrc:
          'https://images.pexels.com/photos/4012903/pexels-photo-4012903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
    ],
    title: 'Japan tour',
    desc: 'Great experience with Japanese culture and people',
  },
  {
    id: 5,
    images: [
      {
        id: '1',
        imgSrc:
          'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      },
      {
        id: '2',
        imgSrc:
          'https://images.pexels.com/photos/2385210/pexels-photo-2385210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '3',
        imgSrc:
          'https://images.pexels.com/photos/5220130/pexels-photo-5220130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '4',
        imgSrc:
          'https://images.pexels.com/photos/3014738/pexels-photo-3014738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '5',
        imgSrc:
          'https://images.pexels.com/photos/4012903/pexels-photo-4012903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
    ],
    title: 'Japan tour',
    desc: 'Great experience with Japanese culture and people',
  },
];

const renderItem = ({item, index}) => {
  return (
    <View style={styles.items}>
      <View>
        <Image source={item?.images[index]?.imgSrc} style={styles.itemCover}>
          <LinearGradient
            colors={[Colors.TRANSPARENT, Colors.BLACK_80_PERCENT]}
            style={styles.linearGradient}>
            <Text style={styles.itemTitle}>{item?.title}</Text>
            <Text style={styles.itemDesc}>{item?.desc}</Text>
          </LinearGradient>
        </Image>
      </View>
    </View>
  );
};

const Home = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView styles={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {"Let's make \nYour dream vacation."}
          </Text>
        </View>

        <View style={{paddingHorizontal: scaleSize(16)}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: scaleSize(20),
            }}>
            <Text style={styles.label}>{'Recommended'}</Text>
            <Image style={styles.icOptions} source={images.ic_options} />
          </View>
          <FlatList
            horizontal
            data={data}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => `${item.id}-${index}`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  title: {
    marginHorizontal: scaleSize(16),
    fontSize: scaleSize(25),
    fontFamily: 'CreteRound-Regular',
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: scaleSize(20),
  },
  icNotification: {
    width: scaleSize(20),
    height: scaleSize(20),
  },
  label: {
    fontFamily: 'CreteRound-Regular',
    fontSize: scaleSize(18),
  },
  icOptions: {
    width: scaleSize(25),
    height: scaleSize(25),
    tintColor: Colors.SLIVER_CHALICE,
  },
  items: {
    width: WIDTH_ITEM,
    marginRight: scaleSize(30),
  },
  itemCover: {
    width: WIDTH_ITEM,
    height: HEIGHT_ITEM,
    borderRadius: scaleSize(16),
    justifyContent: 'flex-end',
  },
  linearGradient: {
    height: scaleSize(250),
    justifyContent: 'flex-end',
    paddingHorizontal: scaleSize(10),
    paddingBottom: scaleSize(10),
  },
  itemTitle: {
    color: Colors.WHITE,
    fontFamily: 'CreteRound-Regular',
    fontSize: scaleSize(23),
    fontWeight: 'bold',
    marginBottom: scaleSize(10),
  },
  itemDesc: {
    color: Colors.WHITE,
    fontSize: scaleSize(14),
  },
});
