import {Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import PostOverview from "../components/PostOverview";

function HomeScreen({navigation}: {navigation: any}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <PostOverview />
        </View>
    );
}

export default HomeScreen;