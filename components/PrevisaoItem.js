import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Cartao from './Cartao'

const PrevisaoItem = (props) => {
    return (
        <Cartao estilos={styles.cartao}>
            <View style={styles.tela}>
                <Image
                    style={styles.imagem}
                    source={{ uri: `https://openweathermap.org/img/wn/${props.previsao.weather[0].icon}.png` }}
                />
                <View>
                    <View>
                        <View style={styles.primeiraLinha}>
                            <Text>Sensação:{`${(props.previsao.feels_like)}`}</Text>
                        </View>
                        <View style={styles.segundaLinha}>
                            <Text> Nasce:{`${new Date(props.previsao.sunrise * 1000).toLocaleTimeString()} - ${props.previsao.weather[0].description}`}</Text>
                        </View>
                        <View style={styles.segundaLinha}>
                            <Text>Se Poe:{`${new Date(props.previsao.sunset * 1000).toLocaleTimeString()} - ${props.previsao.weather[0].description}`}</Text>
                        </View>

                    </View>
                </View>
            </View>
        </Cartao>
    )
};

export default PrevisaoItem;

const styles = StyleSheet.create({
    cartao: {
        marginBottom: 8
    },
    tela: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-evenly'
    },
    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD'
    },
    imagem: {
        width: 50,
        height: 50
    },
    valor: {
        marginHorizontal: 2
    }
});