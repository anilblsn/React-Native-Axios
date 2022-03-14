import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'orange',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
          options={{title: 'Categories'}}
        />
        <Stack.Screen
          name="MealsPage"
          component={Meals}
          options={{title: 'Meals'}}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{title: 'Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
