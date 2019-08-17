import React, {Component} from 'react';
import { View, Text,Button,StyleSheet,ImageBackground} from 'react-native';

class BusquedasScreen extends Component {
    static navigationOptions ={
        title: 'Buscador de locales gastronomicos'
    }
    render (){
        return(
            <View>
                <ImageBackground source={require('../imgs/cena2.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'rgba(32,41,48,0.7)'}}>
                        <Text style={estiloLocal.contenido1}>BUSCADOR DE RESTAURANTES</Text>
                        <Text style={estiloLocal.contenido1}>(POR CERCANIA, POR DIRECCION, POR NOMBRE, POR DESCRIPCION)</Text>
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
    contenido1:{
        padding: 4,
        fontFamily: 'sans-serif-light',
        fontWeight:'100',
        fontSize: 21,
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
export default BusquedasScreen;