import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../theme";
import Button from "../../Components/AppButton";
import AppText from "../../Components/AppText";
import { IStackScreenProps } from "../../routes/StackNavigator/models";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

const Loser = ({ navigation }: IStackScreenProps<"Loser">) => {
  const handleNavigate = () => navigation && navigation.navigate("Home");

  return (
    <Box
      bg="primary"
      flex={1}
      justifyContent="center"
      alignItems="center"
      p="xl"
      gap="xxl"
    >
      <Box gap="s" alignItems="center">
        <Text variant="title">Você perdeu!</Text>
        <Text variant="subtitle">Rodadas: 10</Text>
      </Box>

      <Button
        onPress={handleNavigate}
        style={{ width: "100%", display: "flex", alignItems: "center" }}
      >
        <AppText>Jogar Novamente</AppText>
      </Button>
    </Box>
  );
};

export default Loser;
