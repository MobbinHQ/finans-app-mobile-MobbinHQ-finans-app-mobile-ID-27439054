import React, { useMemo } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';

export default function DovizCard(props) {

    const { colors } = useTheme();
    const s = useMemo(() => createStyles(colors));

    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('DovizDetail', {code: 'USDTRY'})} style={s.container}>
            <View style={{flexDirection: 'row'}}>
            <View>
            <Text style={s.dovizCode}>USD/TRY</Text>
            <Text style={s.dovizName}>Amerikan Doları</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
                <Icon name="time-outline" size={15} color="#746D69" />
                <Text style={s.clockText}> 15:34</Text>
            </View>
            </View>
            <View>
            <Text style={s.dovizPrice}>8,490</Text>
            <Text style={s.dovizProfit}>%-1.04</Text>
            </View>
        </TouchableOpacity>
    )
}

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
        width: wp('100%'),
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'space-between',
        padding: 20,
        flexDirection: 'row',
        backgroundColor: colors.dovizCardColor
    },
    dovizCode: {
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        color: colors.blueTextColor
    },
    dovizName: {
        fontFamily: 'Roboto-Medium',
        fontSize: 12,
        marginTop: 2,
        color: colors.blueTextColor
    },
    dovizPrice: {
        fontFamily: 'Roboto-Medium',
        fontSize: 20,
        color: colors.blueTextColor
    },
    dovizProfit: {
        fontFamily: 'Roboto-Medium',
        textAlign: 'right',
        fontSize: 12,
        color: 'red', 
    },
    clockText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        marginTop: 1,
        color: '#746D69',
    }
});
