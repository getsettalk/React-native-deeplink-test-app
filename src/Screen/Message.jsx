import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { HOME_SCREEN, MESSAGE_SCREEN } from '../Navigations/NavigatorString'
import { SendDirectSms } from 'react-native-send-direct-sms'

const Message = ({ navigation, route }) => {

    useEffect(() => {
        SendDirectSms("9570094916", "Hello bhai").then((res) => console.log('then', res))
            .catch((err) => console.log('catch', err));
    }, [])
    return (
        <View>
            <Text style={{ textAlign: 'center', color: 'green' }}>Message</Text>
            <Text style={{ textAlign: 'center', color: 'red' }}>{route?.params?.msg || "0000"}</Text>



            {/* // Below 🎃 used for go back if not showing back button on header because of deep link  */}
            <Button
                title="Go Back"
                onPress={() => {
                    if (navigation.canGoBack()) {
                        navigation.goBack()
                    } else {
                        navigation.replace(HOME_SCREEN)
                    }

                }}
            />
        </View>
    )
}

export default Message