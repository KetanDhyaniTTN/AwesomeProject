// import React, {useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './src/screenModules/HomeScreen';
// import DetailScreen from './src/screenModules/DetailsScreen';
// const Stack = createNativeStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Detail" component={DetailScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default App;

import * as React from 'react';
import NavigationStack from './src/navigation/Navigation';
import HomeScreen from './src/screenModules/HomeScreen';

const App = () => {
  return <HomeScreen />;
};

export default App;
