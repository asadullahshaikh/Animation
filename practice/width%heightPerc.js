import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  Text,
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
    const width = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['20%', '50%'],
    });
    const height = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['20%', '30%'],
    });

    const renderOpacity = {
      width: width,
      height: height,
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, renderOpacity]}>
            <Text>see it</Text>
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
