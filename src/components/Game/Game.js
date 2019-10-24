import React, { useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";

import Navbar from "../Navbar/Navbar";
import Content from "../Content/Content";
import Actionbar from "../Actionbar/Actionbar";

import { getQuestions } from "../../services/apiCalls";

const Game = props => {
  const {
    dispatch,
    questions,
    currentQuestion,
    loading,
    finished,
    score,
    navigation
  } = props;

  useEffect(() => {
    getQuestions(dispatch);
  }, []);

  return (
    <View style={styles.container}>
      <Navbar />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Content
          questions={questions}
          currentQuestion={currentQuestion}
          question={questions[currentQuestion]}
        />
      )}
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        Resultado: {finished ? score : ""}
      </Text>
      <Actionbar
        dispatch={dispatch}
        questions={questions}
        currentQuestion={currentQuestion}
        loading={loading}
        finished={finished}
        navigation={navigation}
      />
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
    justifyContent: "space-around",
    alignItems: "center",
    margin: 20
  }
});
