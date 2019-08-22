import React, {Component} from 'react';
import { View, Text,Button,StyleSheet,ImageBackground} from 'react-native';
import {contenedores,estiloLocal} from '../estilos/estilos';

class CalificacionesScreen extends Component {
    static navigationOptions ={
        title: 'Calificaciones de locales y platos'
    }
    render (){
        return(
            <View>
            <ImageBackground source={require('../imgs/cena2.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'rgba(32,41,48,0.7)'}}>    
                <Text style={estiloLocal.contenido2}>----CALIFICACIONES DE PLATOS (LISTA)----</Text>
                <Text style={estiloLocal.contenido2}>----CALIFICACIONES DE LOCALES (LISTA)---</Text>
            </View>
            </ImageBackground>
            </View>
        );
    }
};
export default CalificacionesScreen;