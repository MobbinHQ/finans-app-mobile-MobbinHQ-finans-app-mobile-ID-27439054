import React, { useMemo } from 'react'
import { View, Text, useWindowDimensions, StyleSheet } from 'react-native'
import Header from '../components/Header';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import NewsList from '../components/NewsList';
import Chart from '../components/Chart';
import { useTheme } from '@react-navigation/native';

export default function DovizDetail(props) {

    const { colors } = useTheme();
    const s = useMemo(() => createStyles(colors));


    const page = () => (
        <View style={{ flex: 1, backgroundColor: '#f2f2f2', alignItems: 'center' }}>
            <Chart />
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: wp('90%'), marginTop: 20,}}>
            <View style={s.priceBox}>
                <Text style={s.boxTitle}>EN YÜKSEK</Text>
                <Text style={s.boxPrice}>8,738</Text>
            </View>
            <View style={s.priceBox}>
                <Text style={s.boxTitle}>EN DÜŞÜK</Text>
                <Text style={s.boxPrice}>8,738</Text>
            </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: wp('90%'), marginTop: 20,}}>
            <View style={s.priceBox}>
                <Text style={s.boxTitle}>AÇILIŞ</Text>
                <Text style={s.boxPrice}>8,738</Text>
            </View>
            <View style={s.priceBox}>
                <Text style={s.boxTitle}>KAPANIŞ</Text>
                <Text style={s.boxPrice}>8,738</Text>
            </View>
            </View>
        </View>
    );

    const page2 = () => (
            <NewsList />
    )
    
      const renderScene = SceneMap({
        data: page,
        news: page2,
      });

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'data', title: 'Veri' },
        { key: 'news', title: 'Haber' },
    ]);

    const renderTabBar = props => (
        <TabBar
          {...props}
          activeColor = {colors.activeColor} 
          inactiveColor = {colors.inactiveColor} 
          indicatorStyle={{ backgroundColor: colors.headerBg }}
          style={{ backgroundColor: colors.headerBg}}
        />
      );

    return (
        <View style={s.container}>
            <Header navigation={props.navigation} type={1} text="Döviz Detay" />

            <View style={{backgroundColor: colors.headerBg ,padding: 20, flexDirection :'row', justifyContent: 'space-between'}}>
            <View>
            <Text style={s.dovizCode}>USD/TRY</Text>
            <Text style={s.dovizName}>Amerikan Doları</Text>
            </View>
            <Text style={s.dovizPrice}>8,490</Text>
            </View>
            <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
            />
        </View>
    )
}

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    dovizCode: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: '#fff',
    },
    dovizName: {
        fontFamily: 'Roboto-Medium',
        fontSize: 12,
        color: '#fff', 
        marginTop: 2,
    },
    dovizPrice: {
        fontFamily: 'Roboto-Medium',
        fontSize: 25,
        color: '#fff', 
    },
    priceBox: {
        width: wp('40%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        padding: 20,
        borderRadius: 10,
    },
    boxTitle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 14,
        color: '#005b96', 
    },
    boxPrice: {
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        color: '#000',
        marginTop: 5,
    },
    chartImage: {
        width: wp('100%'),
        height: wp('100%'),
    }
})