import { View, Text, Button } from 'react-native'
import React from 'react'
import { HOME_SCREEN, MESSAGE_SCREEN } from '../Navigations/NavigatorString'

const Message = ({ navigation, route }) => {

    return (
        <View>
            <Text style={{ textAlign: 'center', color: 'green' }}>Message</Text>
            <Text style={{ textAlign: 'center', color: 'red' }}>{route?.params?.msg || 3322}</Text>

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