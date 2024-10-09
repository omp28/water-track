// // import Ionicons from '@expo/vector-icons/Ionicons';
// // import { StyleSheet, Image, Platform } from 'react-native';

// // import { Collapsible } from '@/components/Collapsible';
// // import { ExternalLink } from '@/components/ExternalLink';
// // import ParallaxScrollView from '@/components/ParallaxScrollView';
// // import { ThemedText } from '@/components/ThemedText';
// // import { ThemedView } from '@/components/ThemedView';

// // export default function TabTwoScreen() {
// //   return (
// //     <ParallaxScrollView
// //       headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
// //       headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
// //       <ThemedView style={styles.titleContainer}>
// //         <ThemedText type="title">Explore</ThemedText>
// //       </ThemedView>
// //       <ThemedText>This app includes example code to help you get started.</ThemedText>
// //       <Collapsible title="File-based routing">
// //         <ThemedText>
// //           This app has two screens:{' '}
// //           <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
// //           <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
// //         </ThemedText>
// //         <ThemedText>
// //           The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
// //           sets up the tab navigator.
// //         </ThemedText>
// //         <ExternalLink href="https://docs.expo.dev/router/introduction">
// //           <ThemedText type="link">Learn more</ThemedText>
// //         </ExternalLink>
// //       </Collapsible>
// //       <Collapsible title="Android, iOS, and web support">
// //         <ThemedText>
// //           You can open this project on Android, iOS, and the web. To open the web version, press{' '}
// //           <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
// //         </ThemedText>
// //       </Collapsible>
// //       <Collapsible title="Images">
// //         <ThemedText>
// //           For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
// //           <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
// //           different screen densities
// //         </ThemedText>
// //         <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
// //         <ExternalLink href="https://reactnative.dev/docs/images">
// //           <ThemedText type="link">Learn more</ThemedText>
// //         </ExternalLink>
// //       </Collapsible>
// //       <Collapsible title="Custom fonts">
// //         <ThemedText>
// //           Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
// //           <ThemedText style={{ fontFamily: 'SpaceMono' }}>
// //             custom fonts such as this one.
// //           </ThemedText>
// //         </ThemedText>
// //         <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
// //           <ThemedText type="link">Learn more</ThemedText>
// //         </ExternalLink>
// //       </Collapsible>
// //       <Collapsible title="Light and dark mode components">
// //         <ThemedText>
// //           This template has light and dark mode support. The{' '}
// //           <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
// //           what the user's current color scheme is, and so you can adjust UI colors accordingly.
// //         </ThemedText>
// //         <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
// //           <ThemedText type="link">Learn more</ThemedText>
// //         </ExternalLink>
// //       </Collapsible>
// //       <Collapsible title="Animations">
// //         <ThemedText>
// //           This template includes an example of an animated component. The{' '}
// //           <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
// //           the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText> library
// //           to create a waving hand animation.
// //         </ThemedText>
// //         {Platform.select({
// //           ios: (
// //             <ThemedText>
// //               The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
// //               component provides a parallax effect for the header image.
// //             </ThemedText>
// //           ),
// //         })}
// //       </Collapsible>
// //     </ParallaxScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   headerImage: {
// //     color: '#808080',
// //     bottom: -90,
// //     left: -35,
// //     position: 'absolute',
// //   },
// //   titleContainer: {
// //     flexDirection: 'row',
// //     gap: 8,
// //   },
// // });
// import React from "react";
// import { Ionicons } from "@expo/vector-icons";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import { RadioButton } from "react-native-paper";

// // Placeholder for Profile Screen
// function ProfileScreen() {
//   const [gender, setGender] = React.useState("female");

//   return (
//     <View style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.header}>
//         <TouchableOpacity>
//           <Ionicons name="arrow-back" size={28} color="#00bfff" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>My Profile</Text>
//         <TouchableOpacity>
//           <Ionicons name="pencil" size={24} color="#00bfff" />
//         </TouchableOpacity>
//       </View>

