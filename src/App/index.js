import React, { useReducer, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Keyboard } from 'react-native';
import ItemList from '../ItemList';


import useMarketList from '../services';

export default function App() {

    const [productList, setProductList] = useState('');
    const [state, addItem] = useMarketList()



    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder='Adicionar produto'
                    value={productList}
                    onChangeText={text => setProductList(text)}
                />
                <TouchableOpacity
                    style={styles.btnAdd}
                    onPress={() => {
                        addItem(productList);

                        setProductList('');
                        Keyboard.dismiss();
                    }}
                >
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={state}
                renderItem={({ item }) => <ItemList data={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputView: {
        flexDirection: 'row',
        margin: 10
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        fontSize: 20,
    },
    btnAdd: {
        padding: 10,
        marginLeft: 10,
        backgroundColor: '#000',
        justifyContent: 'center'
    },
    btnText: {
        color: '#FFF',
        fontSize: 25,
        padding: 5

    }


})