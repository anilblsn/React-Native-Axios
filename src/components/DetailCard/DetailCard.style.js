import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  image: {
    height: windowHeight / 3,
  },
  title: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 15,
    color: 'red',
    fontWeight: 'bold',
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 5,
    paddingVertical: 10,
    marginBottom: 10,
  },
  youContainer: {
    backgroundColor: 'red',
    alignItems: 'center',
    padding: 20,
    margin: 20,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  youText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
});
