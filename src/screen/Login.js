import React, {useMemo} from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Header from '../components/Header';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useTheme } from '@react-navigation/native';

export default function Login(props) {

    const { colors } = useTheme();
    const s = useMemo(() => createStyles(colors));

    return (
        <View style={s.container}>

            <Header type={1} navigation={props.navigation} text={'Giriş Yap'} />

            <Text style={s.infoText}>Hesabınıza Giriş Yapın</Text>
            <TextInput style={s.inputView} placeholder='E-Mail' />
            <TextInput style={s.inputView} secureTextEntry placeholder='Şifreniz' />

            <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('HomeTab')} style={s.buttonView}>
                <Text style={s.buttonText}>GİRİŞ YAP</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8}>
                <Text style={s.forgotText}>Şifrenizi mi unuttunuz?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('Register')} activeOpacity={0.8}>
                <Text style={s.registerText}>Hesabınız yok mu? Hesap Oluştur</Text>
            </TouchableOpacity>

        </View>
    )
}

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.colorBg2
    },
    infoText: {
        fontFamily: 'Roboto-Medium',
        fontWeight: "500",
        fontSize: 16,
        color: colors.blueTextColor,
        marginTop: 20,
    },
    inputView: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        width: wp('90%'),
        padding: 20,
    },
    buttonView: {
        width: wp('50%'),
        height: 40,
        borderRadius: 20,
        backgroundColor: '#005b96',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontFamily: 'Roboto-Medium',
        fontWeight: "500",
        fontSize: 15,
        color: '#fff',
    },
    forgotText: {
        marginTop: 15,
        fontFamily: 'Roboto-Medium',
        fontWeight: "500",
        fontSize: 14,
        color: colors.blueTextColor,
    },
    registerText: {
        marginTop: 15,
        fontFamily: 'Roboto-Medium',
        fontWeight: "500",
        fontSize: 14,
        color: colors.blueTextColor,
    }
})
