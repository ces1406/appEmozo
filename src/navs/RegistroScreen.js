import React, {Component} from 'react';
import { View, Text, TextInput,TouchableHighlight, StyleSheet,ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {contenedores,estiloLocal} from '../estilos/estilos';

class RegistroScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombre:'',
            apellido:'',
            usuario:'',
            telefono:'',
            direccion:'',
            fechaNac:'',
            pass1:'',
            pass2:'',
            mail:'',
        }
    }
    static navigationOptions ={
        title: 'Registrarse en la aplicacion'
    }
    _registrarse = async () =>{
        await AsyncStorage.setItem('@autorizado','true');//harcodeado: por ahora todos somos usuarios registrados y logueados
        this.props.navigation.navigate('NavUsuarios');
    } 
    render (){
        return (
            <View>
            <ImageBackground source={require('../imgs/cena2.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'rgba(32,41,48,0.7)'}}>
                <Text style={estiloLocal.contenido1}>Indique su nombre</Text>
                <TextInput onChange={(user)=>this.setState({usuario:nombre})} value={this.state.nombre} style={estiloLocal.inputs}></TextInput>
                <Text style={estiloLocal.contenido1}>Indique su apellido</Text>
                <TextInput onChange={(user)=>this.setState({usuario:apellido})} value={this.state.apellido} style={estiloLocal.inputs}></TextInput>
                <Text style={estiloLocal.contenido1}>Indique su dirección</Text>
                <TextInput onChange={(user)=>this.setState({usuario:direccion})} value={this.state.direccion} style={estiloLocal.inputs}></TextInput>
                <Text style={estiloLocal.contenido1}>Indique su número telefónico</Text>
                <TextInput onChange={(user)=>this.setState({usuario:telefono})} value={this.state.telefono} style={estiloLocal.inputs}></TextInput>
                <Text style={estiloLocal.contenido1}>Indique su fecha de nacimiento</Text>
                <TextInput onChange={(user)=>this.setState({usuario:fechaNac})} value={this.state.fechaNac} style={estiloLocal.inputs}></TextInput>
                <Text style={estiloLocal.contenido1}>Elija un nombre de usuario</Text>
                <TextInput onChange={(user)=>this.setState({usuario:user})} value={this.state.usuario} style={estiloLocal.inputs}></TextInput>
                <Text style={estiloLocal.contenido1}>Indica un mail </Text>
                <TextInput onChange={(user)=>this.setState({usuario:mail})} value={this.state.mail} style={estiloLocal.inputs}></TextInput>
                <Text style={estiloLocal.contenido1}>Contraseña</Text>
                <TextInput onChange={(pas)=>this.setState({pass1: pas})} value={this.state.pass1} style={estiloLocal.inputs}></TextInput>
                <Text style={estiloLocal.contenido1}>Repita la contraseña</Text>
                <TextInput onChange={(pas)=>this.setState({pass2: pas})} value={this.state.pass2} style={estiloLocal.inputs}></TextInput>
                <View>
                    <TouchableHighlight  onPress={this._registrarse} style={estiloLocal.boton1}>
                        <Text style={estiloLocal.contenido1} >Registrarse</Text>
                    </TouchableHighlight>
                </View> 
            </View>
            </ImageBackground>
            </View>
        );
    }
}
export default RegistroScreen; 