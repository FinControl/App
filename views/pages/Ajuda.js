import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import style from '../styles/style'
import * as COLORS from "../styles/cores.json"

const Ajuda = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={{alignItems:'center'}}>
      <Text style={{fontSize: 24, color:COLORS.GRAY_100}}>Ajuda</Text>
      </View>
      <ScrollView style={{margin: 12}}>
        <View style={{marginBottom: 8}}>
          <Text style={{fontSize: 20, color: COLORS.GRAY_100, fontWeight: 'bold', marginBottom:8}}>
            Dashboard:
          </Text>
        <Text style={{fontSize: 16, color: COLORS.GRAY_100}}>
        No Dashboard você pode visualizar dados que foram inseridos. Os gráficos exibidos poderão ser filtrados pelo tipo (receita, despesa, bem ou dívida) e pelo mês/ano.
        </Text>
        </View>
        <View style={{marginBottom: 8}}>
        <Text style={{fontSize: 20, color: COLORS.GRAY_100, fontWeight: 'bold', marginBottom:8}}>
        Receitas e despesas:
        </Text>
        <Text style={{fontSize: 16, color: COLORS.GRAY_100}}>
        Nessa tela, você poderá adicionar uma receita ou despesa, basta clicar no “+”, preencher os campos desejados e clicar em “adicionar” (você também poderá editar e apagar o registro criado). No topo da tela é exibido o total referente a receitas ou despesas e o saldo (subtração entre os dois citados). As últimas receitas e despesas adicionadas estarão listadas no extrato. 
        </Text>
        </View>
        <View style={{marginBottom: 8}}>
        <Text style={{fontSize: 20, color: COLORS.GRAY_100, fontWeight: 'bold', marginBottom:8}}>
        Patrimônio:
        </Text>
        <Text style={{fontSize: 16, color: COLORS.GRAY_100}}>
        Em Patrimônio você poderá adicionar um bem ou uma dívida, basta clicar no “+”, preencher os campos desejados e clicar em “adicionar você também poderá editar e apagar o registro criado). No topo da tela é exibido o total referente ao patrimônio líquido (diferença entre bens e dívidas) e a evolução patrimonial.
        </Text>
        </View>
        <View style={{marginBottom: 8}}>
        <Text style={{fontSize: 20, color: COLORS.GRAY_100, fontWeight: 'bold', marginBottom:8}}>
        Planejamento:
        </Text>
        <Text style={{fontSize: 16, color: COLORS.GRAY_100}}>
        Na tela de planejamento você pode estimar compras com base no juros e visualizar o valor total e de cada parcela.
        </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Ajuda