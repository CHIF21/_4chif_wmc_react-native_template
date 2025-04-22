import {Text, View} from "react-native";
import * as React from "react";

function DetailsScreen({navigation} : {navigation: any}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

export default DetailsScreen;