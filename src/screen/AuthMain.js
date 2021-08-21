import React, {useMemo} from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useTheme } from '@react-navigation/native';

export default function AuthMain(props) {

    const { colors } = useTheme();
    const s = useMemo(() => createStyles(colors));

    return (
        <SafeAreaView style={s.container}>
            <Image resizeMode='contain' style={s.image} source={require('../assets/auth.jpg')} />
            <Text style={s.infoText}>Finance App'e Hoşgeldin!{'\n'}{'\n'}Anlık Döviz kurlarını takip edebilir, alarm kurabilir ve bildirim alabilirsin.{'\n'}Hemen Giriş yap ve kullanmaya başla!</Text>

            <View style={{marginTop: hp('5%')}}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('Login')} style={s.buttonView}>
                <Text style={s.buttonText}>GİRİŞ YAP</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('Register')} style={[s.buttonView, {backgroundColor: 'transparent', borderColor: '#005b96', borderWidth: 1}]}>
                <Text style={[s.buttonText, {color: '#005b96'}]}>KAYIT OL</Text>
            </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: wp('100%'),
        height: wp('50%'),
        marginTop: hp('5%'),
    },
    infoText: {
        fontFamily: 'Roboto-Medium',
        fontWeight: "500",
        textAlign: 'center',
        fontSize: 16,
        width: wp('80%'),
        color: '#005b96'
    },
    buttonView: {
        width: wp('90%'),
        height: 40,
        borderRadius: 20,
        backgroundColor: '#005b96',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontFamily: 'Roboto-Medium',
        fontWeight: "500",
        fontSize: 15,
        color: '#fff',
    },
});
