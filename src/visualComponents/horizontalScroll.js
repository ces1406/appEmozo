import React, {Component} from 'react';
import {ScrollView, Text, View, Dimensions} from 'react-native';

export default class HorizontalScroll extends Component {
    render(){
        let anchoScreen = Dimensions.get('window').width;
        let altoScreen = Dimensions.get('window').height;
        return(
            <ScrollView horizontal={true} >
                <View style={{flex:1,justifyContent:'center',alignItems:'center', width: anchoScreen}}>                    
                </View>
            </ScrollView>
        )
    }
}