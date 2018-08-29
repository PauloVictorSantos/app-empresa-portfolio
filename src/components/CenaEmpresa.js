
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';


const detalheEmpresa = require('../imgs/detalhe_empresa.png');



export default class CenaEmpresa extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor='#CCC'
                />
                <BarraNavegacao  voltar navigator={this.props.navigator}/>
                <View style={styles.cabecalho}>
                    <Image source={detalheEmpresa} />
                    <Text style={styles.textTitulo}>Empresa</Text>
                </View>
                <View style={styles.detalheEmpresa}>
                   <Text style={styles.txtEmpresa}>
                   A ATM consultoria está no mercado a mais de 20 anos
                   </Text>
                   
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
        color: '#EC7148',
        marginTop: 25
    },
    detalheEmpresa:{
        padding: 20,
        marginTop: 20
    },
    txtEmpresa:{
        fontSize: 18
    }
});