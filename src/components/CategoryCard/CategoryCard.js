import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoryCard.style';

function CategoryCard({category, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image source={{uri: category.strCategoryThumb}} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{category.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CategoryCard;
