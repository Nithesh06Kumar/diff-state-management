import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import TodoItem from "./TodoItem";

export type TtaskState = {
  id: string;
  value: string;
  isDone: boolean;
};

const TodoList = () => {
  const [value, setValue] = useState("");
  const [task, setTask] = useState<TtaskState[]>([]);

  const addTodo = () => {
    if (value.trim() === "") {
      return;
    }
    setTask((prev) => [
      ...prev,
      { id: Date.now().toString(), value: value, isDone: false },
    ]);

    setValue("");
  };

  const onComplete = (id: string) => {
    setTask((prev) =>
      prev.map((ele) => (ele.id === id ? { ...ele, isDone: !ele.isDone } : ele))
    );
  };
  const onDelete = (id: string) => {
    setTask((prev) => prev.filter((ele) => ele.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          value={value}
          placeholder="Add Task"
          style={styles.input}
          onChangeText={setValue}
          autoCorrect={false}
          autoComplete={"off"}
        />
        <Pressable style={styles.button} onPress={addTodo}>
          <Text>Add Task</Text>
        </Pressable>
      </View>
      <FlatList
        data={task}
        renderItem={({ item }) => (
          <TodoItem item={item} onComplete={onComplete} onDelete={onDelete} />
        )}
        keyExtractor={(item) => item.id?.toString()}
        contentContainerStyle={styles.flatlist}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 8,
    gap: 24,
    flex: 1,
  },
  inputWrapper: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 8,
    borderRadius: 4,
  },
  button: {
    backgroundColor: "#39e3f9ff",
    padding: 8,
    borderRadius: 4,
  },
  flatlist: {
    gap: 8,
  },
});
