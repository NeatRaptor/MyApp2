import React,{Component} from "react";
import { Header, Icon, Badge } from 'react-native-elements';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state={
            userId: firebase.auth().currentUser.email,
            value: ''
        }
    }
}