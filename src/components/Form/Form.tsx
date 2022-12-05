import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  GestureResponderEvent,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";
import { COLORS } from "../../constants";
import { EvilIcons } from "@expo/vector-icons";

interface Props {
  placeholder?: string;
  onSearchButtonPress?: (event: GestureResponderEvent) => void;
  value?: string;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
}
const Form: React.FC<Props> = ({
  placeholder,
  onSearchButtonPress,
  value,
  onChangeText,
  onSubmitEditing,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: COLORS.gray,
          paddingVertical: 3,
          paddingHorizontal: 10,
          borderRadius: 5,
        }}
      >
        <TextInput
          placeholder={placeholder}
          style={{
            fontSize: 20,
            paddingVertical: 3,
            paddingHorizontal: 5,
            flex: 1,
          }}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        <TouchableOpacity activeOpacity={0.7} onPress={onSearchButtonPress}>
          <EvilIcons
            name="search"
            size={24}
            color="black"
            style={{
              marginLeft: 5,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Form;
