import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, Modal, Pressable, StyleSheet, View } from "react-native";
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
      backgroundColor: "rgba(0,0,0,0.5)",
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
    textGray: {
      color: theme.colors.textSecondary,
    },
    arrow: { marginTop: 2 },
  });

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[styles.modalText, styles.textGray]}>
              Select an item ...
            </Text>
            <Pressable
              onPress={() => {
                setSelector("latest added");
              }}
            >
              <Text style={styles.modalText}>Latest repositories</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setSelector("highest rated");
              }}
            >
              <Text style={styles.modalText}>Highest rated repositories</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setSelector("lowest rated");
              }}
            >
              <Text style={styles.modalText}>Lowest rated repositories</Text>
            </Pressable>
          </View>
        </View>
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
