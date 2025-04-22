import React from 'react';
import {View, Text} from "react-native";

interface IPost {
    id: number;
    title: string;
    body: string;
}

interface IPostCardsProps {
    post: IPost;
}

function PostCards({post} : IPostCardsProps) {
    return (
        <View>
            <Text>{post.title}</Text>
            <Text>{post.body}</Text>
        </View>
    );
}

export default PostCards;