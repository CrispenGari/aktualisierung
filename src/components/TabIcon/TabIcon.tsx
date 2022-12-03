import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../../constants";
interface IconI {
  IconComponent: any;
  name: string;
}
interface Props {
  title?: string;
  Icon: IconI;
  focused: boolean;
}
const TabIcon: React.FC<Props> = ({ focused, Icon, title }) => {
  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        },
      ]}
    >
      <Icon.IconComponent
        name={Icon.name}
        size={20}
        color={focused ? COLORS.darkGray : COLORS.gray}
      />
      <Text style={{ color: focused ? COLORS.darkGray : COLORS.gray }}>
        {title}
      </Text>
    </View>
  );
};

export default TabIcon;
