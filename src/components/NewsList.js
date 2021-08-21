import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function NewsList() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={s.container}>
            <View style={s.newsView}>
                <Image style={s.haberImage} source={{ uri : 'https://www.haremaltin.com/images/u/2021-07-30/7F77BDD7-C983-4D-181507.jpg'}} />
                <Text style={s.haberTitle}>EURUSD Paitesi, Yükselişine Devam Ediyor</Text>
                <Text style={s.haberContent}>ABD tarafında varlık alımlarına yönelik beklentilerin zayıflamasıyla dolar cinsi varlıklarda görülen düşüş yönlü hareketliliğin etkisiyle yükselişine devam eden EURUSD paritesi, 1,1867 destek seviyesi üzerinde işlem görmeye devam ediyor.</Text>
            </View>

            <View style={s.newsView}>
                <Image style={s.haberImage} source={{ uri : 'https://www.haremaltin.com/images/u/2021-07-30/871777C0-FB18-40-181325.jpg'}} />
                <Text style={s.haberTitle}>EURUSD Paitesi, Yükselişine Devam Ediyor</Text>
                <Text style={s.haberContent}>ABD tarafında varlık alımlarına yönelik beklentilerin zayıflamasıyla dolar cinsi varlıklarda görülen düşüş yönlü hareketliliğin etkisiyle yükselişine devam eden EURUSD paritesi, 1,1867 destek seviyesi üzerinde işlem görmeye devam ediyor.</Text>
            </View>

            <View style={s.newsView}>
                <Image style={s.haberImage} source={{ uri : 'https://www.haremaltin.com/images/u/2021-07-30/54A4063B-8697-48-181156.jpg'}} />
                <Text style={s.haberTitle}>EURUSD Paitesi, Yükselişine Devam Ediyor</Text>
                <Text style={s.haberContent}>ABD tarafında varlık alımlarına yönelik beklentilerin zayıflamasıyla dolar cinsi varlıklarda görülen düşüş yönlü hareketliliğin etkisiyle yükselişine devam eden EURUSD paritesi, 1,1867 destek seviyesi üzerinde işlem görmeye devam ediyor.</Text>
            </View>

            <View style={s.newsView}>
                <Image style={s.haberImage} source={{ uri : 'https://www.haremaltin.com/images/u/2021-07-30/7F77BDD7-C983-4D-181507.jpg'}} />
                <Text style={s.haberTitle}>EURUSD Paitesi, Yükselişine Devam Ediyor</Text>
                <Text style={s.haberContent}>ABD tarafında varlık alımlarına yönelik beklentilerin zayıflamasıyla dolar cinsi varlıklarda görülen düşüş yönlü hareketliliğin etkisiyle yükselişine devam eden EURUSD paritesi, 1,1867 destek seviyesi üzerinde işlem görmeye devam ediyor.</Text>
            </View>
        </ScrollView>
    )
}

const s = {
    container: {
        flex: 1,
    },
    haberImage: {
        width: wp('100%'),
        height: wp('50%')
    },
    haberTitle: {
        fontFamily: 'Roboto-Medium',
        fontWeight: "500",
        fontSize: 16,
        color: '#005b96',
        padding: 10
    },
    haberContent: {
        fontFamily: 'Roboto-Regular',
        fontWeight: "400",
        fontSize: 14,
        color: '#000',
        padding: 10,
        paddingTop: 0,
    },
    newsView: {
        backgroundColor:'#fff',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        shadowColor: "#000",
        marginBottom: 10,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        paddingBottom: 5,
    }
}