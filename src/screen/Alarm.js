import React, {useMemo} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';

export default function Alarm(props) {

    const { colors } = useTheme();
    const s = useMemo(() => createStyles(colors));


    return (
        <View style={s.container}>
            <Header text="Alarmlar" navigation={props.navigation} />
            <View style={{justifyContent: 'center',alignItems: 'center', flex: 1}}>
                <Icon name="notifications-off-outline" size={100} color={colors.blueTextColor} />
                <Text style={s.alertText}>Henüz bir alarm oluşturmadınız. Hemen alarm oluştur piyasadan uzak kalma!</Text>

                <View style={s.buttonView}>
                    <Text style={s.buttonText}>Alarm Oluştur</Text>
                </View>
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
