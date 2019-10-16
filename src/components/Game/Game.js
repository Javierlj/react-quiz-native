import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import Navbar from "../Navbar/Navbar";
import Content from "../Content/Content";
import Actionbar from "../Actionbar/Actionbar";

import { getQuestions } from "../../services/apiCalls";

const Game = props => {
  const { dispatch, questions, currentQuestion } = props;

  useEffect(() => {
    getQuestions(dispatch);
  }, []);

  return (
    <View style={styles.container}>
      <Navbar />
      <Content questions={questions} currentQuestion={currentQuestion} />
      <Actionbar />
    </View>
  );
};

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Game);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
