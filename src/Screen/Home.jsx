import { View, Text, Button, Linking, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MESSAGE_SCREEN } from '../Navigations/NavigatorString'
import QRCode from 'react-native-qrcode-svg'
import SimCardsManagerModule from 'react-native-sim-cards-manager'

const Home = (props) => {
    const { navigation } = props
    const [data, setdata] = useState([])

    useEffect(() => {
        SimCardsManagerModule.getSimCards({
            title: 'App Permission',
            message: 'Custom message',
            buttonNeutral: 'Not now',
            buttonNegative: 'Not OK',
            buttonPositive: 'OK',
        })
            .then((array) => {
                setdata(array); // Fix: set the state with the received array
            })
            .catch((error) => {
                console.error(error)
            });
    }, []);

    const renderSimCard = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.displayName}</Text>
            <Text style={styles.cardText}>Carrier: {item.carrierName}</Text>
            <Text style={styles.cardText}>Phone Number: {item.phoneNumber || 'N/A'}</Text>
        </View>
    );
    
    return (
        <View style={{ marginTop: 5, marginLeft: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            <QRCode
                value="upi://pay?pa=sk7371048499@paytm&cu=INR&tn=testing&am=10"
                size={200}
                enableLinearGradient={true}
                linearGradient={['rgb(29, 36, 202)', 'rgb(108, 34, 166)']}

                logoBackgroundColor='transparent'
            />
            <Text style={{ color: '#000', paddingVertical: 20, textAlign: 'center' }}>Home</Text>
            <Button title='Message Screen' onPress={() => navigation.navigate(MESSAGE_SCREEN)} />

            <View style={{ marginTop: 30 , marginBottom: 20}}>
                <Button title='Open UPI App' onPress={() => Linking.openURL("upi://pay?pa=sk7371048499@paytm&cu=INR&tn=testing&am=10")} />
            </View>

            <FlatList
                data={data}
                renderItem={renderSimCard}
                keyExtractor={(item) => item.subscriptionId.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    cardText: {
        fontSize: 16,
        color: '#555',
    },
});


export default Home