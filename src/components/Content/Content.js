import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, Image, Text, TextInput, View } from "react-native";
import { questionAnswer } from "../../redux/actions";

const Content = props => {
  const { currentQuestion, questions, dispatch, finished } = props;
  const question = questions[currentQuestion];
  return questions.length === 0 ? (
    <Text>No hay preguntas</Text>
  ) : (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
      }}
    >
      <Image
        style={{ width: 300, height: 150 }}
        source={{
          uri: question.attachment
            ? question.attachment.url
            : "https://bigriverequipment.com/wp-content/uploads/2017/10/no-photo-available.png"
        }}
      ></Image>
      <Text>Question {currentQuestion + 1}</Text>
      <Text>{question.question}</Text>
      <TextInput
        value={question.userAnswer || ""}
        onChangeText={text => dispatch(questionAnswer(currentQuestion, text))}
        style={styles.input}
        disabled={finished}
      ></TextInput>
      <View style={styles.bottom}>
        <View style={{ marginRight: 20 }}>
          <Text>
            {question.author ? question.author.username : "anonymous"}
          </Text>
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri: question.author.photo
                ? question.author.photo.url
                : "https://bigriverequipment.com/wp-content/uploads/2017/10/no-photo-available.png"
            }}
          ></Image>
        </View>
        <View>
          <Text>Tips</Text>
          <View>
            {question.tips.map((tip, i) => {
              return <Text key={i}>{tip}</Text>;
            })}
          </View>
        </View>
      </View>
    </View>
  );
};
function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Content);

const styles = StyleSheet.create({
  input: { borderWidth: 2, borderColor: "grey", width: 250 },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  }
});
