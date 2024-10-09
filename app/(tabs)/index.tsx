import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function AnalysisScreen() {
  const [waterIntake, setWaterIntake] = useState(500);
  const [steps, setSteps] = useState(2628);
  const waterGoal = 2000;
  const stepsGoal = 10000;

  const handleAddWater = (amount: any) => {
    setWaterIntake(Math.min(waterIntake + amount, waterGoal));
  };

  const waterPercentage = waterIntake / waterGoal;
  const stepsPercentage = steps / stepsGoal;

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greetingText}>Good Morning,</Text>
          <Text style={styles.nameText}>Aashifa Sheikh</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="notifications-outline" size={24} color="#00bfff" />
          <View style={styles.redDot} />
        </View>
      </View>

      {/* Water Intake Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.timeText}>11:00 AM</Text>
          {/* <Image
            source={"/placeholder.svg?height=24&width=24"}
            style={styles.waterIcon}
          /> */}
        </View>
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
        <View style={styles.circleBackground}>
          <Text style={styles.currentIntakeText}>{waterIntake}ml</Text>
          <ProgressBar
            progress={waterPercentage}
            color={"#00bfff"}
            style={styles.progressBar}
          />
        </View>
        <View style={styles.targetContainer}>
          <Text style={styles.targetLabel}>Target</Text>
          <Text style={styles.targetText}>{waterGoal}ml</Text>
        </View>
      </View>

      {/* Motivational Text */}
      <Text style={styles.motivationalText}>
        You got {Math.round(waterPercentage * 100)}% of today's goal, keep focus
        on your health!
      </Text>

      {/* For Today Section */}
      <Text style={styles.sectionTitle}>For Today</Text>

      <View style={styles.cardsContainer}>
        {/* Water Card */}
        <View style={styles.todayCard}>
          <Text style={styles.cardTitle}>Water</Text>
          <View style={styles.waterGraph}>
            {[0.7, 0.5, 0.8, 0.3, 0.6, 0.4, 0.2].map((height, index) => (
              <View
                key={index}
                style={[styles.bar, { height: `${height * 100}%` }]}
              />
            ))}
          </View>
          <View style={styles.waterLevel}>
            <Text style={styles.waterAmount}>2.1</Text>
            <Text style={styles.waterUnit}>liters</Text>
          </View>
        </View>

        {/* Walk Card */}
        <View style={styles.todayCard}>
          <Text style={styles.cardTitle}>Walk</Text>
          <View style={styles.circleContainer}>
            <View style={styles.circleProgress}>
              <Text style={styles.stepsText}>{steps}</Text>
              <Text style={styles.stepsLabel}>Steps Completed</Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.dashboardButton}>
        <Text style={styles.dashboardButtonText}>Go To Dashboard</Text>
      </TouchableOpacity>
    </ScrollView>
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
    fontSize: 18,
    color: "#666",
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  iconContainer: {
    position: "relative",
  },
  redDot: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
  },
  card: {
    backgroundColor: "#eaf7ff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  timeText: {
    fontSize: 18,
    color: "#333",
  },
  waterIcon: {
    width: 24,
    height: 24,
  },
  waterText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#666",
  },
  addGoalButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  addGoalButtonText: {
    color: "#00bfff",
    fontWeight: "bold",
  },
  progressCircle: {
    alignItems: "center",
    marginVertical: 30,
  },
  circleBackground: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#eaf7ff",
    justifyContent: "center",
    alignItems: "center",
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
  targetContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  targetLabel: {
    fontSize: 18,
    color: "#666",
  },
  targetText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 5,
  },
  motivationalText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  todayCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    width: "48%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  waterGraph: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 100,
    marginBottom: 10,
  },
  bar: {
    width: 8,
    backgroundColor: "#00bfff",
    borderRadius: 4,
  },
  waterLevel: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  waterAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00bfff",
  },
  waterUnit: {
    fontSize: 16,
    color: "#666",
    marginLeft: 5,
  },
  circleContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 120,
  },
  circleProgress: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 10,
    borderColor: "#00bfff",
    alignItems: "center",
    justifyContent: "center",
  },
  stepsText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00bfff",
  },
  stepsLabel: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  dashboardButton: {
    backgroundColor: "#00bfff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  dashboardButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
