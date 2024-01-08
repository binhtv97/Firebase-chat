import React from 'react';
import {ImageStyle, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {CustomButton} from '../Button';
import {Images, responsiveHeight, responsiveWidth} from 'src/Themes';

export interface ButtonItemProps {
  onPress?: () => void;
  icon?: keyof typeof Images;
  buttonStyle?: StyleProp<ImageStyle>;
}
export interface ButtonGroupProps {
  style: StyleProp<ViewStyle>;
  item?: ButtonItemProps[];
}
export const ButtonGroup = ({style, item = []}: ButtonGroupProps) => {
  const renderItem = () => {
    return item
      .map((_item, index) => {
        const {onPress = () => {}, icon, buttonStyle} = _item;
        return (
          <CustomButton
            key={`button-${index}`}
            onPress={onPress}
            icon={icon}
            iconStyle={[styles.icon, buttonStyle]}
            position="left"
            isDefault={false}
          />
        );
      })
      .reverse();
  };
  return <View style={[style]}>{renderItem()}</View>;
};

const styles = StyleSheet.create({
  icon: {
    width: responsiveWidth(20),
    height: responsiveHeight(20),
  },
});