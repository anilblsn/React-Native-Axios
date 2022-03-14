import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 4,
  },
  image: {
    height: 170,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 50,
    textAlign: 'right',
    paddingHorizontal: 10,
    backgroundColor: '#000000c0',
  },
});
