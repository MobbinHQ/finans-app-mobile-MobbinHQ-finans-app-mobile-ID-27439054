import React, { useMemo } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import NewsList from '../components/NewsList';
import Header from '../components/Header';
import { useTheme } from '@react-navigation/native';

export default function News(props) {

    const { colors } = useTheme();
    const s = useMemo(() => createStyles(colors));


    return (
        <View style={s.container}>
            <Header navigation={props.navigation} type={1} text="Haberler" />
            <NewsList />
        </View>
    )
}

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor2,
    }
})