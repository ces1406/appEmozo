import {StyleSheet} from 'react-native';
const fondos= StyleSheet.create({
    fondo1:{
        backgroundColor: 'rgba(32,41,48,1)',
    }
});
const titulosTxt = StyleSheet.create({
    titulo1: {
        color:'rgba(255,247,198,1)',
        fontWeight:'200',
        fontSize:50,
        textAlign: 'center',
    }
});
const contenedores = StyleSheet.create({
    contenedor1:{
        borderWidth: 3,
        borderColor:'rgba(34,18,12,1)',
        borderRadius:2,
        borderStyle: 'solid'
    },
    contenedor2:{
        borderWidth:2,
        borderColor: 'rgba(54,46,43,1)',
    }
});
const botones = StyleSheet.create({
    boton1: {
        backgroundColor: 'rgba(205,219,169,1)',
        borderColor: 'rgba(34,18,12,1)',
        alignContent: 'center',
    }
});
export {fondos,contenedores,titulosTxt,botones};