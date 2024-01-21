import React from "react";
import { Pressable, StyleSheet } from "react-native";
import AntDesignIcon from "./Icon";
import { theme } from "../assets/colors";
import { connect } from "react-redux";
import {
  AppDispatch,
  ICustomCheckBoxProps,
  ITodo,
  TTodoRootState,
} from "../types/types";
import { updateCompletedTodo } from "../redux/actions/actionsOperations/todoActionsOperations";

class CustomCheckBox extends React.Component<ICustomCheckBoxProps> {
  render(): React.ReactNode {
    const { todo, updateCompletedTodo } = this.props;

    return (
      <Pressable
        style={[styles.container, todo.completed && styles.completedStyles]}
        onPress={() => updateCompletedTodo(todo)}
      >
        {todo.completed && <AntDesignIcon name="check" />}
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  completedStyles: {
    borderWidth: 1,
    borderColor: theme.colors.text1,
    borderStyle: "solid",
    backgroundColor: theme.colors.text,
  },
  container: {
    width: 20,
    height: 20,

    borderWidth: 1,
    borderColor: "grey",
    borderStyle: "solid",
    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state: TTodoRootState) => ({
  completed: state.todoReducer.todo.completed,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    updateCompletedTodo: (todo: ITodo) => dispatch(updateCompletedTodo(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomCheckBox);
