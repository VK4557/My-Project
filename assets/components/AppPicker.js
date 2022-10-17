import { View, Text, StyleSheet, Modal, Button, TouchableWithoutFeedback, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useFormikContext } from 'formik'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../config/colors'
import dataLists from '../config/data'
import PickerItem from './PickerItem'

export default function AppPicker({ iconName, lists, name, placeholder }) {
    const { setFieldValue, touched, values, errors } = useFormikContext();
    const [modalVisible, setModalVisible] = useState(false);
    const [category, setCategory] = useState()
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.inputContain}>
                    {iconName && <Icon name={iconName} size={20} style={styles.setIcon} />}
                    {category ? (<Text style={styles.text}>{category}</Text>) : (<Text style={styles.placeholder}>{placeholder}</Text>)}
                    <Icon name="chevron-down-sharp" size={25} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Button title='Close' onPress={() => setModalVisible(false)} />
                <FlatList
                    data={lists}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) =>
                        <PickerItem label={item.label} onPress={() => { setFieldValue(name, item); setCategory(item.label); setModalVisible(false) }}
                        />
                    }
                />
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    inputContain: {
        backgroundColor: colors.light,
        borderRadius: 25,
        width: "100%",
        marginVertical: 15,
        flexDirection: "row",
        padding: 15,
        alignItems: "center",
    },
    setIcon: {
        marginRight: 10,
    },
    text: {
        fontSize: 18,
        color: "black",
        flex: 1,
    },
    placeholder: {
        fontSize: 18,
        color: "lightgray",
        flex: 1,
    }
})