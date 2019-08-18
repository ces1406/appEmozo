import React, {Component} from 'react';
import { View, Text, TouchableHighlight, StyleSheet, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class EntradaScreen extends Component { 
    static navigationOptions ={
        title: 'Inicando aplicacion'
    }
    _comenzar = async ()=>{
        const autorizado = await AsyncStorage.getItem('@autorizado');
        this.props.navigation.navigate(autorizado ? 'NavUsuarios':'NavAutenticacion');
    }        
    render(){
        return(      
            <View >      
                <ImageBackground source={require('../imgs/cena2.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(32,41,48,0.7)'}}>
                        <View style={estiloLocal.estilo1}>
                            <Text style={estiloLocal.titulo1}>E-Mozo</Text>
                        </View>
                        <View style={estiloLocal.contenedor1} >
                            <Text style={estiloLocal.contenido1}>E-Mozo es la app para poder manejarte en forma fácil y cómoda dentro de Restaurantes y locales
                                            gastronómicos, podés hacer busquedas de los locales que te gusten más o que te queden mas
                                            cercanos y realizar distintas acciones dentro de ellos: ubicar tu mesa, consultar platos, invitar amigos
                                            a tu mesa, dividir los gastos, etc.
                            </Text>
                        </View>
                        <View>
                            <TouchableHighlight  onPress={this._comenzar} style={estiloLocal.boton1}>
                                <Text style={estiloLocal.contenido1} >Comenzar</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ImageBackground>      
            </View>       
        );
    }
};
const estiloLocal = StyleSheet.create({
    fondo1:{
        backgroundColor:'rgba(32,41,48,1)',
    },
    estilo1:{
        alignItems: 'center',
        padding:10,
        position: 'relative'
    },
    titulo1: {
        color:'rgba(226,247,245,1)',
        fontFamily: 'sans-serif-thin',
        fontWeight:'100',
        fontSize:45,
        textAlign: 'center',
    },
    contenedor1:{
        backgroundColor:'rgba(32,41,48,0.78)',
        marginTop: 60,
        borderWidth: 2,
        borderColor:'rgba(86,54,27,1)',
        borderRadius:10,
        borderStyle: 'solid',
        position:'relative',
    },
    contenido1:{
        padding: 4,
        fontFamily: 'sans-serif-light',
        fontWeight:'100',
        fontSize: 14,
        textAlign:'justify',
        color:'rgba(226,247,245,1)',
    },
    boton1:{        
        marginTop: 10,
        padding: 8,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'rgba(86,54,27,1)',
        backgroundColor:'rgba(32,41,48,0.78)',
        borderRadius: 5,
    }
})
export default EntradaScreen;