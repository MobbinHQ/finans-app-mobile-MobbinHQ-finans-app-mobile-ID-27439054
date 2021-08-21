import React from 'react'
import { View, Text } from 'react-native'
import Header from '../components/Header';

export default function Convert() {
    return (
        <View style={s.container}>
            <Header text="Çevir" />
        </View>
    )
}

const s = {
    container: {
        flex: 1,   
    }
}
