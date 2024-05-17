import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#1a222e',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textHeader: {
    alignItems: 'center',
  },
  textTitleHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  textSubtitleHeader: {
    color: '#8c8c8c',
    fontSize: 15,
  },
});

export { styles };
