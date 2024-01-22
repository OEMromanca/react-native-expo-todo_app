import React from "react";
import { StyleSheet, View } from "react-native";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { connect } from "react-redux";
import {
  addTodo,
  clearSubmitform,
  updateTodoField,
} from "../redux/actions/actionsOperations/todoActionsOperations";
import {
  AppDispatch,
  TAddTodoProps,
  TAddTodoState,
  ITodo,
  TSnackbarKey,
  TTodoRootState,
} from "../types/types";
import AntDesignIcon from "./Icon";
import CustomDatePicker from "./CustomDatePicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import { updateSnackBar } from "../redux/actions/actionsOperations/snackBarActionsOperations";

class AddTodo extends React.Component<TAddTodoProps, TAddTodoState> {
  state = {
    isToggled: false,
    disabled: true,
  };

  toggleForm = () => {
    this.setState((prevState) => ({
      ...prevState,
      isToggled: !prevState.isToggled,
    }));
  };

  onChangeText = (field: string, value: string) => {
    const { todo, updateTodoField } = this.props;
    const formattedDate = getFormatedDate(todo.deadline);

    if (value !== formattedDate) {
      updateTodoField(field, value);
    }
    if (value) {
      this.setState({ disabled: false });
    }
  };

  onSubmit = () => {
    const { addTodo, updateSnackBar, todo, clearSubmitForm } = this.props;

    console.log(todo, "TODO");

    const newTodo = {
      title: todo.title,
      description: todo.description,
      deadline: todo.deadline,
      priority: todo.priority,
      completed: todo.completed,
    };
    const valuesCheck = newTodo.title && newTodo.description !== "";

    if (newTodo && valuesCheck) {
      try {
        addTodo(newTodo);
        this.setState((prev) => ({ ...prev, isToggled: !prev.isToggled }));
        updateSnackBar("add");
        clearSubmitForm();
        console.log(todo, "TODO");
      } catch (error) {
        console.error("Failed to add todo:", error);
      }
    }
  };

  render(): React.ReactNode {
    const { isToggled } = this.state;
    const { todo } = this.props;

    return (
      <View>
        {!isToggled ? (
          <View style={styles.iconButtonContainer}>
            <AntDesignIcon name={"plus"} style={styles.submitIcon} size={14} />
            <CustomButton
              onPress={this.toggleForm}
              title="Add Todo"
              textStyle={styles.submitButton}
            />
          </View>
        ) : (
          <View>
            <View style={{ flexDirection: "column", gap: 3 }}>
              <View style={styles.submitInputContainer}>
                <CustomInput
                  value={todo.title}
                  onChangeText={(text) => this.onChangeText("title", text)}
                  placeholder="Todo title"
                  style={styles.submitInput}
                  focus={isToggled}
                />
              </View>
              <View style={styles.submitInputContainer}>
                <CustomInput
                  value={todo.description}
                  onChangeText={(text) =>
                    this.onChangeText("description", text)
                  }
                  placeholder="Todo description"
                  style={styles.submitInput}
                  multiline={true}
                  numberOfLines={2}
                />
              </View>

              <View style={{ alignSelf: "flex-start" }}>
                <CustomDatePicker
                  initialValue={todo.deadline}
                  handleDateChange={(date: string) =>
                    this.onChangeText("deadline", date)
                  }
                />
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <CustomButton
                onPress={this.onSubmit}
                title="Add todo"
                pressableStyle={styles.submitButtonAddTodo}
                textStyle={styles.submitButtonAddTodoTextStyle}
                disabled={this.state.disabled}
              />
              <CustomButton
                onPress={this.toggleForm}
                title="Cancel"
                pressableStyle={styles.cancelButtonAddTodo}
                textStyle={styles.cancelButtonAddTodoTextStyle}
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    gap: 5,

    paddingTop: 10,
  },

  submitButtonAddTodo: {
    backgroundColor: "rgb(221, 75, 57)",

    borderRadius: 3,
    borderColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",

    paddingTop: 12,
    paddingRight: 10,
    paddingBottom: 7,
    paddingLeft: 10,
    textAlign: "center",
  },

  submitButtonAddTodoTextStyle: {
    color: "white",
    fontWeight: "700",
  },

  cancelButtonAddTodo: {
    justifyContent: "center",

    paddingTop: 12,
    paddingRight: 10,
    paddingBottom: 7,
    paddingLeft: 10,

    backgroundColor: "transparent",
  },

  cancelButtonAddTodoTextStyle: {
    color: " rgb(85, 85, 85)",
    fontSize: 13,
    fontWeight: "700",
  },

  submitInputContainer: {
    width: "100%",

    padding: 10,

    borderColor: "rgb(200, 200, 200)",
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: "solid",
  },

  submitInput: {
    color: "#808080",

    fontSize: 14,
    fontWeight: "600",

    borderColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",

    outlineStyle: "none",
  },

  submitButton: {
    color: "#808080",

    fontSize: 14,
    fontWeight: "700",
  },
  iconButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: 14,
    padding: 5,
    width: 95,
  },
  submitIcon: {
    color: "rgb(221, 75, 57)",
  },
});

const mapStateToProps = (state: TTodoRootState) => ({
  error: state.todoReducer.error,
  message: state.todoReducer.message,
  todo: state.todoReducer.todo,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    addTodo: (text: Omit<ITodo, "id">) => dispatch(addTodo(text)),
    updateSnackBar: (snackBarContentKey: TSnackbarKey) =>
      dispatch(updateSnackBar(snackBarContentKey)),
    updateTodoField: (field: string, value: string) =>
      dispatch(updateTodoField(field, value)),
    clearSubmitForm: () => dispatch(clearSubmitform()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
