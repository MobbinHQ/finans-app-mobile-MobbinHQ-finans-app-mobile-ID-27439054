import React, {useMemo} from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { View, Text, SafeAreaView, Image } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';

export default function DrawerMenu(props) {

    const { colors } = useTheme();
    const s = useMemo(() => createStyles(colors));


    return (
        <SafeAreaView style={s.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={s.headerView}>
                <Image style={s.profilePhoto} source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'}} />
                <Text style={s.fullName}>Mert KIVRAK</Text>
                <Text style={s.eMail}>mert@mobbin.com</Text>
            </View>
           <TouchableOpacity onPress={() => props.navigation.navigate('HomePage')} style={s.menuView}>
               <Text style={s.menuText}>Fiyatlar</Text>
               <Icon name="chevron-forward-outline" size={25} color={colors.menuColor}
 />
           </TouchableOpacity>
           <TouchableOpacity onPress={() => props.navigation.navigate('Signal')} style={s.menuView}>
               <Text style={s.menuText}>Sinyaller</Text>
               <Icon name="chevron-forward-outline" size={25} color={colors.menuColor}
 />
           </TouchableOpacity>
           <TouchableOpacity onPress={() => props.navigation.navigate('Alarm')} style={s.menuView}>
               <Text style={s.menuText}>Alarm</Text>
               <Icon name="chevron-forward-outline" size={25} color={colors.menuColor}
 />
           </TouchableOpacity>
           <TouchableOpacity onPress={() => props.navigation.navigate('Portfolio')} style={s.menuView}>
               <Text style={s.menuText}>Portföy</Text>
               <Icon name="chevron-forward-outline" size={25} color={colors.menuColor}
 />
           </TouchableOpacity>
           <View style={s.menuView}>
               <Text style={s.menuText}>Takip Listesi</Text>
               <Icon name="chevron-forward-outline" size={25} color={colors.menuColor}
 />
           </View>
           <TouchableOpacity onPress={() => props.navigation.navigate('News')} style={s.menuView}>
               <Text style={s.menuText}>Haberler</Text>
               <Icon name="chevron-forward-outline" size={25} color={colors.menuColor}
 />
           </TouchableOpacity>
           <TouchableOpacity onPress={() => props.navigation.navigate('KZCalculator')} style={s.menuView}>
               <Text style={s.menuText}>Kar/Zarar Hesaplama</Text>
               <Icon name="chevron-forward-outline" size={25} color={colors.menuColor}
 />
           </TouchableOpacity>
           <View style={s.menuView}>
               <Text style={s.menuText}>Yükselenler Düşenler</Text>
               <Icon name="chevron-forward-outline" size={25} color={colors.menuColor}
 />
           </View>
           <TouchableOpacity onPress={() => props.navigation.navigate('History')} style={s.menuView}>
               <Text style={s.menuText}>Geçmiş Kurlar</Text>
               <Icon name="chevron-forward-outline" size={25} color={colors.menuColor}
 />
           </TouchableOpacity>
           <TouchableOpacity style={s.menuView}>
               <Text style={s.menuText}>İletişim</Text>
               <Icon name="chevron-forward-outline" size={25} color={colors.menuColor}
 />
           </TouchableOpacity>
           <TouchableOpacity style={s.menuView}>
               <Text style={s.menuText}>Ayarlar</Text>
               <Icon name="chevron-forward-outline" size={25} color={colors.menuColor}
 />
           </TouchableOpacity>
           </ScrollView>
        </SafeAreaView>
    )
}

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
        width: wp('65%'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.headerBg,
    },
    headerView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuView: {
        width: wp('65%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
        marginTop: 10,
    },
    fullName: {
        fontFamily: 'Roboto-Medium',
        fontWeight: "700",
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
        color: colors.menuColor
    },
    eMail: {
        fontFamily: 'Roboto-Regular',
        fontWeight: "300",
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 20,
        color: colors.menuColor
    },
    profilePhoto: {
        height: wp('20%'),
        width: wp('20%'),
        borderRadius: wp('20%')/2,
    },
    menuText: {
        color: colors.menuColor
    }
})
