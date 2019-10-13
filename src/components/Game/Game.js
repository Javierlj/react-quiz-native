import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";


import Navbar from '../Navbar/Navbar'
import Content from '../Content/Content'
import Actionbar from '../Actionbar/Actionbar'

import { getQuestions } from "../../services/apiCalls";


const Game = (props) => {
    const { dispatch } = props;

    useEffect(() => {
        getQuestions(dispatch);
    }, []);

    return (
        <View>
            <Navbar />
            <Content />
            <Actionbar />
        </View>
    );
}

function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps)(Game);