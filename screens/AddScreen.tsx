import React, {useState} from 'react';
import {Text, TextInput, View} from "react-native";

function AddScreen({navigation} : {navigation: any}) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <View>
            <Text>Title:</Text>
            <TextInput
                value={title}
                onChangeText={setTitle}
                placeholder={"Title"}
            />

            <Text>Content:</Text>
            <TextInput
                value={content}
                onChangeText={setContent}
                placeholder={"Type some content..."}
            />
        </View>
    );
}

export default AddScreen;