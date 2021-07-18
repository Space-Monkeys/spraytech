import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  BoxContainerHome: {
    flex: 1,
  },
  SearchContainer: {
    width: '100%',
    marginTop: 20,
  },
  ScrollView: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 356,
  },
  BoxImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Chart: {
    marginTop: 30,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BoxInfo: {
    width: '25%',
    height: 115,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
  },
  BoxIcon: {
    width: 43,
    height: 55,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    borderBottomLeftRadius: 8,
  },
  Value: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: 'bold',
  },
  Title: {
    fontSize: 10,
    color: '#5F5F5F',
    textAlign: 'center',
  },
  RowBox: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#FFF',
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    borderRadius: 8,
  },
  ScrollView: {
    width: '100%',
    height: 279,
    marginTop: 10,
  },
  RowContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
    marginTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E8E8E8',
  },
  LeftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  DescriptionLabel: {
    marginLeft: 8,
  },
  InspectionComponent: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  InspectionStatus: {
    marginTop: 2,
    fontSize: 12,
    color: '#ADB1B2',
  },
  StartInspectionTitle: {
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 14,
    marginTop: 20,
    fontWeight: 'bold',
  },
});
