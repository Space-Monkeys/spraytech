import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    ImageBox: {
           borderRadius: 8,
           borderWidth:1,
           borderColor: '#7159c1',
           width: 50,
           height:50,
    },
    WidgetBox: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingRight: 15,
        paddingLeft: 15,
        justifyContent: 'space-between',
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginLeft:10,
    },
    UserBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});