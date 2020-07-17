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
      toValue: 350,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });
  };
  render() {
    const renderOpacity = {
      transform: [
        {
          translateY: this.state.animation,
        },
      ],
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
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },
});
