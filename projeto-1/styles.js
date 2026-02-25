import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 6,
    width: 300,
    height: 30
  },
  loginLabel: {
    gap: 2
  },
  textLabel: {
    fontWeight: 'bold'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: '50%'
  },
  loggedContainer: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#1a73bc'
  },
  loggedImage: {
    width: 200,
    height: 200,
    borderRadius: '50%',
    marginTop: 10,
    marginBottom: 10
  },
  loggedText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    margin: 10
  },
  task: {
    fontSize: 30,
    marginBottom: 8
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'green'
  },
  remover: {
    backgroundColor: '#ff4621',
    fontSize: 4,
    flex: 1,
    padding: 12,
    borderRadius: 12
  },
  complete: {
    backgroundColor: '#00FF7F',
    flex: 1,
    padding: 12,
    fontSize: 4,
    borderRadius: 12
  }
});

export default styles