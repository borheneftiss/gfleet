import React, { Component } from 'react';
import { FlatList, RefreshControl, View, ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';
import { Colors } from '../Constants';
import { getListCars } from '../Actions';
import { Cars } from '../Components/common';

class Home extends Component {
  componentDidMount() {
    this.props.getListCars();
  }
  onRefresh() {
    this.props.getListCars();
  }
  onPress(item) {
    this.props.navigation.navigate('MapDetail', { item });
  }
  renderItem({ item }) {
    return <Cars onPress={this.onPress.bind(this, item)} item={item} />;
  }
  render() {
    console.log(this.props.cars);
    return (
      <FlatList
        style={{ padding: 8 }}
        data={this.props.cars}
        keyExtractor={(item) => `${item.id}`}
        renderItem={this.renderItem.bind(this)}
        refreshing={this.props.refreshing}
        onRefresh={this.onRefresh.bind(this)}
      />
    )
  }
}
const styles = {
  mainContainer: {
    flex: 1
  },
};

const mapStateToProps = ({ appLoading, home }) => {
  return {
    user: appLoading.user,
    cars: home.cars,
    refreshing: home.refreshing
  };
};

export default connect(mapStateToProps, { getListCars })(Home);
