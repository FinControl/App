import { StyleSheet } from "react-native"
import * as COLORS from './cores.json';

const styleRegister = StyleSheet.create({ 
    container: {
        backgroundColor: COLORS.PRIMARY_COLOR,
        flex: 1
    },
    containerRegister: {
        flex: 5,
        backgroundColor: "white",
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        paddingStart:"5%",
        paddingEnd:"5%",
        paddingTop: "5%"
    },
    containerTexto:{
        flex: 1,
        backgroundColor: COLORS.PRIMARY_COLOR,
        marginTop: "10%",
        justifyContent: "center",
        alignItems: 'center'
    },
    textoPrincipal: {
        fontWeight: "bold",
        fontSize: 35
    },
    textoInput:{
        borderBottomWidth: 1,
        marginBottom: 20,
        height: 40
    },
    textFormulario:{
        fontSize: 20,
        marginTop: 10
    },
    botaoRegister: {
        borderRadius: 15,
        backgroundColor: COLORS.PRIMARY_COLOR,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    }
})

export default styleRegister;