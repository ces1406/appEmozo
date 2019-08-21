import React, {Component} from 'react';
import { View, Text,TouchableHighlight,ImageBackground} from 'react-native';
import { createBottomTabNavigator,createStackNavigator } from 'react-navigation';
import VerCartaScreen from './VerCartaScreen';
import EscanQrScreen from './EscaneoQr';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {contenedores,estiloLocal} from '../estilos/estilos';

class AgregarComensalScreen extends Component {
    static navigationOptions ={
        title: 'Invitar'
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
        title: 'Ordenar'
    }
    render (){
        return(
            <View>
                <ImageBackground source={require('../imgs/cena2.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'rgba(32,41,48,0.7)'}}>
                        <Text style={estiloLocal.contenido1}>ORDENADO UN PEDIDO...</Text> 
                        <Icon name="rocket" size={30} color="#900" />
                    </View> 
                </ImageBackground>              
            </View>
        );
    }
};
class PedirCuentaScreen extends Component {
    static navigationOptions ={
        title: 'Pedir cuenta'
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
class EnLocalScreen extends Component {
    static navigationOptions ={
        title: 'En el local'
    }
    _escanearqr = ()=>{this.props.navigation.navigate('EscanQr'); }
    _vercarta = ()=>{this.props.navigation.navigate('VerCarta'); }
    _hacerpedido = ()=>{this.props.navigation.navigate('Ordenar'); }
    _invitar = ()=>{this.props.navigation.navigate('AgregarComensal'); }
    _llamarmozo = ()=>{this.props.navigation.navigate('LlamarMozo'); }
    _pedircuenta = ()=>{this.props.navigation.navigate('PedirCuenta'); }
    render (){
        return(
            <View>
                <ImageBackground source={require('../imgs/cena2.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'rgba(32,41,48,0.7)'}}>
                        <Text style={estiloLocal.contenido1}>Si ya estás en el establecimiento elige la opción "Escanear codigo QR"
                            y enfoca el código QR que se encuentra en la mesa para registrarte en ella y comenzar a interactuar</Text> 
                        <TouchableHighlight  onPress={this._escanearqr} style={estiloLocal.boton1}>
                            <Text style={estiloLocal.contenido1} >Escanear el código QR</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={this._vercarta} style={estiloLocal.boton1}>
                            <Text style={estiloLocal.contenido1} >Ver la carta del local</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={this._hacerpedido} style={estiloLocal.boton1}>
                            <Text style={estiloLocal.contenido1} >Realizar el pedido</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={this._invitar} style={estiloLocal.boton1}>
                            <Text style={estiloLocal.contenido1} >Invitar un amigo a la mesa</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={this._llamarmozo} style={estiloLocal.boton1}>
                            <Text style={estiloLocal.contenido1} >Llamar al mozo</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={this._pedircuenta} style={estiloLocal.boton1}>
                            <Text style={estiloLocal.contenido1} >Pedir la cuenta</Text>
                        </TouchableHighlight>
                    </View>
                </ImageBackground>        
            </View>
        );
    }
};
const NavEnLocal = createStackNavigator(
    {
        EnLocal: {
            screen: EnLocalScreen,
            navigationOptions: ({navigation})=>{
                return {headerTitle: 'En el establecimiento'};
            }
        },
        EscanQr: {
            screen: EscanQrScreen,
            navigationOptions: ({navigation})=>{
                return {headerTitle: 'Escanear el codigo QR'};
            }
        },
        VerCarta: {
            screen: VerCartaScreen,
            navigationOptions: ({navigation})=>{
                return {headerTitle: 'Ver la carta'};
            }
        },
        AgregarComensal: {
            screen: AgregarComensalScreen,
            navigationOptions: ({navigation})=>{
                return {headerTitle: 'Invitar a la mesa'};
            }
        },
        LlamarMozo: {
            screen: LlamarMozoScreen,
            navigationOptions: ({navigation})=>{
                return {headerTitle: 'Llamar al mozo'};
            }
        },
        Ordenar: {
            screen: OrdenarScreen,
            navigationOptions: ({navigation})=>{
                return {headerTitle: 'Ordenar el pedido'};
            }
        },
        PedirCuenta: {
            screen: PedirCuentaScreen,
            navigationOptions: ({navigation})=>{
                return {headerTitle: 'Pedir la cuenta'};
            }
        },
    },{
        initialRouteName: 'EnLocal',
    }
);
/* const NavEnLocal = createBottomTabNavigator(
    {
        EscanQr: EscanQrScreen,
        VerCarta: VerCartaScreen,
        AgregarComensal: AgregarComensalScreen,
        LlamarMozo: LlamarMozoScreen,
        Ordenar: OrdenarScreen,
        PedirCuenta: PedirCuentaScreen 
    },{
        initialRouteName: 'Ordenar',        
        defaultNavigationOptions: ({ navigation })=>({
            tabBarIcon: ({ focused, horizontal, tintColor})=>{
                const ok = 'ok';//EscanQrScreen.state.lectura;
                const {routeName} = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'EscanQr'){
                    iconName =`ios-aperture${(ok==='ok')?'':'-outline'}`;
                }else if(routeName === 'VerCarta' ){
                    iconName =`ios-aperture${(ok==='ok')?'':'-outline'}`;
                }else if(routeName === 'AgregarComensal' ){
                    iconName =`ios-aperture${(ok==='ok')?'':'-outline'}`;
                }else if(routeName === 'LlamarMozo' ){
                    iconName =`ios-aperture${(ok==='ok')?'':'-outline'}`;
                }else if(routeName === 'Ordenar' ){
                    iconName =`ios-aperture${(ok==='ok')?'':'-outline'}`;
                }else if(routeName === 'PedirCuenta' ){
                    iconName =`ios-aperture${(ok==='ok')?'':'-outline'}`;
                };
                return <IconComponent name={iconName} size={45} color={tintColor} />;
            }
        }),
        tabBarOptions: {
            activeTintColor: 'rgba(130,67,251,1)',
            inactiveTintColor: 'rgba(138,133,144,1)',
            labelStyle: {
                fontSize: 12,
            },
            style:{
                height: 80,
            },
          },
    }
); */
export default NavEnLocal;