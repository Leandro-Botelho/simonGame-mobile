import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type IStackParams = {
  Home: undefined;
  Play: undefined;
  Loser: undefined;
};

type IStackNavigationProps<T extends keyof IStackParams> =
  NativeStackNavigationProp<IStackParams, T>;

type IStackRouteProps<T extends keyof IStackParams> = RouteProp<
  IStackParams,
  T
>;

export interface IStackScreenProps<T extends keyof IStackParams> {
  navigation?: IStackNavigationProps<T>;
  route?: IStackRouteProps<T>;
}
