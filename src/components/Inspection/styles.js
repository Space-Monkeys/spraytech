import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  InspectionBox: {
    width: '100%',
    height: 231,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 20,
    flexDirection: 'row',
    display: 'flex',
  },
  DescriptionHistory: {
    flexDirection: 'row',
  },
  TextDescription: {
    marginLeft: 10,
  },
  Title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  Description: {
    fontSize: 10,
    color: '#ADB1B2',
    marginTop: 4,
  },
  TopContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  /*   ItemRow: {
    marginTop: 18,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 0.5,
    paddingBottom: 5,
  },
  RowDescription: {
    fontSize: 10,
    fontWeight: '700',
    color: '#6C7272',
  }, */
});
