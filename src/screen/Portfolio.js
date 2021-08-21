import React, { useMemo } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';

export default function Portfolio(props) {

    const { colors } = useTheme();
    const s = useMemo(() => createStyles(colors));

    return (
        <View style={s.container}>
            <Header text="Portföy" navigation={props.navigation} />
            <View style={{justifyContent: 'center',alignItems: 'center', flex: 1}}>
                <Icon name="briefcase-outline" size={100} color={colors.blueTextColor} />
                <Text style={s.alertText}>Henüz portföyünde izlediğin bir döviz birimi yok. Hemen piyasalara git izleme listene ekle!</Text>

                <TouchableOpacity onPress={() => props.navigation.navigate('HomePage')} style={s.buttonView}>
                    <Text style={s.buttonText}>Piyasalara Git</Text>
                </TouchableOpacity>
                
            </View>

        </View>
    )
}

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor2,
    },
    alertText: {
        fontFamily: 'Roboto-Medium',
        fontWeight: "500",
        fontSize: 16,
        color: colors.blueTextColor,
        width: wp('90%'),
        textAlign: 'center',
        marginTop: 20,
    },
    buttonView: {
        width: wp('45%'),
        height: 40,
        backgroundColor: '#005b96',
        marginTop: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Roboto-Regular',
        fontWeight: "400",
        fontSize: 16,
        color: '#fff',
    }
})
