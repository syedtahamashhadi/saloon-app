import React, {useState} from 'react'
import Slider from 'react-native-slider'
import { StyleSheet, View, Text} from 'react-native';

export default function  RangeBar(){
    const [minValue, setMinValue] = useState(0);
    const slideValue = Math.floor(minValue);

        return (
            <View style={styles.container}>
                <Text style={styles.slideBadge}>{`$${slideValue} to go`}</Text>

                <Slider
                    maximumValue={50}
                    minimumTrackTintColor='#49d3ce'
                    thumbStyle={[styles.thumbButton]}
                    trackStyle={{backgroundColor:'#ededed', borderRadius: 0,}}
                    value={minValue}
                    onValueChange={(minValue) => setMinValue(minValue)}
                />
            </View>
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        justifyContent: 'center',
    },
    slideBadge:{
        backgroundColor:'white',
        borderRadius: 15,
        width: 80,
        paddingHorizontal: 10,
        paddingVertical: 5,
        textAlign: 'center',
        color: '#49d3ce',
        elevation: 4
    },
    thumbButton:{
        backgroundColor: '#49d3ce',
        borderWidth: 3,
    }
});