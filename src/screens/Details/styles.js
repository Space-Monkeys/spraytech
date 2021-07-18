import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  VehicleDetail: {
    backgroundColor: '#1D2222',
    height: 269,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  userImage: {
    marginBottom: -70,
  },
  BtnInspection: {
    backgroundColor: '#008847',
    width: 126,
    height: 47,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginTop: 70,
  },
  TextButton: {
    fontSize: 10,
    marginBottom: 1,
    color: '#FFF',
    fontWeight: '700',
  },
  ContainerDetails: {
    display: 'flex',
    width: '100%',
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  TagStatus: {
    width: 95,
    marginTop: 3,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#ffb7034f',
  },
  LeftContent: {
    width: '33%',
    alignItems: 'center',
  },
  RightContent: {
    width: '33%',
    alignItems: 'center',
  },
  CenterContent: {
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    borderColor: '#DBDBDB',
    width: '33%',
    alignItems: 'center',
  },
  ScrollView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  ScrollViewBody: {
    width: '100%',
    height: 140,
  },
  SpecsText: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: 14,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 20,
    fontWeight: '700',
  },
  InspectionHistory: {
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 20,
  },
  ScrollViewVertical: {
    marginTop: 10,
  },
  HistoryTitle: {
    marginBottom: 15,
  },
});
