import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default class AppStatusBar extends React.Component {
  render() {
    return (
      <View style={styles.statusbar}>
        <StatusBar barStyle="light-content" height={styles.statusbar.height} backgroundColor={styles.statusbar.backgroundColor} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusbar: {
    width: '100%',
    backgroundColor: '#000',
    height: getStatusBarHeight()
  }
});
