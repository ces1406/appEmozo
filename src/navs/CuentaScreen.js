import React, {Component} from 'react';
import { View, TouchableHighlight,Text,StyleSheet,ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {contenedores,estiloLocal} from '../estilos/estilos';
import { createStackNavigator } from 'react-navigation';
import PerfilScreen from './PerfilScreen';
import CalificacionesScreen from './CalificacionesScreen';

class CuentaScreen extends Component {
    _cerrarSesion = async () =>{
        await AsyncStorage.clear();
        this.props.navigation.navigate('NavInicio');
    } 
    static navigationOptions ={
        title: 'Cuenta'
    }
    _perfil = ()=>{this.props.navigation.navigate('Perfil'); }
    _calificaciones = ()=>{this.props.navigation.navigate('Calificaciones'); }
    render (){
        return(
            <View >
                <ImageBackground source={require('../imgs/cena2.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'rgba(32,41,48,0.7)'}}>
                        <TouchableHighlight  onPress={this._perfil} style={estiloLocal.boton1}>
                            <Text style={estiloLocal.contenido1} >Mi perfil</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={this._calificaciones} style={estiloLocal.boton1}>
                            <Text style={estiloLocal.contenido1} >Mis calificaciones</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={this._otro} style={estiloLocal.boton1}>
                            <Text style={estiloLocal.contenido1} >-Algun otro-</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={this._cerrarSesion} style={estiloLocal.boton1}>
                            <Text style={estiloLocal.contenido1} >Cerrar Sesión</Text>
                        </TouchableHighlight>
                    </View>                     
                </ImageBackground>
            </View>
        );
    }
};
const CuentaStack = createStackNavigator ({
    Cuenta: {
        screen: CuentaScreen,
        navigationOptions: ({navigation})=>{
            return {headerTitle: 'Cuenta de usuario'};
        }
    },
    Perfil: {
        screen: PerfilScreen,
        navigationOptions: ({navigation})=>{
            return {headerTitle: 'Perfil de usuario'};
        }
    },
    Calificaciones: {
        screen: CalificacionesScreen,
        navigationOptions: ({navigation})=>{
            return {headerTitle: 'Calificaciones del usuario'};
        }
    },
});
export default CuentaStack
//export default CuentaScreen;