import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HOME_SCREEN, MESSAGE_SCREEN } from './NavigatorString';
import Home from '../Screen/Home';
import Message from '../Screen/Message';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
    // mean this will support upi intent also  ['mychat://app','upi://'],
    const Linking = {
        prefixes: ['mychat://app','upi://'],
        config: {
            screens: {
                /* Tabs:{ // this is for other like tabs 
                    screens:{ // inside tabs screen name
                        Profile:{
                            path:'Search/:query'
                        }
                    }
                } */
                Home: { // <- Here Home is Screen name
                    path: 'home' // <- This is a path that used we redirect to this screen you can set any thing here used when calling
                },
                Message: {
                    path: 'message/:msg'
                }
            }
        }
    }


    return (
        <NavigationContainer linking={Linking} fallback={
            <View>
                <ActivityIndicator color={'red'} size={30} />
                <Text>Loading...</Text>
            </View>
        }>
            <Stack.Navigator initialRouteName={HOME_SCREEN}>
                <Stack.Screen name={HOME_SCREEN} component={Home} />
                <Stack.Screen name={MESSAGE_SCREEN} component={Message} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}