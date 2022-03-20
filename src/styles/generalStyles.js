import {StyleSheet} from 'react-native';
const generalStyles = StyleSheet.create({
  container: {
    padding: 40,
    minHeight: '100%',
  },
  containerFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 80,
    marginBottom: 20,
  },
  section: {
    marginTop: 20,
    marginEnd: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '80%',
  },
  titleTextChecked: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  header1:{
    fontSize: 30,
    fontWeight: 'bold',
    padding:20,
    marginBottom:20,
    fontFamily:'RobotoSlab-Black'
  },
  input: {
    backgroundColor: '#EEEEEE',
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default generalStyles;
