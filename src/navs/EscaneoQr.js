import React, {Component} from 'react';
import {View, Text,Button,StyleSheet,ImageBackground} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

class EscaneoQrScreen extends Component {
    onSuccess(e){
        alert(e.data)
    }
    static navigationOptions ={
        title: 'Leer QR'
    }
    render (){
        return(
            <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'rgba(32,41,48,1)'}}>
                <QRCodeScanner  onRead={this.onSuccess.bind(this)} 
                                topContent={<Text>Enfoque al código</Text>}
                                bottomContent={<Text>Se habilitaran las demas funciones</Text>}
                />
            </View>
        );
    }
};
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
export default EscaneoQrScreen;