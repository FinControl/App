import { StyleSheet } from "react-native"
import * as COLORS from './cores.json';

const style = StyleSheet.create({ 
    container: {
        flex : 1,
        backgroundColor: COLORS.GRAY_900,
    },
    header:{
        alignItems: 'center'
    },
    textHeader:{
        color: COLORS.GRAY_100,
        fontSize: 32,
        fontWeight: '500'
    },
    form:{
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
    },
    input:{
        width: "100%",
        backgroundColor: COLORS.GRAY_800,
        height: 40,
        borderRadius: 4,
        padding: 12,
        color: COLORS.GRAY_100,
        borderWidth: 0,
    },
    catReceitas:{
        width: "80%",
        backgroundColor: COLORS.GRAY_800,
        height: 40,
        borderRadius: 4,
        padding: 12,
        color: COLORS.GRAY_100,
        borderWidth: 0,
    },
    inputDate:{
        width: "100%",
        backgroundColor: COLORS.GRAY_800,
        height: 40,
        borderRadius: 4,
        padding: 12,
        color: COLORS.GRAY_100
    },
    label:{
        color: COLORS.GRAY_100,
        fontSize: 20,
        margin: 12
    },
    datePicker:{
        height: 300,
        width: "100%",
        backgroundColor: COLORS.GRAY_800
    },
    button:{
        backgroundColor: COLORS.PRIMARY_COLOR,
        height: 40,
        marginTop: 32,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonDelete:{
        backgroundColor: '#FF4343',
        height: 40,
        marginTop: 12,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default style