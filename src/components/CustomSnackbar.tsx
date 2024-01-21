import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import {
  AppDispatch,
  TSnackBarRootState,
  TSnackbarProps,
} from "../types/types";
import { FILTER_SNACKBAR_MAP } from "../utils/filterMaps";
import { toggleSnackBarFalse } from "../redux/actions/actionsOperations/snackBarActionsOperations";

class CustomSnackbar extends Component<TSnackbarProps> {
  private timeout: ReturnType<typeof setTimeout> | undefined;

  componentDidUpdate(prevProps: TSnackbarProps): void {
    const { isVisible, toggleSnackBarFalse } = this.props;
    if (prevProps.snackBarContentKey !== this.props.snackBarContentKey) {
      if (isVisible) {
        this.timeout = setTimeout(() => {
          toggleSnackBarFalse();
        }, 1500);
      }
    }
  }

  componentWillUnmount(): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  render(): React.ReactNode {
    const {
      isVisible,
      snackBarContentKey,
      position,
      containerStyle,
      textColor,
      messageStyle,
    } = this.props;

    if (!snackBarContentKey || !FILTER_SNACKBAR_MAP[snackBarContentKey]) {
      return;
    }

    const backGroundColor =
      FILTER_SNACKBAR_MAP[snackBarContentKey].backGroundColor;
    const message = FILTER_SNACKBAR_MAP[snackBarContentKey].message;

    return (
      isVisible && (
        <View
          style={[
            styles.container,
            position === "top" ? styles.topContainer : styles.bottomContainer,
            containerStyle,
            { backgroundColor: backGroundColor },
          ]}
        >
          <Text
            style={[styles.messageText, messageStyle, { color: textColor }]}
          >
            {message}
          </Text>
        </View>
      )
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  topContainer: {
    top: 15,
  },
  bottomContainer: {
    bottom: 15,
    width: 300,
    alignSelf: "center",
    padding: 10,
  },
  messageText: {
    fontSize: 16,
  },
  actionText: {
    fontSize: 14,
  },
});

const mapStateToProps = (state: TSnackBarRootState) => ({
  snackBarContentKey: state.snackBarReducer.snackBarContentKey,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    toggleSnackBarFalse: () => dispatch(toggleSnackBarFalse()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomSnackbar);
