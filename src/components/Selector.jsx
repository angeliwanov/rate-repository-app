import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import theme from "../theme";
import Text from "./Text";

const Selector = ({ selector, setSelector }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      backgroundColor: theme.backgroundColors.secondary,
    },
    flex: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
    },
    modalView: {
      backgroundColor: "white",
      borderRadius: 5,
      paddingHorizontal: 50,
      paddingVertical: 20,
      alignItems: "center",
    },
    button: {
      borderRadius: 5,
      padding: 10,
    },
    buttonClose: {
      marginTop: 10,
      backgroundColor: theme.colors.primary,
    },
    textStyle: {
      color: theme.colors.secondary,
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
    placeholder: {
      color: theme.colors.textSecondary,
    },
    latest: {
      fontWeight: selector === "latest added" ? "700" : "500",
    },
    highest: {
      fontWeight: selector === "highest rated" ? "700" : "500",
    },
    lowest: {
      fontWeight: selector === "lowest rated" ? "700" : "500",
    },
    arrow: { marginTop: 2 },
  });

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          style={[styles.centeredView]}
          activeOpacity={1}
          onPressOut={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalView}>
            <Text style={[styles.modalText, styles.placeholder]}>
              Select an item ...
            </Text>
            <Pressable
              onPress={() => {
                setSelector("latest added");
              }}
            >
              <Text style={[styles.modalText, styles.latest]}>
                Latest repositories
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setSelector("highest rated");
              }}
            >
              <Text style={[styles.modalText, styles.highest]}>
                Highest rated repositories
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setSelector("lowest rated");
              }}
            >
              <Text style={[styles.modalText, styles.lowest]}>
                Lowest rated repositories
              </Text>
            </Pressable>
          </View>
        </TouchableOpacity>
      </Modal>
      <Pressable
        style={[styles.button, styles.flex]}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text fontWeight="bold" style={styles.textStyle}>
          Sort By: {selector}
        </Text>
        <AntDesign
          style={styles.arrow}
          name="caretdown"
          size={12}
          color="white"
        />
      </Pressable>
    </View>
  );
};

export default Selector;
