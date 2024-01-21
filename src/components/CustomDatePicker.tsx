import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
  TouchableOpacity,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { ICustomDatePickerProps, ICustomDatePickerState } from "../types/types";

class CustomDatePicker extends Component<
  ICustomDatePickerProps,
  ICustomDatePickerState
> {
  state = {
    openStartDatePicker: false,
  };

  handleOnPressStartDate = () => {
    this.setState((prevState) => ({
      ...prevState,
      openStartDatePicker: !prevState.openStartDatePicker,
    }));
  };

  render(): React.ReactNode {
    const formattedStartDate = getFormatedDate(
      this.props.initialValue,
      "YYYY/MM/DD"
    );
    const { openStartDatePicker } = this.state;
    const { handleDateChange } = this.props;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView>
          <Pressable
            style={styles.inputBtn}
            onPress={this.handleOnPressStartDate}
          >
            <Text style={{ color: "#808080" }}>{formattedStartDate}</Text>
          </Pressable>

          <Modal
            animationType="slide"
            transparent={true}
            visible={openStartDatePicker}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <DatePicker
                  style={styles.calendar}
                  mode="calendar"
                  minimumDate={formattedStartDate}
                  selected={formattedStartDate}
                  onSelectedChange={handleDateChange}
                  options={{
                    backgroundColor: "white",
                    textHeaderColor: "#469ab6",
                    textDefaultColor: "black",
                    selectedTextColor: "white",
                    mainColor: "#469ab6",
                  }}
                />

                <TouchableOpacity onPress={this.handleOnPressStartDate}>
                  <Text style={{ color: "black" }}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    width: 220,
    height: 220,
  },
  inputBtn: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "rgb(200, 200, 200)",

    height: 30,

    padding: 8,
    marginTop: 4,
    fontSize: 14,

    justifyContent: "center",
  },

  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default CustomDatePicker;
