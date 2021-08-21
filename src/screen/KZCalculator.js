import React, { useMemo } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Header from '../components/Header';
import RNPickerSelect from 'react-native-picker-select';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { useTheme } from '@react-navigation/native';

export default function KZCalculator(props) {

  const { colors } = useTheme();
  const s = useMemo(() => createStyles(colors));

  const pickerSelectStyles = {
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      color: colors.inputTextColor,
      paddingRight: 30,
      width: widthPercentageToDP('45%'),
      fontFamily: 'Roboto-Medium',
      fontWeight: "500",
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: colors.inputTextColor,
      paddingRight: 30,
    },
  };

  const pickerSelectStyles2 = {
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      color: colors.inputTextColor,
      paddingRight: 30,
      fontFamily: 'Roboto-Medium',
      fontWeight: "500",
      width: widthPercentageToDP('90%'),
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: colors.inputTextColor,
      paddingRight: 30,
    },
  };

    return (
        <View style={s.container}>
            <Header navigation={props.navigation} type={1} text="Kar/Zarar Hesaplama" />
            <View style={{ padding: 10, alignItems: 'center', }}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            style={pickerSelectStyles}
            value='1hafta'
            items={[
                { label: '1 Gün', value: '1gun' },
                { label: '1 Hafta', value: '1hafta' },
                { label: '30 Gün', value: '30gun' },
                { label: '1 Yıl', value: '1yil' },
            ]}
         />
          <Text style={s.historyText}>
            ÖNCE
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-between'}}>
          <TextInput value='1000' style={pickerSelectStyles.inputIOS} />
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            style={pickerSelectStyles}
            value='USD'
            items={[
                { label: 'USD', value: 'USD' },
                { label: 'EUR', value: 'EUR' },
                { label: 'GBP', value: 'GBP' },
                { label: 'CHF', value: 'CHF' },
            ]}
         />
        </View>

        <View style={{marginTop: 20}}>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            style={pickerSelectStyles2}
            value='1'
            items={[
                { label: 'ALSAYDIM', value: '1' },
                { label: 'SATSAYDIM', value: '2' },
            ]}
         />
        </View>

        <TouchableOpacity activeOpacity={0.8} style={s.buttonView}>
                <Text style={s.buttonText}>Hesapla</Text>
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
    inputView: {
        width: widthPercentageToDP('90%'),
        height: 200,
        borderWidth: 1,
        borderColor: '#000',
    },
    buttonView: {
        width: widthPercentageToDP('50%'),
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
    historyText: {
      width: widthPercentageToDP('45%'),
      fontFamily: 'Roboto-Medium',
      fontWeight: "500",
      marginTop: 25,
      paddingLeft: 10,
      color: colors.inputTextColor,
    }
})