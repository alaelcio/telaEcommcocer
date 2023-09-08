import React from 'react';
import { Image, SafeAreaView, View,Text, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import plantsImg from '../../assets/planta.png';
import { styles } from './styles';


export function Details() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Feather
            name='arrow-left' size={35}
            />
            <Feather
            name='shopping-cart' size={35}
            />
        </View>
        <View style={styles.img}>
                <Image
                source={plantsImg}
                resizeMode='contain'
                />
            </View>
            <View style={styles.box}>
                <View style={styles.boxs}>
                    <View style={ styles.boxx}/>
                    <Text style={styles.name}>Azaleias</Text>
                </View>
                <View style={styles.sub}>
                  <Text style={styles.title}>É uma planta originária da Ásia</Text>
                </View>

                <View style={styles.sobre}>
                  <Text style={styles.sob}>Sobre</Text>
                  <Text style={styles.plant}>Suas características 
                  ornamentais a colocam como uma das flores{'\n'} mais apreciadas e valiosas no mundo da jardinagem</Text>
                </View>
                <View style={styles.boxy}>
                   <View style={styles.bnt}>
                    <Text style={styles.bntitle}>-</Text>
                   </View>
                   <Text style={styles.um}>1</Text>
                   <View style={styles.right}>
                    <Text>+</Text>
                   </View>
                  </View>
                  <View style={styles.left}>
                    <Text style={styles.comp}>Compra</Text>
                  </View>
                 
                </View>
            
    </SafeAreaView>
  );
}