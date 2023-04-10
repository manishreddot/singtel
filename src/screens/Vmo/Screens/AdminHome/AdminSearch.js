import { View, Text, TextInput, StyleSheet, Pressable, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SearchIconIcon } from '../../assets/Icons'
import { windowHeight, windowWidth } from '../../utils/Dimension'
import { AllOrdersAPI } from '../../api'
import AntIcon from 'react-native-vector-icons/AntDesign';


const AdminHomeSearch = (props) => {
    const [searchContent, setsearchContent] = useState()


    const SearchData = () => {
        // props?.setloading(true)
        console.log(searchContent);
        // let data = {
        //     search: searchContent
        // }
        let dataOne = { filters: "", page_index: "", page_size: "", search: searchContent, sort_by_field: "", sort_by_type: "desc", type: 0 }
        let dataTwo = { filters: "", page_index: "", page_size: "", search: searchContent, sort_by_field: "", sort_by_type: "desc", type: 1 }
        let dataThree = { filters: "", page_index: "", page_size: "", search: searchContent, sort_by_field: "", sort_by_type: "desc", type: 2 }
        AllOrdersAPI(dataOne).then((res) => { console.log(res?.data?.all_orders, "NOW SHOW"); props?.setloading(true); props?.setGeneral(res?.data?.all_orders?.data); props?.setloading(false); }).catch(err => { props?.setloading(false); return err; });
        AllOrdersAPI(dataTwo).then((res) => { props?.setloading(true); props?.setAccidental(res?.data?.all_orders?.data); props?.setloading(false); }).catch(err => { props?.setloading(false); return err; });
        AllOrdersAPI(dataThree).then((res) => { props?.setloading(true); props?.setReporting(res?.data?.all_orders?.data); props?.setloading(false); }).catch(err => { props?.setloading(false); return err; });
        Keyboard.dismiss()
    }

    const tapForLog = () => {
        console.log(props, "propData");
    }

    const CrossSearch = () => {
        setsearchContent("")
        console.log(searchContent, "searchContent");
        Keyboard.dismiss()
    }

    useEffect(() => {
        console.log(searchContent, 'VAL');
        if (searchContent == null || searchContent == undefined || searchContent == "") {
            console.log(searchContent, 'true');
            props?.emptySearch()
        }
    }, [searchContent])

    return (
        <View style={[styles.SearchWrapper, { width: props.Customwidth }]} >
            <TextInput style={styles.searchText} value={searchContent} onChangeText={text => setsearchContent(text)} placeholder="Search for Orders" placeholderTextColor={"#1E293BCC"} />
            {(searchContent == undefined || searchContent == "") ?
                null
                :
                <Pressable style={styles.CloseIconArea} onPress={CrossSearch} >
                    <AntIcon name='close' color={"#444"} size={20} />
                </Pressable>
            }
            <Pressable style={styles.IconArea} onPress={SearchData} >
                <SearchIconIcon width={windowWidth / 25} height={windowHeight / 25} />
            </Pressable>
        </View>
    )
}

export default AdminHomeSearch


const styles = StyleSheet.create({
    SearchWrapper: {
        width: '100%',
        height: windowHeight / 20,
        marginVertical: '5%',
        paddingHorizontal: 2,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: "#155B9F99",
        borderWidth: 1,
        borderRadius: 100,

    },
    searchText: {
        color: '#000',
        flex: 1,
        fontSize: 12,
        height: '100%',
        paddingLeft: 12
    },
    IconArea: {
        width: '15%',
        height: '90%',
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        backgroundColor: "#155B9F"
    },
    CloseIconArea: {
        marginHorizontal: 5,
    },

})