//       {/* Profile Image */}
//       <View style={styles.profileImageContainer}>
//         {/* <Image
//           source={require("./assets/profile-placeholder.png")} // Replace with actual profile image if available
//           style={styles.profileImage}
//         /> */}
//       </View>

//       {/* Input Fields */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>First Name</Text>
//         <TextInput style={styles.input} value="Aashifa" editable={false} />

//         <Text style={styles.label}>Last Name</Text>
//         <TextInput style={styles.input} value="Sheikh" editable={false} />

//         <Text style={styles.label}>Email Address</Text>
//         <TextInput
//           style={styles.input}
//           value="aashifasheikh@gmail.com"
//           editable={false}
//         />

//         <Text style={styles.label}>Age</Text>
//         <TextInput style={styles.input} value="25" editable={false} />

//         <Text style={styles.label}>Gender</Text>
//         <View style={styles.radioContainer}>
//           <RadioButton.Group
//             onValueChange={(newValue) => setGender(newValue)}
//             value={gender}
//           >
//             <View style={styles.radioItem}>
//               <RadioButton value="male" />
//               <Text style={styles.radioLabel}>Male</Text>
//             </View>
//             <View style={styles.radioItem}>
//               <RadioButton value="female" />
//               <Text style={styles.radioLabel}>Female</Text>
//             </View>
//             <View style={styles.radioItem}>
//               <RadioButton value="other" />
//               <Text style={styles.radioLabel}>Other</Text>
//             </View>
//           </RadioButton.Group>
//         </View>
//       </View>
//     </View>
//   );
// }

// // Placeholder Screens for Other Tabs
// function HomeScreen() {
//   return (
//     <View style={styles.screen}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function AnalysisScreen() {
//   return (
//     <View style={styles.screen}>
//       <Text>Analysis Screen</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={styles.screen}>
//       <Text>Settings Screen</Text>
//     </View>
//   );
// }

// // Bottom Tab Navigator
// const Tab = createBottomTabNavigator();

// export default function TabTwoScreen() {
//   return (
//     // Wrap the root navigator inside the only NavigationContainer
//     // <NavigationContainer>
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let iconName: keyof typeof Ionicons.glyphMap; // Ensure the icon name is one of Ionicons' valid names

//           switch (route.name) {
//             case "Home":
//               iconName = "home";
//               break;
//             case "Analysis":
//               iconName = "bar-chart";
//               break;
//             case "Settings":
//               iconName = "settings";
//               break;
//             case "Profile":
//               iconName = "person";
//               break;
//             default:
//               iconName = "home"; // Default icon
//               break;
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "#00bfff",
//         tabBarInactiveTintColor: "gray",
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Analysis" component={AnalysisScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//     // </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   profileImageContainer: {
//     alignItems: "center",
//     marginBottom: 30,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: "#e0e0e0", // Placeholder color
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     color: "#333",
//     marginBottom: 5,
//   },
//   input: {
//     backgroundColor: "#eaf7ff",
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 20,
//     fontSize: 16,
//   },
//   radioContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginBottom: 20,
//   },
//   radioItem: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   radioLabel: {
//     marginLeft: 5,
//   },
//   screen: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { ProgressBar } from "react-native-paper"; // Make sure to install this library

export default function App() {
  const [currentIntake, setCurrentIntake] = useState(500); // Example initial intake
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
        <Text style={styles.nameText}>om patel</Text>
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

      {/* Dashboard Button */}
      <TouchableOpacity style={styles.dashboardButton}>
        <Text style={styles.dashboardButtonText}>Go To Dashboard</Text>
      </TouchableOpacity>

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
    backgroundColor: "#f5faff",
    padding: 20,
    justifyContent: "space-between",
  },
  header: {
    marginTop: 40,
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
  dashboardButton: {
    backgroundColor: "#00bfff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  dashboardButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  motivationalText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
});
