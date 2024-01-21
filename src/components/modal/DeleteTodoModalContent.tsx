import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../CustomButton";
import { toggleModalVisibleFalse } from "../../redux/actions/actionsOperations/modalActionsOperations";
import {
  AppDispatch,
  TDeleteTodoModalContentProps,
  TSnackbarKey,
  TTodoRootState,
} from "../../types/types";
import { connect } from "react-redux";
import { deleteTodo } from "../../redux/actions/actionsOperations/todoActionsOperations";
import { updateSnackBar } from "../../redux/actions/actionsOperations/snackBarActionsOperations";

class DeleteTodoModalContent extends React.Component<TDeleteTodoModalContentProps> {
  onDeleteTodo = (id: string) => {
    const { deleteTodo, toggleModalVisibleFalse, updateSnackBar } = this.props;

    deleteTodo(id);
    toggleModalVisibleFalse();
    updateSnackBar("delete");
  };

  render(): React.ReactNode {
    const { todo, toggleModalVisibleFalse } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.firstRowContainer}>
          <View style={styles.deleteTodoMessageContainer}>
            <View>
              <Text style={styles.deleteTodoMessage}>
                Are you sure you want to delete
              </Text>
            </View>
            <View style={styles.todoTitleContainer}>
              <Text style={styles.todoTitle}>{todo.title}</Text>
              <Text>???</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 3,

            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 14,
            paddingRight: 14,
          }}
        >
          <CustomButton
            onPress={toggleModalVisibleFalse}
            title="Cancel"
            pressableStyle={styles.cancelButtonPressebaleStyle}
            textStyle={styles.cancleButtonTextStyle}
          />
          <CustomButton
            onPress={() => this.onDeleteTodo(todo.id)}
            title="Delete"
            pressableStyle={styles.deleteButtonPressebaleStyle}
            textStyle={styles.deleteButtonTextStyle}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
  },

  todoTitleContainer: {
    flexDirection: "row",
    gap: 3,
  },

  todoTitle: {
    fontWeight: "bold",
    color: "black",
  },

  firstRowContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "rgb(221, 221, 221)",
  },

  deleteTodoMessageContainer: {
    alignItems: "center",

    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 24,
    paddingRight: 24,
  },

  deleteTodoMessage: {
    color: "rgb(32, 32, 32)",
  },

  deleteButtonPressebaleStyle: {
    paddingTop: 6,
    paddingRight: 12,
    paddingBottom: 7,
    paddingLeft: 12,

    backgroundColor: "rgb(221, 75, 57)",

    borderWidth: 1,
    borderColor: "transparent",
    borderStyle: "solid",
    borderRadius: 3,

    alignItems: "center",
    justifyContent: "center",
  },

  deleteButtonTextStyle: {
    color: "rgb(255, 255, 255)",

    fontWeight: "700",
    fontSize: 13,
  },

  cancelButtonPressebaleStyle: {
    marginLeft: 10,

    paddingTop: 6,
    paddingRight: 12,
    paddingBottom: 7,
    paddingLeft: 12,

    backgroundColor: "rgb(243, 243, 243)",

    borderWidth: 1,
    borderColor: "rgb(221, 221, 221)",
    borderStyle: "solid",
    borderRadius: 3,

    alignItems: "center",
    justifyContent: "center",
  },

  cancleButtonTextStyle: {
    fontWeight: "700",
    fontSize: 13,

    color: "rgb(32, 32, 32)",
  },
});

const mapStateToProps = (state: TTodoRootState) => ({
  todo: state.todoReducer.todo,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    deleteTodo: (id: string) => dispatch(deleteTodo(id)),
    toggleModalVisibleFalse: () => dispatch(toggleModalVisibleFalse()),
    updateSnackBar: (snackBarContentKey: TSnackbarKey) =>
      dispatch(updateSnackBar(snackBarContentKey)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteTodoModalContent);
