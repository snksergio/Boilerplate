import Home from '../screens/Home';
import Estrutura from '../screens/Estrutura';
import Analise from '../screens/Analise';
import Dependencias from '../screens/Dependencias';
import Documentacao from '../screens/Documentacao';
import Keyboard from '../screens/Components/Keyboard';
import ButtonScreen from '../screens/Components/Button';
import AlertScreen from '../screens/Components/Alert';
import VirtualKeyboardScreen from '../screens/Components/VirtualKeyboard';
import ModalScreen from '../screens/Components/Modal';
import TabScreen from '../screens/Components/Tabs';
import GridScreen from '../screens/Components/Grid';
import FormScreen from '../screens/Components/Form';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/Estrutura',
    component: Estrutura,
  },
  {
    path: '/Analise',
    component: Analise,
  },
  {
    path: '/Dependencias',
    component: Dependencias,
  },
  {
    path: '/Documentacao',
    component: Documentacao,
  },
  {
    path: '/Keyboard',
    component: Keyboard,
  },
  {
    path: '/Button',
    component: ButtonScreen,
  },
  {
    path: '/Alert',
    component: AlertScreen,
  },
  {
    path: '/VirtualKeyboard',
    component: VirtualKeyboardScreen,
  },
  {
    path: '/Modal',
    component: ModalScreen,
  },
  {
    path: '/Tabs',
    component: TabScreen,
  },
  {
    path: '/Grid',
    component: GridScreen,
  },
  {
    path: '/Form',
    component: FormScreen,
  },
];

export default routes;
