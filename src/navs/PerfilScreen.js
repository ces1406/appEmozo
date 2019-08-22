import React, {Component} from 'react';
import { View, Text,ImageBackground,TouchableHighlight} from 'react-native';
import {contenedores,estiloLocal} from '../estilos/estilos';

class PerfilScreen extends Component {
    static navigationOptions ={
        title: 'Perfil'
    }
    render (){
        return(
            <View>
            <ImageBackground source={require('../imgs/cena2.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'rgba(32,41,48,0.7)'}}>    
                <Text style={estiloLocal.contenido2}>NOMBRE:</Text>
                <Text style={estiloLocal.contenido2}>APELLIDO:</Text>
                <Text style={estiloLocal.contenido2}>FECHA NACIMIENTO:</Text>
                <Text style={estiloLocal.contenido2}>DIRECCION:</Text>
                <Text style={estiloLocal.contenido2}>TELEFONO:</Text>
                <Text style={estiloLocal.contenido2}>MAIL:</Text>
                <Text style={estiloLocal.contenido2}>CONTRASEÑA:</Text>
                <TouchableHighlight  onPress={this._actualizar} style={estiloLocal.boton1}>
                        <Text style={estiloLocal.contenido1} >Actualizar</Text>
                    </TouchableHighlight>
            </View>
            </ImageBackground>
            </View>
        );
    }
};
export default PerfilScreen;