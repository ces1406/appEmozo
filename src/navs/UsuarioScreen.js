import React, {Component} from 'react';
import { View, Text,TouchableHighlight,StyleSheet,ImageBackground} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import BusquedasScreen from './BusquedasScreen';
import ReservasScreen from './ReservasScreen';
import DatosScreen from './DatosScreen';
import NavEnLocalScreen from './ActualScreen';
import AsyncStorage from '@react-native-community/async-storage';

class UsuarioScreen extends Component {
    static navigationOptions ={
        title: 'Opciones para el usuario'
    }
    _cerrarSesion = async () =>{
        await AsyncStorage.clear();//harcodeado: por ahora todos somos usuarios registrados y logueados
        this.props.navigation.navigate('NavInicio');
    } 
    _buscarLocal = ()=>{this.props.navigation.navigate('Busquedas'); }
    _reservas = ()=>{this.props.navigation.navigate('Reservas'); }
    _datosUsuario = ()=>{this.props.navigation.navigate('Datos'); }
    _reservaActual = ()=>{this.props.navigation.navigate('EnLocal'); }
    render () {
        return (
            <View>
            <ImageBackground source={require('../imgs/cena2.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'rgba(32,41,48,0.7)'}}>    
                <View>
                    <TouchableHighlight  onPress={this._buscarLocal} style={estiloLocal.boton1}>
                        <Text style={estiloLocal.contenido1} >Busqueda de locales</Text>
                    </TouchableHighlight>
                </View> 
                <View>
                    <TouchableHighlight  onPress={this._reservas} style={estiloLocal.boton1}>
                        <Text style={estiloLocal.contenido1} >Mis Reservas</Text>
                    </TouchableHighlight>
                </View> 
                <View>
                    <TouchableHighlight  onPress={this._datosUsuario} style={estiloLocal.boton1}>
                        <Text style={estiloLocal.contenido1} >Mis datos </Text>
                    </TouchableHighlight>
                </View> 
                <View>
                    <TouchableHighlight  onPress={this._reservaActual} style={estiloLocal.boton1}>
                        <Text style={estiloLocal.contenido1} >Reserva actual</Text>
                    </TouchableHighlight>
                </View> 
                <View>
                    <TouchableHighlight  onPress={this._cerrarSesion} style={estiloLocal.boton1}>
                        <Text style={estiloLocal.contenido1} >Cerrar Sesión</Text>
                    </TouchableHighlight>
                </View> 
            </View>
            </ImageBackground>
            </View>
        );
    }
}

 const NavigatorUsuario = createStackNavigator ({
    Usuario: UsuarioScreen,
    Busquedas: BusquedasScreen,
    Datos: DatosScreen,
    Reservas: ReservasScreen, 
    EnLocal: NavEnLocalScreen   
},{
    initialRouteName: 'Usuario'
});

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
        marginTop: 60,
        borderWidth: 2,
        borderColor:'rgba(34,18,12,1)',
        borderRadius:10,
        borderStyle: 'solid',
        position:'relative',
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

export default NavigatorUsuario; 