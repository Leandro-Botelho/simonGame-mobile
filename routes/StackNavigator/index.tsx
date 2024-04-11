import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home";
import Play from "../../screens/Game";
import Loser from "../../screens/Loser";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Play"
          component={Play}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Loser"
          component={Loser}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
