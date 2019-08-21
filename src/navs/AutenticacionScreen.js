import React, {Component} from 'react';
import { View, Text,StyleSheet,TouchableHighlight,ImageBackground} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import InicioSesionScreen from './InicioSesionScreen';
import RegistroScreen from './RegistroScreen';
import {contenedores,estiloLocal} from '../estilos/estilos';

class AutenticacionScreen extends Component {
    static navigationOptions ={
        title: 'Acceder como usuario'
    }
    _iniciarRegistro = async () =>{
        this.props.navigation.navigate('Registro');
    }
    _iniciarSesion = async () =>{
        this.props.navigation.navigate('InicioSesion');
    }
    render(){
        return(
        <View>
            <ImageBackground source={require('../imgs/cena2.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'rgba(32,41,48,0.7)'}}>
                <View>
                    <TouchableHighlight  onPress={this._iniciarRegistro} style={estiloLocal.boton1}>
                        <Text style={estiloLocal.contenido1} >Registrarse</Text>
                    </TouchableHighlight>
                </View> 
                <View>
                    <TouchableHighlight  onPress={this._iniciarSesion} style={estiloLocal.boton1}>
                        <Text style={estiloLocal.contenido1} >Iniciar sesion</Text>
                    </TouchableHighlight>
                </View> 
            </View>
            </ImageBackground>    
        </View>
        );
    }
}

const Navegador = createStackNavigator({
    Autenticacion: AutenticacionScreen,
    InicioSesion : InicioSesionScreen,
    Registro : RegistroScreen, 
},{
    initialRouteName: 'Autenticacion'
});

export default Navegador;