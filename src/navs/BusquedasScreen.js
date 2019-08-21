import React, {Component} from 'react';
import { View, Text,Button,StyleSheet,ImageBackground} from 'react-native';
import {contenedores,estiloLocal} from '../estilos/estilos';
import { createStackNavigator } from 'react-navigation';

class BusquedasScreen extends Component {
    static navigationOptions ={
        title: 'Buscar locales'
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
 const BusquedaStack = createStackNavigator ({
    Busqueda: {
        screen: BusquedasScreen,
        navigationOptions: ({navigation})=>{
            return {headerTitle: 'Busqueda de locales'};
        }
    }
}); 
//export default BusquedasScreen;
export default BusquedaStack;