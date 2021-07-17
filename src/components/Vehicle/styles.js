import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  BoxVehicle: {
    display: 'flex',
    width: '100%',
    height: 200,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 8,
    justifyContent: 'space-between',
    padding: 15,
  },

  VehicleBrand: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  VehicleName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5F5F5F',
  },
  BtnNext: {
    width: 36,
    height: 36,
    backgroundColor: '#40B37C',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
});
