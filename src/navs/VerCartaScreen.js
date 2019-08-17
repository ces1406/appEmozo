import React, {Component} from 'react';
import { View, Text,Button,StyleSheet,ImageBackground} from 'react-native';

class VerCartaScreen extends Component {
    static navigationOptions ={
        title: 'Platos disponibles'
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
const estiloLocal = StyleSheet.create({
    inputs:{
        height:30,
        width:300,
        borderColor:'gray',
        borderWidth:1
    },
    contenido2:{
        padding: 4,
        fontFamily: 'sans-serif-light',
        fontWeight:'100',
        fontSize: 15,
        textAlign:'justify',
        color:'rgba(226,247,245,1)',
    },
    boton1:{
        marginTop: 10,
        padding: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(86,54,27,1)',
        backgroundColor:'rgba(32,41,48,0.78)',
        borderRadius: 5,
    }
});
export default VerCartaScreen;