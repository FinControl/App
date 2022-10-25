import React from 'react';
import { SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { View, Text, Image } from 'react-native';
import style from "../styles/style"
import * as COLORS from "../styles/cores.json"

export default function Dashboard() {

  const Header = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
        <View>
        <Text style={style.textHeader}>
          Outubro
        </Text>
        </View>
        <View style={{justifyContent: 'center', marginLeft: 8}}>
        <Image source={require("../../assets/seta.png")}
        style={{tintColor: COLORS.GRAY_100, width: 25, height: 25, }}
        />
        </View>
        </View>
        </TouchableOpacity>
      </View>
    )
  }

  const GerenciarContas = () => {
    
    return (
      <View style={{width: "90%", backgroundColor: 'black', borderRadius: 4, padding: 12}}>
        <Text style={{color: COLORS.GRAY_100, fontSize: 24, marginBottom:12}}>
          Gerenciar contas
        </Text>
        <ScrollView style={{height: 100}}> 
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20, fontWeight: '500'}}>Nubank:</Text>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20}}>R$1.200,00</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20, fontWeight: '500'}}>Itaú:</Text>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20}}>R$1.200,00</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20, fontWeight: '500'}}>C6 Bank:</Text>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20}}>R$1.200,00</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20, fontWeight: '500'}}>Banco inter:</Text>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20}}>R$1.200,00</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20, fontWeight: '500'}}>Nubank:</Text>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20}}>R$1.200,00</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20, fontWeight: '500'}}>Itaú:</Text>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20}}>R$1.200,00</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20, fontWeight: '500'}}>C6 Bank:</Text>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20}}>R$1.200,00</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20, fontWeight: '500'}}>Banco inter:</Text>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20}}>R$1.200,00</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20, fontWeight: '500'}}>Nubank:</Text>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20}}>R$1.200,00</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20, fontWeight: '500'}}>Itaú:</Text>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20}}>R$1.200,00</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20, fontWeight: '500'}}>C6 Bank:</Text>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20}}>R$1.200,00</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20, fontWeight: '500'}}>Banco inter:</Text>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20}}>R$1.200,00</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20, fontWeight: '500'}}>Nubank:</Text>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20}}>R$1.200,00</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20, fontWeight: '500'}}>Itaú:</Text>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20}}>R$1.200,00</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20, fontWeight: '500'}}>C6 Bank:</Text>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20}}>R$1.200,00</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20, fontWeight: '500'}}>Banco inter:</Text>
          <Text style={{color: COLORS.GRAY_100, fontSize: 20}}>R$1.200,00</Text>
          </View>
        </ScrollView>
      </View>
    )
  }

  const ContainerCategorias = () => {
    
    return (
      <View style={{width: "90%", backgroundColor: 'black', marginTop: 12, borderRadius: 4, marginBottom: 12}}>
        <Text style={{fontSize: 24, color: COLORS.GRAY_100, margin: 12}}>
          Suas despesas
        </Text>
        <View style={{height: "50%"}}>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
      <Header/>
      <ContainerCategorias/>
      <GerenciarContas/>
      </ScrollView>
    </SafeAreaView>
  );
}
