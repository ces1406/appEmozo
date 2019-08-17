/* Comoponente mobile de la aplicacion Emozo*/
import { createSwitchNavigator, createAppContainer} from "react-navigation";
import AppStack from './src/navs/UsuarioScreen';
import EntradaScreen from './src/navs/EntradaScreen';
import AuthStack from './src/navs/AutenticacionScreen';

const App = createAppContainer(
  createSwitchNavigator(
    {
      NavInicio: EntradaScreen,
      NavUsuarios: AppStack,
      NavAutenticacion: AuthStack,
    },
    {
      initialRouteName: 'NavInicio' 
    }
  )
);

export default App;