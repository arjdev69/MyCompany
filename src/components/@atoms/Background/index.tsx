import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export default styled(LinearGradient).attrs({
  start: {x: 1.1, y: 0.6},
  end: {x: 0, y: 0.2},
  locations: [0.1, 0.5, 0.7],
  colors: ['#52284f', '#1b1a2a', '#2b3870'],
})`
  flex: 1;
`;
