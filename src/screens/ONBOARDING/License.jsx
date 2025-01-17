import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

// Components
import Header from "../../Components/ONBOARDING/Header";
import Path from "../../Components/ONBOARDING/Path";

// theme
import { COLORS } from "../../constants/theme";

// img
import img from "./../../../assets/Login/company.png";

const License = () => {
  const navigation = useNavigation();
  return (
    <View style={LicenseCss.mDIv}>
      <Header true={false} msg="Enter your Details" />
      <Path img={img} pos={4} />
      <Text style={LicenseCss.Enter}>Importer License</Text>
      <TextInput style={LicenseCss.inpNumber} placeholder="Number" />

      <LinearGradient
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.25 }}
        colors={["#BB14E2", "#161FE4"]}
        style={LicenseCss.button}
      >
        <Text
          style={LicenseCss.SendOTP}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          Next
        </Text>
      </LinearGradient>

      <LinearGradient
        colors={["#BB14E2", "#161FE4"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={LicenseCss.linearGradient}
      >
        <View style={LicenseCss.innerContainer}>
          <Text
            style={LicenseCss.buttonText}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            Skip
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const LicenseCss = StyleSheet.create({
  mDIv: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "80%",
    height: "30%",
    marginBottom: 20,
  },
  Enter: {
    marginBottom: 30,
    color: COLORS.primary,
    fontWeight: 700,
    fontSize: 21,
  },
  inpNumber: {
    padding: 12,
    borderColor: "#6B4EFF",
    borderWidth: 2,
    borderRadius: 10,
    width: "80%",
    marginBottom: 20,
  },
  button: {
    borderRadius: 10,
    paddingTop: 14,
    paddingBottom: 14,
    width: "70%",
  },
  SendOTP: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 20,
    textAlign: "center",
  },
  linearGradient: {
    marginTop: 30,
    height: 50,
    width: "30%",
    borderRadius: 20, // <-- Outer Border Radius
  },
  innerContainer: {
    borderRadius: 15, // <-- Inner Border Radius
    flex: 1,
    margin: 4, // <-- Border Width
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    // fontFamily: "Gill Sans",
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "#BB14E2",
    backgroundColor: "transparent",
  },
});

export default License;
