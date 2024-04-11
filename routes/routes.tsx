import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

const RouteNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default RouteNavigator;
