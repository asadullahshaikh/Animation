import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
} from 'react-native';
export default class CSS extends React.Component {
  state = {
    animation: new Animated.Value(0),
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };
  render() {
    const animatedBox = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['green', 'yellow'],
    });

    const animatedText = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['yellow', 'green'],
    });
    const renderOpacity = {
      backgroundColor: animatedBox,
    };
    const color = {
      color: animatedText,
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, renderOpacity]}>
            <Animated.Text style={[color]}>see it</Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },
});
