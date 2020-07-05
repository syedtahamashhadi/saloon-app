import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');

export default function MomentsCard (props){
    const {beforeImage, afterImage, handleShare, pickBeforeImage, pickAfterImage} = props;

    return (
        <View style={styles.cardContainer}>
                <View style={styles.cardHeader}>
                    <View>
                        <Text style={styles.fontSize_20}>Slough Barber</Text>
                        <View style={styles.flexRow}>
                            <Icon color='#fa7268' name='map-marker' size={15} />
                            <Text style={{color: '#a09f9f', marginLeft: 5}}>1.3 miles to your location</Text>
                        </View>
                    </View>
                    <View>
                        { afterImage && beforeImage ?
                            <TouchableOpacity style={styles.flexRow} onPress={handleShare}>
                                <Icon style={{color: '#49d3ce', marginRight: 5}} name='share-alt' size={20}/>
                                <Text>Share</Text>
                            </TouchableOpacity>
                            : <Text></Text>
                        }
                    </View>
                </View>
                <View style={styles.imageSection}>
                    <TouchableOpacity onPress={pickBeforeImage}>
                        <View style={styles.empty_box} >
                            {beforeImage ?
                                <Image
                                    style={styles.image}
                                    Image source={{ uri: beforeImage.uri }}
                                /> :
                                <Text style={styles.imageText}>Before</Text>}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={pickAfterImage}>
                        <View style={styles.empty_box}>
                        {afterImage ?
                        <Image
                            style={styles.image}
                            Image source={{ uri: afterImage.uri }}
                        /> :
                            <Text style={styles.imageText}>After</Text>}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    cardContainer:{
        marginVertical: 10,
        padding: 15,
        borderRadius: 20,
        elevation: 5,
        backgroundColor: 'white',
        marginHorizontal: 20
    },
    flexRow:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageSection:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15
    },
    image:{
        width: 135,
        height: 140,
        borderRadius: 20,
        overflow: 'hidden',
    },
    empty_box:{
        backgroundColor: 'lightgray',
        textAlign: 'center',
        width: 135,
        height: 140,
        borderRadius: 20,
        borderColor: '#49d3ce',
        borderWidth: 2,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageText: {
        fontSize: 12,
        color: 'black'
    },
    cardHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#e0dede',
        paddingBottom: 5
    },
    fontSize_20: {
        fontSize: 20,
    },
})