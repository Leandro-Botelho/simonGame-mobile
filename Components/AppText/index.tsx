import { createText } from "@shopify/restyle";
import { ThemeProps } from "../../theme";
import { PropsWithChildren } from "react";
import { StyleProp, TextStyle } from "react-native";

const Text = createText<ThemeProps>();

interface ITextProps {
  style?: StyleProp<TextStyle>;
}

const AppText = ({ children, style }: PropsWithChildren<ITextProps>) => {
  return (
    <Text style={style} variant="button">
      {children}
    </Text>
  );
};

export default AppText;
