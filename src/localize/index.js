import I18n from 'react-native-i18n';
import * as RNLocalize from 'react-native-localize';
import en from './en.json';
import vi from './vi.json';
import {I18nManager} from 'react-native';

const translationGetters = {
  en: () => require('./en.json'),
  vi: () => require('./vi.json'),
};

export const getLanguage = callback => {
  const {languageTag = 'vi', isRTL = false} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters));
  I18nManager.forceRTL(isRTL);
  I18n.translations = {[languageTag]: translationGetters[languageTag]()};
  I18n.locale = languageTag;
  // callback
  callback && callback();
};

export const t = (key, config) => I18n.t(key, config);
