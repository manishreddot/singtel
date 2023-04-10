import { Alert, Image, Modal, Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import { windowHeight, windowWidth } from '../utils/Dimension';


const ImageAction = (props) => {

    return (
        <>
            <TouchableOpacity style={styles.touchImage} onPress={props.onImageTouch} >
                <Image style={styles.ImageStyling} source={{ uri: props.imageURL }} resizeMode="cover" />
            </TouchableOpacity>
        </>
    )
}

export default ImageAction


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        margin: 20,
        borderRadius: 20,
        // padding: 35,
        height: '65%',
        width: '100%',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        paddingHorizontal: 5,
    },
    presstextStyle: {
        position: 'absolute',
        top: "6%",
        right: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    InstallerImagePreview: {
        height: "100%",
        width: "100%",
        borderRadius: 2,
    },
    touchImage: {
        // backgroundColor: 'red',
        width: windowWidth / 3,
        // width: "auto",
        height: windowHeight / 4,
        // height: '100%',
        marginRight: 10,
        borderRadius: 5,
    },
    ImageStyling: {
        // backgroundColor: 'purple',
        width: '100%',
        height: '100%',
    },
});