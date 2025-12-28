import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TtaskState } from "./TodoList";

interface TodoItemProps {
  item: TtaskState;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}
const TodoItem: FC<TodoItemProps> = ({ item, onComplete, onDelete }) => {
  return (
    <View style={[styles.container, item.isDone && styles.checked]}>
      <Pressable
        onPress={() => {
          onComplete(item?.id);
        }}
      >
        <FontAwesome
          name="check-square"
          size={30}
          color={item?.isDone ? "blue" : "black"}
        />
      </Pressable>
      <Text style={[styles.text, item.isDone && styles.doneText]}>
        {item.value}
      </Text>
      <Pressable onPress={() => onDelete(item?.id)}>
        <AntDesign
          name="delete"
          size={24}
          color={item?.isDone ? "blue" : "black"}
        />
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  checked: {
    backgroundColor: "#99f871ff",
  },
  text: {
    flex: 1,
    fontSize: 16,
    flexWrap: "wrap",
    flexShrink: 1,
  },
  doneText: {
    textDecorationLine: "line-through",
  },
});
