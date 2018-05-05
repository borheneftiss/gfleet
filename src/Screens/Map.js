import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { getListCordinateCars } from '../Actions';

const { width, height } = Dimensions.get('window');

class Map extends Component {
  componentDidMount() {
    this.props.getListCorrdinateCars();
  }
  render() {
    return (
      <View style={styles.container}>
          <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: height,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const mapStateToProps = ({ appLoading, map }) => {
  return {
    user: appLoading.user,
    cars: map.cars
  };
};

export default connect(mapStateToProps, { getListCordinateCars })(Map);
