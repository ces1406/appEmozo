import React, {Component} from 'react';
import { View, Text, TextInput,StyleSheet, TouchableHighlight,ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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
                <Text style={estiloLocal.contenido1}>Nombre de usuario</Text>
                <TextInput onChange={(user)=>this.setState({usuario:user})} value={this.state.usuario} style={estiloLocal.inputs}></TextInput>
                <Text style={estiloLocal.contenido1}>Contraseña</Text>
                <TextInput onChange={(pas)=>this.setState({pass: pas})} value={this.state.pass} style={estiloLocal.inputs}></TextInput>
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
})
export default InicioSesionScreen;