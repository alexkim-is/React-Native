
import React, { Component } from 'react';
import { StyleSheet, View, Text, ListView } from 'react-native';

export default class ListNames extends Component {

  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows([
          'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
        ])
      };
    }
    render() {
      return (
        <View style={{flex: 1, paddingTop: 22}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
        </View>
      );
    }
  }
