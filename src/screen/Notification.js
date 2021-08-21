import React, {useMemo} from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';

export default function Notification(props) {

    const { colors } = useTheme();
    const s = useMemo(() => createStyles(colors));

    return (
        <View style={s.container}>
            <Header type={1} navigation={props.navigation} text={'Bildirimler'} />

            <View style={s.notificationView}>
                <Icon name="notifications-outline" size={25} color={colors.blueTextColor}
 />
                <Text style={s.notificationDesc}> USDJPY Paritesi 109,72 Seviyesini Test Etti</Text>
            </View>

            <View style={s.notificationView}>
                <Icon name="notifications-outline" size={25} color={colors.blueTextColor}
 />
                <Text style={s.notificationDesc}> USDJPY Paritesi 109,72 Seviyesini Test Etti</Text>
            </View>

            <View style={s.notificationView}>
                <Icon name="notifications-outline" size={25} color={colors.blueTextColor}
 />
                <Text style={s.notificationDesc}> USDJPY Paritesi 109,72 Seviyesini Test Etti</Text>
            </View>

            <View style={s.notificationView}>
                <Icon name="notifications-outline" size={25} color={colors.blueTextColor}
 />
                <Text style={s.notificationDesc}> USDJPY Paritesi 109,72 Seviyesini Test Etti</Text>
            </View>
            
            <View style={s.notificationView}>
                <Icon name="notifications-outline" size={25} color={colors.blueTextColor}
 />
                <Text style={s.notificationDesc}> USDJPY Paritesi 109,72 Seviyesini Test Etti</Text>
            </View>

            <View style={s.notificationView}>
                <Icon name="notifications-outline" size={25} color={colors.blueTextColor}
 />
                <Text style={s.notificationDesc}> USDJPY Paritesi 109,72 Seviyesini Test Etti</Text>
            </View>

            <View style={s.notificationView}>
                <Icon name="notifications-outline" size={25} color={colors.blueTextColor}
 />
                <Text style={s.notificationDesc}> USDJPY Paritesi 109,72 Seviyesini Test Etti</Text>
            </View>

            <View style={s.notificationView}>
                <Icon name="notifications-outline" size={25} color={colors.blueTextColor}
 />
                <Text style={s.notificationDesc}> USDJPY Paritesi 109,72 Seviyesini Test Etti</Text>
            </View>
            
            <View style={s.notificationView}>
                <Icon name="notifications-outline" size={25} color={colors.blueTextColor}
 />
                <Text style={s.notificationDesc}> USDJPY Paritesi 109,72 Seviyesini Test Etti</Text>
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
    notificationView: {
        borderBottomColor: colors.blueTextColor,
        borderBottomWidth: 1,
        padding: 15,
        flexDirection: 'row'
    },
    notificationDesc: {
        marginTop: 5,
        fontFamily: 'Roboto',
        fontWeight: "400",
        textAlign: 'center',
        color: colors.blueTextColor,
    }
})
