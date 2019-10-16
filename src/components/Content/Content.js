import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, Image, Text, TextInput, View } from "react-native";

const Content = props => {
  const { currentQuestion, questions } = props;
  console.log(questions);
  return questions.length === 0 ? (
    <View>
      <Text>Question {currentQuestion + 1}</Text>
      <Text></Text>
      <TextInput style={styles.input}></TextInput>
    </View>
  ) : (
    <Text>No questions</Text>
  );
};

export default Content;

const styles = StyleSheet.create({
  input: { borderWidth: 2, borderColor: "grey", width: 100 }
});
