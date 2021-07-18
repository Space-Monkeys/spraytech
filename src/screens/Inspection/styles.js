import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  BoxContainerHome: {
    flex: 1,
    backgroundColor: '#fff',
  },
  SearchContainer: {
    width: '100%',
    marginTop: 20,
  },
  ScrollView: {
    width: '100%',
  },
  BoxDescription: {
    marginTop: 20,
    width: '100%',
    height: 80,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  Description: {
    fontSize: 10,
    marginTop: 10,
  },
  BoxSprayers: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  Spray: {
    backgroundColor: '#fff',
    width: '30%',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
