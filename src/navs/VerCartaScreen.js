import React, {Component} from 'react';
import { View, Text,Button,StyleSheet,ImageBackground} from 'react-native';
import {contenedores,estiloLocal} from '../estilos/estilos';

class VerCartaScreen extends Component {
    static navigationOptions ={
        title: 'Carta'
    }
    render (){
        return(
            <View>
            <ImageBackground source={require('../imgs/cena2.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'rgba(32,41,48,0.7)'}}>    
                <Text style={estiloLocal.contenido2}>----VER LA CARTA-MENU DEL LOCAL----</Text>
                <Text style={estiloLocal.contenido2}>IMAGEN DEL PLATO?</Text>
                <Text style={estiloLocal.contenido2}>DESCRIPCION</Text>
                <Text style={estiloLocal.contenido2}>PRECIO</Text>
                <Text style={estiloLocal.contenido2}>DEMORA APROXIMADA?</Text>
                <Text style={estiloLocal.contenido2}>ITEM PARA ELEGIRLO Y AGREGARLO AL PEDIDO</Text>
            </View>
            </ImageBackground>
            </View>
        );
    }
};
export default VerCartaScreen;