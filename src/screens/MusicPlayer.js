import React from 'react'
import { View, Image, Text } from 'react-native'

export default function MusicPlayer() {
    return (
        <View>
            <View style={{ display: "flex", flexDirection: "row", gap: 80 }}>
                <Image source={require('../../assets/chevron-down.png')} style={{ width: 30, height: 30 }} />
                <View>
                    <Text>PLAYING FROM PLAYLIST</Text>
                    <Text>Tatak Pinoy</Text>
                </View>
                <Image source={require('../../assets/more-vertical.png')} style={{ width: 30, height: 30 }} />
            </View>
            <View style={{ alignContent: "center" }}>
                <Image
                    source={require('../../assets/dilaw.jpg')}
                    style={{ width: 100, height: 100 }}
                />
            </View>
        </View>
    )
}
