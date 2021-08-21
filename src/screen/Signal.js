import React, {useMemo} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header';
import { BlurView, VibrancyView } from "@react-native-community/blur";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useTheme } from '@react-navigation/native';

export default function Signal(props) {

    const { colors } = useTheme();
    const s = useMemo(() => createStyles(colors));


    return (
        <View style={s.container}>
            <Header text="Sinyaller" navigation={props.navigation} />

            <View style={s.signalView}>
            
                <View>
                <Text style={s.signalText}>CL-JUL21 - ALIŞ BUY</Text>
                <Text style={s.signalText}>GİRİŞ: 69.46</Text>
                <Text style={s.signalText}>TP: 69.80</Text>
                <Text style={s.signalText}>SL: 69.00</Text>
                </View>
                <Text style={[s.signalText, { color: colors.blueTextColor }]}>05/07/2021 19:00</Text>
                <BlurView
                style={s.absolute}
                blurType="light"
                blurAmount={3}
                reducedTransparencyFallbackColor="white"
                />
            </View>

            <View style={s.signalView}>
                <View>
                <Text style={s.signalText}>CL-JUL21 - ALIŞ BUY</Text>
                <Text style={s.signalText}>GİRİŞ: 69.46</Text>
                <Text style={s.signalText}>TP: 69.80</Text>
                <Text style={s.signalText}>SL: 69.00</Text>
                </View>
                <Text style={[s.signalText, { color: colors.blueTextColor }]}>05/07/2021 19:00</Text>
                <BlurView
                style={s.absolute}
                blurType="light"
                blurAmount={3}
                reducedTransparencyFallbackColor="white"
                />
            </View>

            <View style={s.signalView}>
                <View>
                <Text style={s.signalText}>CL-JUL21 - ALIŞ BUY</Text>
                <Text style={s.signalText}>GİRİŞ: 69.46</Text>
                <Text style={s.signalText}>TP: 69.80</Text>
                <Text style={s.signalText}>SL: 69.00</Text>
                </View>
                <Text style={[s.signalText, { color: colors.blueTextColor }]}>05/07/2021 19:00</Text>
            </View>

            <View style={s.signalView}>
                <View>
                <Text style={s.signalText}>CL-JUL21 - ALIŞ BUY</Text>
                <Text style={s.signalText}>GİRİŞ: 69.46</Text>
                <Text style={s.signalText}>TP: 69.80</Text>
                <Text style={s.signalText}>SL: 69.00</Text>
                </View>
                <Text style={[s.signalText, { color: colors.blueTextColor }]}>05/07/2021 19:00</Text>
            </View>

            <View style={s.signalView}>
                <View>
                <Text style={s.signalText}>CL-JUL21 - ALIŞ BUY</Text>
                <Text style={s.signalText}>GİRİŞ: 69.46</Text>
                <Text style={s.signalText}>TP: 69.80</Text>
                <Text style={s.signalText}>SL: 69.00</Text>
                </View>
                <Text style={[s.signalText, { color: colors.blueTextColor }]}>05/07/2021 19:00</Text>
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
    signalView: {
        width: wp('100%'),
        height: wp('30%'),
        backgroundColor: colors.bgColor,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    signalText: {
        fontFamily: 'Roboto',
        fontWeight: "400",
        color: colors.blueTextColor,
    },
    absolute: {
        position: "absolute",
        width: wp('100%'),
        height: wp('30%'),
      }
})
