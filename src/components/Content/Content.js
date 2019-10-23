import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, Image, Text, TextInput, View } from "react-native";

const Content = props => {
  const { currentQuestion, questions, question } = props;
  return questions.length === 0 ? (
    <Text>No hay preguntas</Text>
  ) : (
    <View>
      <Image
        style={{ width: 300, height: 150 }}
        source={{ uri: question.attachment.url }}
      ></Image>
      <Text>Question {currentQuestion + 1}</Text>
      <Text>{question.question}</Text>
      <TextInput style={styles.input}></TextInput>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  input: { borderWidth: 2, borderColor: "grey", width: 100 }
});
