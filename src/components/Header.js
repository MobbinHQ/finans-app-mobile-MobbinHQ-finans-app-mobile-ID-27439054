import React, {useMemo} from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';

export default function Header(props) {

    const { colors } = useTheme();
    const s = useMemo(() => createStyles(colors));


    if(props.type == 1){
        return (
            <SafeAreaView style={s.container}>
                <View style={s.headerView}>
                <TouchableOpacity onPress={() => props.navigation.pop()}>
                    <Icon name="chevron-back-outline" size={25} color="#fff" />
                </TouchableOpacity>
                <Text style={s.appText}>{props.text}</Text>
                <View style={{width: 25}} />
                </View>
            </SafeAreaView>
        )
    }else{
        return (
            <SafeAreaView style={s.container}>
                <View style={s.headerView}>
                <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                <Icon name="menu-outline" size={25} color="#fff" />
                </TouchableOpacity>
                <Text style={s.appText}>{props.text}</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Notification')}>
                <Icon name="notifications-outline" size={25} color="#fff" />
                </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
        width: wp('100%'),
        backgroundColor: colors.headerBg,
    },
    headerView: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    appText: {
        fontFamily: 'Roboto-Medium',
        fontSize: 20,
        color: '#fff'
    }
})