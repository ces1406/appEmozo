import React, {Component} from 'react';
import { View, Text, TextInput,StyleSheet, TouchableHighlight,ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {contenedores,estiloLocal} from '../estilos/estilos';

class InicioSesionScreen extends Component { 
    constructor(props){
        super(props);
        this.state = {
            usuario:'',
            pass:''
        }
    }    
    static navigationOptions ={
        title: 'Iniciando Sesion'
    }
    _iniciarSesion = async () =>{
        await AsyncStorage.setItem('@autorizado','sip');//harcodeado: por ahora todos somos usuarios registrados y logueados
        this.props.navigation.navigate('NavUsuarios');
    } 
    render(){
        return(
        <View>
            <ImageBackground source={require('../imgs/cena2.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'rgba(32,41,48,0.7)'}}>
                <Text style={estiloLocal.etiquetaInput1}>Nombre de usuario</Text>
                <TextInput onChange={(user)=>this.setState({usuario:user})} style={estiloLocal.inputs} selectionColor={'rgba(220,217,231,1)'}></TextInput>
                <View style={{marginTop:40}}></View>
                <Text style={estiloLocal.etiquetaInput1}>Contraseña</Text>
                <TextInput onChange={(pas)=>this.setState({pass: pas})} value={this.state.pass} style={estiloLocal.inputs}></TextInput>
                <View style={{marginTop:40}}>
                    <TouchableHighlight  onPress={this._iniciarSesion} style={estiloLocal.boton1}>
                        <Text style={estiloLocal.textBoton1} >Iniciar sesion</Text>
                    </TouchableHighlight>
                    <View style={{marginTop:40}}></View>
                    <TouchableHighlight  onPress={this._iniciarSesion} style={estiloLocal.boton1}>
                        <Text style={estiloLocal.aviso1} >olvide mi contraseña</Text>
                    </TouchableHighlight>
                </View> 
            </View>
            </ImageBackground>
        </View>
        );
    }
}

export default InicioSesionScreen;