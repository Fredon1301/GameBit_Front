import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../pages/welcome/Welcome';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Home from '../pages/home/Home';
import Cart from '../pages/cart/Cart';
import ConfirmationPage from '../pages/confirmationPage/ConfirmationPage';
import Details from '../pages/details/Details';
import Chat from '../pages/chat/Chat';
import CardGenerico from '../components/CardGenerico/CardGenerico';
import { FavoritosProvider } from '../pages/favorites/FavoritosContext';
import Favoritos from '../pages/favorites/Favoritos';
import ProfileImageUploadScreen from '../pages/profile/ProfileImageUploadScreen';


const Stack = createNativeStackNavigator();

export type RootStackParamsList = {
    Welcome: {placeholder: String}
    Login: {placeholder: String}
    Register: {placeholder: String}
    Home: {placeholder: String}
    Cart: {placeholder: String}
    ConfirmationPage: {placeholder: String}
    Details: {placeholder: string}
    Chat: {placeholder: string}
    CardGenerico: {placeholder: String}


}

export default function Routes() {
    return(
        <FavoritosProvider>
        <Stack.Navigator>
            <Stack.Screen
                name = 'Welcome'
                component={Welcome}
                options={{headerShown: false}}
                />
            <Stack.Screen
                name = 'Login'
                component={Login}
                options={{headerShown: false}}
                />
            <Stack.Screen
                name = 'Register'
                component={Register}
                options={{headerShown: false}}
                />
            <Stack.Screen
                name = 'Home'
                component={Home}
                options={{headerShown: false}}
                />
            <Stack.Screen
                name = 'Cart'
                component={Cart}
                options={{headerShown: false}}
                />
            <Stack.Screen
                name = 'ConfirmationPage'
                component={ConfirmationPage}
                options={{headerShown: false}}
                />
            <Stack.Screen
                name = 'Details'
                component={Details}
                options={{headerShown: false}}
                />
            
            <Stack.Screen
                name = 'Chat'
                component={Chat}
                />
            <Stack.Screen
                name = 'CardGenerico'
                component={CardGenerico}
                />
            <Stack.Screen
                name = 'Favoritos'
                component={Favoritos}
                />
            <Stack.Screen
                name = 'Profile'
                component={ProfileImageUploadScreen}
                />

            
            
            
            </Stack.Navigator>
            </FavoritosProvider>
);
}
