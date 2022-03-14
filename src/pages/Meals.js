import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import useFetch from '../hooks/useFetch';
import Config from 'react-native-config';
import MealCard from './../components/MealCard';

function Meals({route, navigation}) {
  const {item} = route.params;
  const category = item.strCategory;
  const url = Config.FILTER_API_KEY + category;

  const handleOnSelect = item => {
    navigation.navigate('DetailPage', {item});
  };

  const {data, loading, error} = useFetch(url);

  const renderMeals = ({item}) => (
    <MealCard meal={item} onSelect={() => handleOnSelect(item)} />
  );

  if (loading) {
    return <Text>LOADING</Text>;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeals} />
    </View>
  );
}

export default Meals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
});
