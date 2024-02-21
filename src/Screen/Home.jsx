import { View, Text, Button } from 'react-native'
import React from 'react'
import { MESSAGE_SCREEN } from '../Navigations/NavigatorString'
import QRCode from 'react-native-qrcode-svg'

const Home = (props) => {
    const { navigation } = props
    return (
        <View style={{marginTop:5, marginLeft:5}}>
            <QRCode
                value="Just some string value"
                logoSize={30}
                logoBackgroundColor='transparent'
            />
            <Text style={{ color: '#000', paddingVertical: 20, textAlign: 'center' }}>Home</Text>
            <Button title='Message Screen' onPress={() => navigation.navigate(MESSAGE_SCREEN)} />
        </View>
    )
}

export default Home