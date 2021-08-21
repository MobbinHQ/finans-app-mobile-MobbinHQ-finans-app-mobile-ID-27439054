import React, {useMemo} from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import Header from '../components/Header';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useTheme } from '@react-navigation/native';

export default function Register(props) {

    const { colors } = useTheme();
    const s = useMemo(() => createStyles(colors));

    return (
        <View style={s.container}>

            <Header type={1} navigation={props.navigation} text={'Kayıt Ol'} />

            <Text style={s.infoText}>Hesabınızı Oluşturun</Text>
            <TextInput style={s.inputView} placeholder='Ad Soyad' />
            <TextInput style={s.inputView} placeholder='E-Mail' />
            <TextInput style={s.inputView} secureTextEntry placeholder='Şifreniz' />
            <TextInput style={s.inputView} secureTextEntry placeholder='Şifrenizi Tekrarlayın' />

            <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('HomeTab')} style={s.buttonView}>
                <Text style={s.buttonText}>KAYIT OL</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8}>
                <Text style={s.registerText}>Hesabınız var mı? Giriş Yap</Text>
            </TouchableOpacity>

            <Text style={s.kvkkInfo}>Hesap oluşturarak Kişisel Verilerin Korunması ve Yasal Uyarı Metni'ni kabul ediyorum.</Text>

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
    },
    kvkkInfo: {
        marginTop: 15,
        fontFamily: 'Roboto-Medium',
        fontWeight: "500",
        textAlign: 'center',
        fontSize: 14,
        color: colors.blueTextColor,
        width: wp('90%'),
    }
});
