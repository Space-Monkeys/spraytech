import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  BoxTimeline: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    width: 42,
    height: 2,
  },
  TimelineStep: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
