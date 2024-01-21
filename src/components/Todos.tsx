import React from "react";
import { StyleSheet, View } from "react-native";
import {
  AppDispatch,
  ITodo,
  TSnackBarRootState,
  TTodoRootState,
  TodosProps,
} from "../types/types";
import { FILTER_MAP } from "../utils/filterMaps";
import { fetchAllTodos } from "../redux/actions/actionsOperations/todoActionsOperations";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import CustomModal from "./modal/CustomModal";
import CustomSnackbar from "./CustomSnackbar";

type IProps = {
  error: string | null;
  message: any;
  showSnackBar: boolean;
};

class Todos extends React.Component<TodosProps & IProps> {
  componentDidMount() {
    this.props.fetchAllTodos();
  }

  render(): React.ReactNode {
    const { filter, showSnackBar } = this.props;
    const filteredTodos = this.props.todos.filter(FILTER_MAP[filter]);

    return (
      <View style={styles.container}>
        {filteredTodos.map((todo: ITodo) => (
          <View key={todo.id}>
            <Todo todo={todo} />
          </View>
        ))}
        <AddTodo />
        <CustomModal />
        <CustomSnackbar
          message="This is a custom Snackbar"
          duration={1000}
          position="bottom"
          textColor="white"
          isVisible={showSnackBar}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    paddingVertical: 10, // top bottom
    paddingHorizontal: 30, // left right

    gap: 10,
  },
});

const mapStateToProps = (state: TTodoRootState & TSnackBarRootState) => ({
  todos: state.todoReducer.todos,
  message: state.todoReducer.message,
  error: state.todoReducer.error,
  showSnackBar: state.snackBarReducer.showSnackBar,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    fetchAllTodos: () => dispatch(fetchAllTodos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
