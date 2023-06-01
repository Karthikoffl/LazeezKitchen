import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import OrderScreen from '../screens/OrderScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

function BottomTab({navigation}) {
  return (
    <Tab.Navigator 
        tabBarOptions = {{
            activeTintColor: '#F49F1C'
        }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={
            {
                tabBarLabel : "Home",
                tabBarIcon : ({color,size}) => (
                    <Icon 
                        name = "home"
                        type = "material"
                        color = {color}
                        size = {size}
                    />
                )
            }
        } 
    />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Order" component={OrderScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTab