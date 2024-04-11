import { createBox } from "@shopify/restyle";
import BoxGame from "../../Components/BoxGame";
import BoxItem from "../../Components/BoxGame/components/BoxItem";
import { ThemeProps } from "../../theme";
import { IStackScreenProps } from "../../routes/StackNavigator/models";
import { Text } from "react-native";

const Box = createBox<ThemeProps>();

const Play = ({ navigation }: IStackScreenProps<"Play">) => {
  const handleNavigate = () => {
    navigation && navigation.navigate("Loser");
  };

  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg="primary">
      <Box
        gap="m"
        flexDirection="row"
        width={"100%"}
        flexWrap="wrap"
        p="xl"
        justifyContent="center"
      >
        <BoxItem
          bgColor="boxGreen"
          opacity={0.5}
          style={{ borderTopLeftRadius: 125 }}
        />
        <BoxItem
          bgColor="boxRed"
          opacity={0.5}
          style={{ borderTopRightRadius: 125 }}
        />
        <BoxItem
          bgColor="boxYellow"
          opacity={0.5}
          style={{ borderBottomLeftRadius: 125 }}
        />
        <BoxItem
          bgColor="boxBlue"
          opacity={0.5}
          style={{ borderBottomRightRadius: 125 }}
        />
      </Box>
    </Box>
  );
};

export default Play;
