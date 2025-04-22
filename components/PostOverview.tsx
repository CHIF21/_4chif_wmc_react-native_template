import React, {useEffect, useState} from 'react';
import {FlatList, View} from "react-native";
import PostService from "../services/PostService";
import PostCards from "./PostCards";

interface IPost {
    id: number;
    title: string;
    body: string;
}

function PostOverview() {

    const [posts, setPosts] = useState<IPost[]>([]);
    const [errorMsg, setErrorMsg] = useState("");

    const fetchPosts = async () => {
        try {
            const response = await PostService.getPosts();
            setPosts(response);
        } catch (error) {
            const err = error as Error;
            setErrorMsg(err.message);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={
                ({item}) => (<PostCards post={item} />)
            }
        />
    );
}

export default PostOverview;