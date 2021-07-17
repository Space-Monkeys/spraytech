import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  WeatherBox: {
    width: '100%',
    height: 130,
    backgroundColor: '#3bceac',
    marginTop: 20,
    borderRadius: 8,
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Temperature: {
    fontSize: 50,
    color: '#FFF',
    marginRight: 5,
  },
  LeftContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  BoxInfo: {
    fontSize: 10,
    color: '#FFF',
  },
  Time: {
    color: '#FFF',
    fontWeight: '300',
  },
  Location: {
    fontSize: 10,
    color: '#FFF',
  },
  Description: {
    borderLeftWidth: 0.5,
    paddingLeft: 8,
    borderLeftColor: '#FFF',
  },
});
