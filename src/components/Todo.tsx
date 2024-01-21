import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import { connect } from "react-redux";
import CustomCheckBox from "./CustomCheckbox";
import { theme } from "../assets/colors";
import { AppDispatch, ITodo } from "../types/types";
import AntDesignIcon from "./Icon";
import { getTodoById } from "../redux/actions/actionsOperations/todoActionsOperations";
import { getFormatedDate } from "react-native-modern-datepicker";
import { toggleModalVisibleTrue } from "../redux/actions/actionsOperations/modalActionsOperations";

interface ITodoProps {
  todo: ITodo;
  toggleModalVisibleTrue: () => void;
  getTodoById: (id: string) => void;
}

interface ITodoState {
  isExpanded: boolean;
}

class Todo extends React.Component<ITodoProps, ITodoState> {
  state = {
    isExpanded: false,
  };

  toggleExpand = () => {
    this.setState((prevState) => ({ isExpanded: !prevState.isExpanded }));
  };

  toggleModalVisible = (id: string) => {
    this.props.toggleModalVisibleTrue();
    this.props.getTodoById(id);
  };

  renderHeader = () => {
    const { todo } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View>
            <CustomCheckBox todo={todo} />
          </View>
          <View style={styles.textHeaderContainer}>
            <Text style={styles.textHeader}>Title:</Text>
            <Text style={styles.text}>{todo.title}</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable onPress={this.toggleExpand}>
            <AntDesignIcon
              name={this.state.isExpanded ? "chevronDown" : "chevronLeft"}
              style={styles.icon}
            />
          </Pressable>
          <Pressable onPress={() => this.toggleModalVisible(todo.id)}>
            <AntDesignIcon name={"close"} style={styles.icon} />
          </Pressable>
        </View>
      </View>
    );
  };

  renderContent = () => {
    const { todo } = this.props;
    return (
      <View style={{ paddingLeft: 30 }}>
        <Text style={styles.textHeader}>Description:</Text>
        <Text style={styles.text}>{todo.description}</Text>
        <Text style={styles.textHeader}>Date & time:</Text>
        <Text style={styles.text}>{getFormatedDate(todo.deadline)}</Text>
      </View>
    );
  };

  updateSections = (activeSections: number[]) => {
    this.setState({ isExpanded: activeSections.length > 0 });
  };

  render(): React.ReactNode {
    return (
      <View style={styles.accordionContainer}>
        <Accordion
          activeSections={this.state.isExpanded ? [0] : []}
          sections={["Title"]}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
          onChange={this.updateSections}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    height: 40,
    position: "relative",
  },

  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textHeaderContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",

    paddingLeft: 10,
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },

  icon: {
    color: "black",
    fontSize: 15,
  },

  accordionContainer: {
    flex: 1,

    borderBottomWidth: 1,
    borderBottomColor: "rgb(221, 221, 221)",

    flexDirection: "column",
    justifyContent: "flex-start",

    paddingBottom: 10,
  },

  text: {
    color: theme.colors.text,
    fontWeight: "700",
  },

  textHeader: {
    color: theme.colors.text1,
    fontWeight: "700",
  },
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    toggleModalVisibleTrue: () => dispatch(toggleModalVisibleTrue("keyA")),
    getTodoById: (id: string) => dispatch(getTodoById(id)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
