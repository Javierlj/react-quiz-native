import React from "react";
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";
import {
  submit,
  nextQuestion,
  previousQuestion,
  reset
} from "../../redux/actions";

const Actionbar = props => {
  const { questions, dispatch, currentQuestion, loading, finished } = props;

  const saveQuestions = async () => {
    try {
      await AsyncStorage.setItem(
        "@P2_2019_IWEB:quiz",
        JSON.stringify(questions)
      );
      alert("Questions saved");
    } catch (error) {
      console.error(error);
    }
  };

  const loadQuestions = async () => {
    try {
      var value = await AsyncStorage.getItem("@P2_2019_IWEB:quiz");
      if (value !== null) {
        dispatch(reset(JSON.parse(value)));
      } else {
        alert("No questions saved");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeQuestions = async () => {
    try {
      await AsyncStorage.removeItem("@P2_2019_IWEB:quiz");
      alert("Questions removed");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ alignSelf: "stretch", justifyContent: "space-around" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 10
        }}
      >
        <Button
          onPress={() => dispatch(previousQuestion())}
          disabled={currentQuestion === 0 || loading}
          title="Previous"
        />
        <Button
          onPress={() => dispatch(submit(questions))}
          style={{ width: 100, height: 50 }}
          title="Submit"
          disabled={finished}
        />
        <Button
          onPress={() => dispatch(nextQuestion())}
          disabled={currentQuestion === questions.length - 1 || loading}
          title="Next"
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Button title="Save" onPress={() => saveQuestions()} />
        <Button title="Load" onPress={() => loadQuestions()} />
        <Button title="Remove" onPress={() => removeQuestions()} />
      </View>
    </View>
  );
};

export default Actionbar;
