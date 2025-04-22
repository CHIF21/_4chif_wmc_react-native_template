import {Text, TouchableOpacity, View} from "react-native";
import * as React from "react";

function HomeScreen({navigation}: {navigation: any}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Details')} >
                <Text>Home Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;