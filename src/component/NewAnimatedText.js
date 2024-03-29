import React, { Component } from 'react';
import { Text, View, Platform, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class TypingText extends Component
{
    constructor()
    {
        super();

        this.index = 0;

        this.typing_timer = -1;

        this.blinking_cursor_timer = -1;

        this.state = { text: '', blinking_cursor_color: 'transparent' }
    }

    componentDidMount()
    {
        this.typingAnimation();
        this.blinkingCursorAnimation();
    }

    componentWillUnmout()
    {
        clearTimeout( this.typing_timer );

        this.typing_timer = -1;

        clearInterval( this.blinking_cursor_timer );

        this.blinking_cursor_timer = -1;
    }

    typingAnimation = () =>
    {
        clearTimeout( this.typing_timer );

        this.typing_timer  = -1;

        if( this.index < this.props.text.length )
        {
            if( this.refs.animatedText )
            {
                this.setState({ text: this.state.text + this.props.text.charAt( this.index ) }, () =>
                {
                    this.index++;

                    this.typing_timer = setTimeout(() =>
                    {
                        this.typingAnimation();
                    }, this.props.typingAnimationDuration);
                });
            }
        }
    }

    blinkingCursorAnimation = () =>
    {
        this.blinking_cursor_timer = setInterval(() =>
        {
            if( this.refs.animatedText )
            {
                if( this.state.blinking_cursor_color == 'transparent' )
                    this.setState({ blinking_cursor_color: this.props.color });
                else
                    this.setState({ blinking_cursor_color: 'transparent' });
            }
        }, this.props.blinkingCursorAnimationDuration);
    }

    render()
    {
        return(
            <View style = {{ flexDirection: 'row',  justifyContent: 'flex-start' }}>
                <Text ref = "animatedText" style = {{ color: this.props.color, fontSize: this.props.textSize,
                                                    fontFamily: 'ExoBold' }}>
                    { this.state.text }                
                    <Text style = {{ color: this.state.blinking_cursor_color }}>|</Text>
                </Text>
            </View>
        );
    }
}

TypingText.propTypes =
{
  text: PropTypes.string,
  color: PropTypes.string,
  textSize: PropTypes.number,
  typingAnimationDuration: PropTypes.number,
  blinkingCursorAnimationDuration: PropTypes.number
}

TypingText.defaultProps =
{
  text: "Default Typing Animated Text.",
  color: "rgb( 77, 192, 103 )",
  textSize: 18,
  typingAnimationDuration: 50,
  blinkingCursorAnimationDuration: 190
}

export default TypingText ;