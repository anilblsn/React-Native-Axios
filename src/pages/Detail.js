import React from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../hooks/useFetch';
import Config from 'react-native-config';
import DetailCard from '../components/DetailCard';

function Detail({route}) {
  const {item} = route.params;
  const mealId = item.idMeal;
  const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealId;
  const {data, loading, error} = useFetch(url);

  const renderDetail = ({item}) => <DetailCard meal={item} />;

  if (loading) {
    return <Text>LOADING</Text>;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <FlatList data={data.meals} renderItem={renderDetail} />
    </View>
  );
}

export default Detail;
