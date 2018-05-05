import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class MapDetail extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
          <Text>MapDetail</Text>
      </View>
    );
  }
}
const styles = {
  mainContainer: {
    flex: 1
  },
};

const mapStateToProps = ({ appLoading }) => {
  return {
    user: appLoading.user,
  };
};

export default connect(mapStateToProps)(MapDetail);