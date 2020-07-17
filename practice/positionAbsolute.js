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
      toValue: 120,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };
  render() {
    const renderOpacity = {
      top: this.state.animation,
      left: this.state.animation,
      right: this.state.animation,
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, renderOpacity]} />
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
    height: 150,
    backgroundColor: 'tomato',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});
