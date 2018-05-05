import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';
import { URL } from '../../Actions/Config';
import IMAGE from '../../Images/user.png';

class Cars extends Component {
  constructor(props) {
    super(props);
    this.state= { user: null, groupe: null };
  }
  componentDidMount() {
    axios.get(`${URL}/users/${this.props.item.UserId}`).then((response) => {
      this.setState({ user: response.data[0] });
    })
    .catch((error) => { console.log(error.response.data) });
    axios.get(`${URL}/groupcars/${this.props.item.GroupCarId}`).then((response) => {
      this.setState({ groupe: response.data[0] });
    })
    .catch((error) => { console.log(error.response.data) });
  }
  render() {
    const { item, onPress } = this.props;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.mainContainer}>
          <View style={styles.containerImage}>
              <Image source={IMAGE} style={styles.styleImage} />
          </View>
          <View style={styles.container}>
              <Text style={styles.styleText}>Name: {this.state.user ? this.state.user.first_name : ''}</Text>
              <Text style={styles.styleText}>Type: {this.state.user ? this.state.user.type : ''}</Text>
              <Text style={styles.styleText}>Véhicule: {item.plaque}</Text>
              <Text style={styles.styleText}>Groupe: {this.state.groupe ? this.state.groupe.name : ''}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = {
  mainContainer: {
    padding: 8,
    marginTop: 8,
    elevation: 1.5,
    shadowColor: 'rgba(162, 162, 162, 0.50)',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row'
  },
  containerImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16
  },
  styleImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      borderColor: '#EEEEEE',
      borderWidth: 1
  },
  container: {
      flex: 3,
  },
  styleText: {
    fontSize: 16,
    color: '#000000'
  }
};
export { Cars };
