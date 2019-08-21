import React, {Component} from 'react';
import { View, TextInput,Text,ImageBackground,ScrollView, Dimensions,Animated,TouchableHighlight} from 'react-native';
import {contenedores,estiloLocal} from '../estilos/estilos';
import { createStackNavigator } from 'react-navigation';
const { width } = Dimensions.get('window');

class BusquedasScreen extends Component {
    scrollX = new Animated.Value(0);
    static navigationOptions ={
        title: 'Buscar locales'
    }
    render (){
        let anchoScreen = Dimensions.get('window').width;
        let altoScreen = Dimensions.get('window').height;
        let posicion = Animated.divide(this.scrollX,width);
        let paginas =[1,2];
        return(
            <View>
                <ImageBackground source={require('../imgs/cena2.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'rgba(32,41,48,0.7)'}}>
                        <View style={{width,height:width}}>
                        <ScrollView horizontal={true} 
                                    pagingEnabled={true} 
                                    showsHorizontalScrollIndicator={false} 
                                    style={{borderBottomColor:'rgb(220,220,220)'}}
                                    onScroll={Animated.event([{nativeEvent:{contentOffset: {x:this.scrollX}}}])}
                                    scrollEventThrottle={16}>
                                <View style={{flex:1,justifyContent:'center',alignItems:'center', width: anchoScreen}}>
                                    <Text style={estiloLocal.titulo2}>Busqueda de locales</Text> 
                                    <Text style={estiloLocal.etiquetaInput2}>Establecimientos cercanos</Text>
                                    <TextInput  style={estiloLocal.inputs}></TextInput>
                                    <Text style={estiloLocal.etiquetaInput2}>Nombre</Text>
                                    <TextInput style={estiloLocal.inputs}></TextInput>
                                    <Text style={estiloLocal.etiquetaInput2}>Barrio/Localidad</Text>
                                    <TextInput style={estiloLocal.inputs}></TextInput>
                                    <Text style={estiloLocal.etiquetaInput2}>Calle</Text>
                                    <TextInput style={estiloLocal.inputs}></TextInput>
                                    <Text style={estiloLocal.etiquetaInput2}>Número</Text>
                                    <TextInput style={estiloLocal.inputs}></TextInput>
                                    <TouchableHighlight  style={estiloLocal.boton1}>
                                        <Text style={estiloLocal.textBoton1} >Buscar</Text>
                                    </TouchableHighlight>               
                                </View>
                                <View style={{flex:1,justifyContent:'center',alignItems:'center', width: anchoScreen}}> 
                                    <Text style={estiloLocal.titulo2}>Busqueda de platos</Text>
                                    <Text style={estiloLocal.etiquetaInput2}>Nombre</Text>
                                    <TextInput style={estiloLocal.inputs}></TextInput>
                                    <TouchableHighlight  style={estiloLocal.boton1}>
                                        <Text style={estiloLocal.textBoton1} >Buscar</Text>
                                    </TouchableHighlight>                   
                                </View> 
                        </ScrollView>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            {paginas.map((_,i)=>{   let opacity = posicion.interpolate({inputRange: [i-1,i,i+1], outputRange: [0.3,1,0.3],extrapolate:'clamp'});
                                                    return (<Animated.View key={i} style={{ opacity, height: 10, width: 10, backgroundColor: 'rgba(233,140,9,1)', margin: 8, borderRadius: 5 }}/>);
                                                }
                                        )
                            }                            
                        </View>

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
            return {headerTitle: 'Busqueda de locales y platos'};
        }
    }
}); 
//export default BusquedasScreen;
export default BusquedaStack;