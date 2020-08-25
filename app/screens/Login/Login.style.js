import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/colors';

const styles = StyleSheet.create({
  container: (insets) => ({
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: insets.bottom,
    paddingTop: insets.top,
    paddingHorizontal: 16,
  }),
  label: {
    fontSize: 20,
    color: 'blue',
  },
  greeting: {
    paddingTop: 80,
    paddingBottom: 40,
    fontSize: 30,
    fontWeight: '300',
  },
  space: {
    height: 8,
  },
  forgot: {
    textAlign: 'right',
    paddingTop: 16,
    fontWeight: '300',
    color: Colors.SHAMROCK,
  },
  signUp: {
    fontSize: 12,
    textAlign: 'center',
    paddingTop: 16,
    color: Colors.GREY_OLD,
    fontWeight: '300',
  },
  activeText: {
    color: Colors.SHAMROCK,
  },
});

export { styles };
