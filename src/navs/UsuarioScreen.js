import React, {Component} from 'react';
import { View, Text,StyleSheet,ImageBackground} from 'react-native';
import { createBottomTabNavigator,createMaterialTopTabNavigator } from 'react-navigation';
import BusquedasScreen from './BusquedasScreen';
import CuentaScreen from './CuentaScreen';
import NavEnLocalScreen from './NavEnLocalScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

//class UsuarioScreen extends Component {
/*class CerrarSesionScreen extends Component {
    static navigationOptions ={
        title: 'Salir'
    }
    _cerrarSesion = async () =>{
        await AsyncStorage.clear();
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
                <Text style={estiloLocal.contenido1}>
                    aquí puedes buscar locales, acceder a datos de tu cuenta y si ya te encuentras en el local gastronómico
                    escannear el codigo QR de una mesa para comenzar a disfrutar tu experiencia
                </Text>
                </View>
            </View>
            </ImageBackground>
            </View>
        );
    }
}*/

//const NavigatorUsuario = createMaterialTopTabNavigator ({  
const NavigatorUsuario = createBottomTabNavigator ({  
/*         Salir: {
            screen:()=>null,
            navigationOptions:{
                tabBarOnPress:async()=>{
                    await AsyncStorage.clear();
                    this.props.navigation.navigate('NavInicio');
                },
            }
        }, */
        Busquedas:{
            screen:BusquedasScreen,
        },
        Cuenta: CuentaScreen,
        EnLocal: {
            screen:NavEnLocalScreen,
        }   
    },{    
    initialRouteName: 'Cuenta',
    navigationOptions:({navigation})=>{
        const {routeName} = navigation.state.routes[navigation.state.index];
        return {
            header:null,
            headerTitle: routeName,
        };
    },        
    defaultNavigationOptions: ({ navigation })=>({
        tabBarIcon: ({ focused, horizontal, tintColor})=>{            
            const {routeName} = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === 'Busquedas' ){
                    iconName =`ios-search${focused?'':''}`;//-outline'}`;
            }else if(routeName === 'Cuenta' ){
                    iconName =`ios-person${focused?'':''}`;//-outline'}`;
            }else if(routeName === 'EnLocal' ){
                    iconName =`ios-restaurant${focused?'':''}`;//-outline'}`;
            };
            return <IconComponent name={iconName} size={45} color={tintColor} />;
        }
    }),
    tabBarOptions: {
        activeTintColor: 'rgba(19,14,36,1)',
        inactiveTintColor: 'rgba(138,133,144,1)',
        labelStyle: {
            fontSize: 12,
        },
        style:{
            height: 80,
        },
    },
});
export default NavigatorUsuario; 