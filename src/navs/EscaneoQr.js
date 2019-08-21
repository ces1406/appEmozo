import React, {Component} from 'react';
import {View, Text,Button,StyleSheet,ImageBackground} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {contenedores,estiloLocal} from '../estilos/estilos';

class EscaneoQrScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            lectura:'ok'
        }
    } 
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
export default EscaneoQrScreen;