import {View, Text} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";

const propterty = () => {
    const {id} = useLocalSearchParams();
    return (
        <View>
            <Text>propterty {id}</Text>
        </View>
    )
}
    export default propterty
