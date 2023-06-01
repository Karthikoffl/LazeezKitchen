import { SafeAreaView } from "react-native";
import React from "react";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { useNavigation } from "@react-navigation/native";
import MultiStep1 from "../components/MultiStep1";
import MultiStep2 from "../components/MultiStep2";
import MultiStep3 from "../components/MultiStep3";

const CheckoutScreen = () => {
  const navigation = useNavigation();

  const progressStepStyle = {
    activeStepIconBorderColor: "#4B4B4B",
    activeLabelColor: "#000",
    labelColor: "#000",
    labelFontSize: "10",
    completedProgressBarColor: "#F49F1C",
    completedCheckColor: "#fff",
    completedStepIconColor: "#F49F1C",
    borderWidth: "3px",
    borderStyle: "DashedLine",
  };

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: "handled",
  };

  onSubmitSteps = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProgressSteps {...progressStepStyle}>
        <ProgressStep
          label="Delivery Address"
          scrollViewProps={this.defaultScrollViewProps}
        >
          <MultiStep1 />
        </ProgressStep>
        <ProgressStep
          label="Payment Method"
          scrollViewProps={this.defaultScrollViewProps}
        >
          <MultiStep2 />
        </ProgressStep>
        <ProgressStep
          label="Finish"
          scrollViewProps={this.defaultScrollViewProps}
          onSubmit={this.onSubmitSteps}
        >
          <MultiStep3 />
        </ProgressStep>
      </ProgressSteps>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
