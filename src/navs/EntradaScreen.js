import React, {Component} from 'react';
import { View, Text, TouchableHighlight, StyleSheet, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import {contenedores,estiloLocal} from '../estilos/estilos';

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
                            <Text style={estiloLocal.parrafo1}>E-Mozo es la app para poder manejarte en forma fácil y cómoda dentro de restaurantes y locales
                                            gastronómicos, podés realizar busquedas de los locales que más te gusten o que te queden mas
                                            cercanos y realizar distintas acciones dentro de ellos: ubicar tu mesa, consultar platos, invitar amigos
                                            a tu mesa y dividir los gastos entre otras
                            </Text>
                        </View>
                        <View style={{marginTop:40}}>                      
                            <TouchableHighlight  onPress={this._comenzar} style={estiloLocal.boton1}>
                                <Text style={estiloLocal.textBoton1} >Comenzar</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ImageBackground>      
            </View>       
        );
    }
};
export default EntradaScreen;