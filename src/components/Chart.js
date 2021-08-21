import React, {useMemo} from 'react'
import { View, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import {
    LineChart,
  } from "react-native-chart-kit";
  import { useTheme } from '@react-navigation/native';

export default function Chart() {

    const { colors } = useTheme();
    const s = useMemo(() => createStyles(colors));


    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 3,
        barPercentage: 0.5,
        useShadowColorFromDataset: true
      };

    return (
    <View>
    <LineChart
        data={{
        labels: ["Şub", "Mart", "Nis", "May", "Haz", "Tem"],
        chartConfig: chartConfig,
        datasets: [
            {
            data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
            ]
            }
        ]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix="TL"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
        backgroundColor: colors.chartColor,
        backgroundGradientFrom: colors.chartColor,
        backgroundGradientTo: colors.chartColor,
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#fff"
        }
        }}
        bezier
        style={{
        marginVertical: 8,
        marginTop: 0,
        }}
    />

        <View style={{flexDirection: 'row', justifyContent: 'center',}}>
        <TouchableOpacity style={s.boxView}>
            <Text style={s.boxText}>6S</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.boxView}>
            <Text style={s.boxText}>24S</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.boxView}>
            <Text style={s.boxText}>7G</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.boxView}>
            <Text style={s.boxText}>1A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.boxView}>
            <Text style={s.boxText}>3A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.boxView}>
            <Text style={s.boxText}>6A</Text>
        </TouchableOpacity>
        </View>
    </View>
    )
}

const createStyles = (colors) =>
  StyleSheet.create({
    boxView: {
        width: 50,
        height: 20,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        backgroundColor: colors.chartColor,
        marginRight: 10,
    },
    boxText: {
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        textAlign: "left",
        color: "#fff",
    }
})