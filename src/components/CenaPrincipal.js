
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableHighlight
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png');
const MenuEmpresa = require('../imgs/menu_empresa.png');
const MenuServico = require('../imgs/menu_servico.png');
const MenuContato = require('../imgs/menu_contato.png');
const MenuCliente = require('../imgs/menu_cliente.png');


export default class CenaPrincipal extends Component {
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor='#CCC'
        />
        <BarraNavegacao />
        <View style={styles.logo}>
          <Image source={logo} />
        </View>
        <View style={styles.menu}>
          <View style={styles.menuGrupo}>
            <TouchableHighlight onPress={() => this.props.navigator.push({ id: 'b' })}>
              <Image source={MenuCliente} style={styles.imgMenu} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigator.push({ id: 'c' })}>
              <Image source={MenuContato} style={styles.imgMenu} />
            </TouchableHighlight>
          </View>
          <View style={styles.menuGrupo}>
            <TouchableHighlight onPress={() => this.props.navigator.push({ id: 'd' })}>
              <Image source={MenuEmpresa} style={styles.imgMenu} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigator.push({ id: 'e' })}>
              <Image source={MenuServico} style={styles.imgMenu} />
            </TouchableHighlight>
          </View>
        </View>
      </View >
    );
  }
}


const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  menu: {
    alignItems: 'center'
  },
  menuGrupo: {
    flexDirection: 'row'
  },
  imgMenu: {
    margin: 15
  }

});