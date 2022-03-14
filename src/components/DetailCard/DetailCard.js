import React from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import styles from './DetailCard.style';

function DetailCard({meal}) {
  const youtubeUrl = meal.strYoutube;
  function handlePress() {
    Linking.openURL(youtubeUrl);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: meal.strMealThumb}} />
      <View style={styles.divider}>
        <Text style={styles.title}>{meal.strMeal}</Text>
        <Text style={styles.subTitle}>{meal.strArea}</Text>
      </View>
      <Text style={styles.instructions}>{meal.strInstructions}</Text>

      {youtubeUrl ? (
        <TouchableOpacity style={styles.youContainer} onPress={handlePress}>
          <Text style={styles.youText}>Wiev on YouTube</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

export default DetailCard;
