import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { COMPONENT_MAP } from "../../utils/filterMaps";
import { TModalRootState, TCustomModalProps } from "../../types/types";

class CustomModal extends React.Component<TCustomModalProps> {
  render(): React.ReactNode {
    const { modalVisible, modalContentKey } = this.props;
    const ModalContent = COMPONENT_MAP[modalContentKey];

    return (
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {ModalContent && <ModalContent />}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
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

const mapStateToProps = (state: TModalRootState) => ({
  modalVisible: state.modalReducer.modalVisible,
  modalContentKey: state.modalReducer.modalContentKey,
});

export default connect(mapStateToProps, null)(CustomModal);
