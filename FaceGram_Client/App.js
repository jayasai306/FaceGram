import React from 'react';
import { Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
 constructor(props) {
    super(props);

    this.state  = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      base_url: "http://127.0.0.1:8000/"
    }
  }

  componentDidMount() {
    this.fetchDataFromApi();

  }

  fetchDataFromApi = ()  => {
    const url = "http://127.0.0.1:8000/";

    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {

        this.setState({
          data: res,
          error: null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading : false });
      })
  };

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true
      },
      () => {
        this.fetchDataFromApi();
      }
    );
  };

  render() {
    return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Text >{this.state.data.res}</Text>
        </View>
      )
    }
}