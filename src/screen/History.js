import React, { useMemo } from 'react'
import { View, Text, useWindowDimensions, ScrollView, StyleSheet } from 'react-native'
import Header from '../components/Header';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DovizCard from '../components/DovizCard';
import { useTheme } from '@react-navigation/native';

export default function HomePage(props) {

    const { colors } = useTheme();
    const s = useMemo(() => createStyles(colors));


    const page = () => (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: colors.bgColor }}>
            <View style={s.dovizHeader}>
                <Text style={s.dovizHeaderTitle}>Birim</Text>
                <Text style={s.dovizHeaderTitle}>Alış Fiyatı</Text>
            </View>
            <DovizCard navigation={props.navigation} />
            <DovizCard />
            <DovizCard />
            <DovizCard />
            <DovizCard />
            <DovizCard />
            <DovizCard />
            <DovizCard />
            <DovizCard />
            <DovizCard />
            <DovizCard />
            <DovizCard />
        </ScrollView>
    );
    
      const renderScene = SceneMap({
        doviz: page,
        altin: page,
        borsa: page,
        kripto: page,
      });

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'doviz', title: 'Döviz' },
        { key: 'altin', title: 'Altın' },
        { key: 'borsa', title: 'Borsa' },
        { key: 'kripto', title: 'Kripto' },
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
            <Header text="Geçmiş Kurlar" type={1} navigation={props.navigation} />

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
        backgroundColor: colors.bgColor
    },
    dovizHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    dovizHeaderTitle: {
        fontFamily: 'Roboto-Medium',
        fontWeight: "500",
        fontSize: 16,
        color: colors.blueTextColor,
    }
})