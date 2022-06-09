import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from  'react-native-vector-icons/Feather';

import useMarketList from '../services';


export default function ItemList({ data }) {
    const [ state, removeItem ] = useMarketList();

    return (
        <View style={styles.container}>
            <Text style={styles.textItem}>{data.title}</Text>
                <TouchableOpacity 
                style={styles.btnRemove}
                onPress ={ ()=> {
                    removeItem(data.id)
                }}
                >
                   <Icon name='trash-2' color='#000'size={30}/>
                </TouchableOpacity>
        

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#CCC3',
        margin: 5
    },
    textItem: {
        flex: 1,
        fontSize: 23,
        color: '#000',
        padding: 8,
        margin: 8,
    },
    btnRemove:{
     alignItems:'center',
     justifyContent:'center'
    }
})