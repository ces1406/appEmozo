import React, {Component} from 'react';
import { View, Text,StyleSheet,ImageBackground} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import VerCartaScreen from './VerCartaScreen';
import EscanQrScreen from './EscaneoQr';

class AgregarComensalScreen extends Component {
    static navigationOptions ={
        title: 'Invitando a compartir mesa'
    }
    render (){
        return(
            <View>
                <ImageBackground source={require('../imgs/cena2.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'rgba(32,41,48,0.7)'}}>
                        <Text style={estiloLocal.contenido1}>INVITANDO A OTRO COMENSAL A LA MESA...</Text>
                    </View> 
                </ImageBackground>
            </View>
        );
    }
};
class LlamarMozoScreen extends Component {
    static navigationOptions ={
        title: 'Mozo'
    }
    render (){
        return(
            <View>
                <ImageBackground source={require('../imgs/cena2.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'rgba(32,41,48,0.7)'}}>
                        <Text style={estiloLocal.contenido1}>LLAMANDO AL MOZO...</Text> 
                    </View>
                </ImageBackground>    
            </View>
        );
    }
};
class OrdenarScreen extends Component {
    static navigationOptions ={
        title: 'Ordenar un pedido'
    }
    render (){
        return(
            <View>
                <ImageBackground source={require('../imgs/cena2.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'rgba(32,41,48,0.7)'}}>
                        <Text style={estiloLocal.contenido1}>ORDENADO UN PEDIDO...</Text> 
                    </View> 
                </ImageBackground>              
            </View>
        );
    }
};
class PedirCuentaScreen extends Component {
    static navigationOptions ={
        title: 'Pedir la cuenta'
    }
    render (){
        return(
            <View>
                <ImageBackground source={require('../imgs/cena2.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'rgba(32,41,48,0.7)'}}>
                        <Text style={estiloLocal.contenido1}>PIDIENDO LA CUENTA...</Text> 
                    </View>
                </ImageBackground>        
            </View>
        );
    }
};
const NavEnLocal = createBottomTabNavigator({
    EscanQr: EscanQrScreen,
    VerCarta: VerCartaScreen,
    AgregarComensal: AgregarComensalScreen,
    LlamarMozo: LlamarMozoScreen,
    Ordenar: OrdenarScreen,
    PedirCuenta: PedirCuentaScreen 
});
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
export default NavEnLocal;