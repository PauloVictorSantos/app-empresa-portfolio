
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';


const detalheServico = require('../imgs/detalhe_servico.png');

export default class CenaServicos extends Component {
    render() {
        return (
            <View  style={{flex:1, backgroundColor: '#fff'}}>
                <StatusBar
                    backgroundColor='#19d1c8'
                />
                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#19d1c8'/>
                <View style={styles.cabecalho}>
                    <Image source={detalheServico} />
                    <Text style={styles.textTitulo}>Nossos Serviços</Text>
                </View>
                <View styless={styles.detalheServico}>
                    <Text style={styles.txtServico}>
                        Consultoria
                   </Text>
                    <Text style={styles.txtServico}>
                        Processos
                   </Text>
                    <Text style={styles.txtServico}>
                        Projetos
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
        color: '#19D1C8',
        marginTop: 25
    },
    detalheServico: {
        padding: 20,
        marginTop: 20
    },
    txtServico: {
        fontSize: 18
    }
});