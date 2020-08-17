import React, { Component } from 'react';
import {View,Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
const {width} = Dimensions.get('window');

const searchData = [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          "userId": 1,
          "id": 4,
          "title": "eum et est occaecati",
          "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
          "userId": 1,
          "id": 5,
          "title": "nesciunt quas odio",
          "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
]

const FaqSearch = (props) => {
    const [text, setText] = React.useState('');
    const [data, setData] = React.useState(searchData)

   const SearchFilterFunction = (text) => {
        const newData = searchData.filter(function(item) {
          const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setText(text)
        setData(newData);
      }

    return (
        <View style={styles.container}>

        <View style={{marginTop:35 , marginHorizontal:20 ,flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                    <Icon name='arrowleft' size={25} />
                </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}>
        <View style={styles.input}>
            <Icon name='search1' size={30}/>
        <TextInput
            autoFocus="true"
            returnKeyType="search"
            style={styles.textArea}
            placeholder="Search FAQ's"
            onChangeText={text => SearchFilterFunction(text)}
            value={text}
        />
        </View>
        </View>


        <View style={styles.item_list}>
            {data.map((item) => {
                return(
                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.textStyle}>{item.title}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    input:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 50,
        elevation: 6,
        marginTop: 20,
        marginBottom: 8,
        backgroundColor: 'white'
    },
    textArea:{
        marginHorizontal: 10,
        width: (width - 100),
        paddingVertical: 10,
    },
    item:{
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    item_list:{
        marginTop: 30,
        marginHorizontal: 20,
        // flex: 1
    },
    textStyle: {
        paddingVertical: 10,
        fontSize: 20,
        color: 'gray'
    }
});

export default FaqSearch ;