
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';


const detalheContatos = require('../imgs/detalhe_contato.png');



export default class CenaContatos extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor='#CCC'
                />
                <BarraNavegacao  voltar navigator={this.props.navigator}/>
                <View style={styles.cabecalho}>
                    <Image source={detalheContatos} />
                    <Text style={styles.textTitulo}>Contatos</Text>
                </View>
                <View style={styles.detalheContato}>
                   <Text style={styles.txtContatos}>Telefone: (12) 1212-1212</Text>
                   <Text>Celular: (12) 1212-1212</Text>
                   <Text>E-mail: (12) 1212-1212</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    textTitulo: {
        fontSize: 30,
        color: '#61BD8C',
        marginTop: 25
    },
    detalheContato:{
        padding: 20,
        marginTop: 20
    },
    txtContatos:{
        fontSize: 18
    }
});