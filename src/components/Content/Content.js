import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Image, Text, TextInput, View } from 'react-native';


const Content = (props) => {
    const { currentQuestion, questions } = props
    const question = questions[currentQuestion]
    return (
        <View>
            <Text>Question {currentQuestion + 1}</Text>
            <TextInput></TextInput>
        </View>
    );
}

function mapStateToProps(state) {
    return { ...state }
}
export default connect(mapStateToProps)(Content);