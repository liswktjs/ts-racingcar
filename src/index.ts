import CarNameInputField from './components/CarNameInputField';
import GameCountInputField from './components/GameCountInputField';
import Header from './components/Header';

import './styles/index.css';

export const App = () => {
  Header();
  CarNameInputField();
  GameCountInputField();
};

App();
