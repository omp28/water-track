import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ProgressBar } from "react-native-paper";

export default function AnalysisScreen() {
  const [currentIntake, setCurrentIntake] = useState(500);
  const totalGoal = 2000;

  const handleAddWater = (amount: any) => {
    setCurrentIntake(currentIntake + amount);
  };

  const intakePercentage = currentIntake / totalGoal;

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.greetingText}>Good Morning,</Text>
        <Text style={styles.nameText}>Om Patel</Text>
      </View>

      {/* Water Intake Tracking */}
      <View style={styles.intakeTracker}>
        <Text style={styles.timeText}>11:00 AM</Text>
        <Text style={styles.waterText}>200ml water (2 Glass)</Text>
        <TouchableOpacity
          style={styles.addGoalButton}
          onPress={() => handleAddWater(200)}
        >
          <Text style={styles.addGoalButtonText}>Add Your Goal</Text>
        </TouchableOpacity>
      </View>

      {/* Water Progress Circle */}
      <View style={styles.progressCircle}>
        <Text style={styles.currentIntakeText}>{currentIntake}ml</Text>
        <ProgressBar
          progress={intakePercentage}
          color={"#00bfff"}
          style={styles.progressBar}
        />
        <Text style={styles.targetText}>Target {totalGoal}ml</Text>
      </View>

      {/* Motivational Text */}
      <Text style={styles.motivationalText}>
        You got {Math.round(intakePercentage * 100)}% of today's goal, keep
        focus on your health!
      </Text>
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
  greetingText: {
    fontSize: 24,
    color: "#333",
  },
  nameText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
  intakeTracker: {
    backgroundColor: "#eaf7ff",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  timeText: {
    fontSize: 18,
    color: "#333",
  },
  waterText: {
    fontSize: 16,
    marginVertical: 10,
    color: "#666",
  },
  addGoalButton: {
    backgroundColor: "#00bfff",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  addGoalButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  progressCircle: {
    alignItems: "center",
    marginVertical: 30,
  },
  currentIntakeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00bfff",
    marginBottom: 10,
  },
  progressBar: {
    width: 150,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#d3eafd",
  },
  targetText: {
    fontSize: 18,
    color: "#999",
    marginTop: 10,
  },
  motivationalText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
});
