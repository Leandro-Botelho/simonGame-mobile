import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../theme";
import Button from "../../Components/AppButton";
import AppText from "../../Components/AppText";
import BoxGame from "../../Components/BoxGame";
import { IStackScreenProps } from "../../routes/StackNavigator/models";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

const Home = ({ navigation }: IStackScreenProps<"Home">) => {
  const handleNavigate = () => {
    navigation && navigation.navigate("Play");
  };
  return (
    <Box bg="primary" flex={1} justifyContent="center" gap="xl">
      <Box width={"100%"} justifyContent="center" alignItems="center" gap="xl">
        <Text variant="title">Simon Game</Text>

        <Button
          onPress={handleNavigate}
          style={{ width: "50%", display: "flex", alignItems: "center" }}
        >
          <AppText>Jogar</AppText>
        </Button>
      </Box>

      <BoxGame />
    </Box>
  );
};

export default Home;
