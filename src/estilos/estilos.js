import {StyleSheet} from 'react-native';

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
const estiloLocal = StyleSheet.create({
    fondo1:{
        backgroundColor:'rgba(32,41,48,1)',
    },
    estilo1:{
        alignItems: 'center',
        padding:10,
        position: 'relative'
    },
    titulo1: {
        color:'rgba(226,247,245,1)',
        fontFamily: 'sans-serif-thin',
        fontWeight:'100',
        fontSize:45,
        textAlign: 'center',
    },
    contenedor1:{
        marginTop: 60,
        borderWidth: 2,
        borderColor:'rgba(34,18,12,1)',
        borderRadius:10,
        borderStyle: 'solid',
        position:'relative',
    },
    contenido1:{
        margin: 1,
        padding: 2,
        fontFamily: 'sans-serif-light',
        fontWeight:'100',
        fontSize: 15,
        textAlign:'justify',
        color:'rgba(226,247,245,1)',
    },
    boton1:{
        marginTop: 10,
        padding: 4,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(42,51,58,1)',
        backgroundColor:'rgba(32,41,48,0.74)',
        borderRadius: 5,
    },
    inputs:{
        backgroundColor: 'rgba(228,224,243,1)',
        width: 240,
        borderRadius: 4,
        height:28,
        fontWeight:'200',
        fontSize: 15,
        color:'rgba(16,13,21,1)',
        margin: 1,
        padding: 1,
    }
});
export {contenedores,estiloLocal};