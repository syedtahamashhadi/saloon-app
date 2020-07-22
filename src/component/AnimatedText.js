
import * as React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

export default class AnimatedText extends React.Component {
  animatedValues = [];

  constructor(props) {
    super(props);
    let text = props.desc

    const textArr = text.trim().split('');
    console.log('Text Arr >>>' , textArr)
    textArr.forEach((_, i) => {
      this.animatedValues[i] = new Animated.Value(0);
    });
    this.textArr = textArr;
  }



  componentDidMount() {
    this.animated();
  }

  animated = (toValue = 1) => {
    const animations = this.textArr.map((_, i) => {
      return Animated.timing(this.animatedValues[i], {
        toValue,
        duration: 650,
        // useNativeDriver: true
      });
    });

    Animated.stagger( 450 , animations).start();
  };

  render() {
    return (
      <View style={styles.textWrapper}>
        {this.textArr.map((word, index) => {
          return (
            <Animated.Text
              key={`${word}-${index}`}
              style={[styles.textStyle , {opacity: this.animatedValues[index]} ]}
            >
              {word}
              {`${index < this.textArr.length ? '' : ''}`}
            </Animated.Text>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'center'
  },
  textStyle:{
    // marginVertical:18,
    // marginHorizontal:20,
    fontSize:18,
    color:'#1D194D',
    fontFamily:'ExoBold'
  }
});