import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  const [gender, setGender] = useState("female");

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#00bfff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Profile</Text>
        <TouchableOpacity>
          <Ionicons name="pencil" size={24} color="#00bfff" />
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput style={styles.input} value="Aashifa" editable={false} />

        <Text style={styles.label}>Last Name</Text>
        <TextInput style={styles.input} value="Sheikh" editable={false} />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          value="aashifasheikh@gmail.com"
          editable={false}
        />

        <Text style={styles.label}>Age</Text>
        <TextInput style={styles.input} value="25" editable={false} />

        <Text style={styles.label}>Gender</Text>
        <View style={styles.radioContainer}>
          <RadioButton.Group
            onValueChange={(newValue) => setGender(newValue)}
            value={gender}
          >
            <View style={styles.radioItem}>
              <RadioButton value="male" />
              <Text style={styles.radioLabel}>Male</Text>
            </View>
            <View style={styles.radioItem}>
              <RadioButton value="female" />
              <Text style={styles.radioLabel}>Female</Text>
            </View>
            <View style={styles.radioItem}>
              <RadioButton value="other" />
              <Text style={styles.radioLabel}>Other</Text>
            </View>
          </RadioButton.Group>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#eaf7ff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  radioItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioLabel: {
    marginLeft: 5,
  },
});
