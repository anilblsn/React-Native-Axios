import React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import styles from './MealCard.style';

function MealCard({meal, onSelect}) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onSelect}>
        <ImageBackground source={{uri: meal.strMealThumb}} style={styles.image}>
          <Text style={styles.title} numberOfLines={1}>
            {meal.strMeal}
          </Text>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default MealCard;
