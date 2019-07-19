//
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
//
import React, { Component } from 'react';
//import Permissions from 'react-native-permissions';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  NativeEventEmitter,
  NativeModules
} from 'react-native';

const ChirpConnect = NativeModules.ChirpConnect;
const ChirpConnectEmitter = new NativeEventEmitter(ChirpConnect);

const key = 'BE9CcAc0F91dD3E5F546f7254';
const secret = '2bCC2406b7A506bd55c4bfCEFA475d1ADa41fBdFcCfB6BaccB';
const config = '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';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      'initialised': false,
      'status': 'Sleeping',
      'data': '----------'
    }
  }

  async componentDidMount() {
    /*const response = await Permissions.check('microphone')
    if (response !== 'authorized') {
      await Permissions.request('microphone')
    }*/

    this.onStateChanged = ChirpConnectEmitter.addListener(
      'onStateChanged',
      (event) => {
        if (event.status === ChirpConnect.CHIRP_CONNECT_STATE_STOPPED) {
          this.setState({ status: 'Stopped' });
        } else if (event.status === ChirpConnect.CHIRP_CONNECT_STATE_PAUSED) {
          this.setState({ status: 'Paused' });
        } else if (event.status === ChirpConnect.CHIRP_CONNECT_STATE_RUNNING) {
          this.setState({ status: 'Running' });
        } else if (event.status === ChirpConnect.CHIRP_CONNECT_STATE_SENDING) {
          this.setState({ status: 'Sending' });
        } else if (event.status === ChirpConnect.CHIRP_CONNECT_STATE_RECEIVING) {
          this.setState({ status: 'Receiving' });
        }
      }
    );

    this.onReceived = ChirpConnectEmitter.addListener(
      'onReceived',
      (event) => {
        if (event.data.length) {
          this.setState({ data: event.data });
        }
      }
    )

    this.onError = ChirpConnectEmitter.addListener(
      'onError', (event) => { console.warn(event.message) }
    )

    try {
      ChirpConnect.init(key, secret);
      ChirpConnect.setConfig(config);
      ChirpConnect.start();
      this.setState({ initialised: true })
    } catch(e) {
      console.warn(e.message);
    }
  }

  componentWillUnmount() {
    this.onStateChanged.remove();
    this.onReceived.remove();
    this.onError.remove();
  }

  onPress() {
    ChirpConnect.send([0, 1, 2, 3, 4]);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Chirp!
        </Text>
        <Text style={styles.instructions}>
          {this.state.status}
        </Text>
        <Text style={styles.instructions}>
          {this.state.data}
        </Text>
        <Button
          onPress={this.onPress}
          title='SEND'
          disabled={!this.state.initialised}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 60,
  },
  instructions: {
    padding: 10,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
