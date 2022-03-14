import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import CategoryCard from '../components/CategoryCard';
import Config from 'react-native-config';
import useFetch from '../hooks/useFetch';

function Categories({navigation}) {
  const {data, loading, error} = useFetch(Config.CATEGORIES_API_KEY);

  function handlePress(item) {
    navigation.navigate('MealsPage', {item});
  }

  const renderItem = ({item}) => (
    <CategoryCard category={item} onSelect={() => handlePress(item)} />
  );

  if (loading) {
    return <Text>LOADING</Text>;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data.categories}
        renderItem={renderItem}
        keyExtractor={item => item.idCategory}
      />
    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    padding: 10,
  },
});
