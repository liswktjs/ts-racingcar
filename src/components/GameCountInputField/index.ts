import { DOM_ID, STYLE_CLASS } from '../../constant';
import { setGameCount } from '../../state';
import {
  alertWrongInput,
  appendChildElement,
  appendChildSection,
  getInputValue,
  isValidGameCount,
} from '../../utils';
import Button from '../@common/Button';
import Input from '../@common/Input';

const LABEL_ID = 'game-count-label';
const CONTAINER_ID = 'game-count-container';

const handleGameCountInput = (): void => {
  const value = getInputValue(DOM_ID.gameCountInput);
  if (isValidGameCount(Number(value))) {
    setGameCount(Number(value));
    return;
  }
  alertWrongInput('게임 횟수는 정수로 입력해주세요');
};

const renderLabel = (): void => {
  const label = document.createElement('label');
  label.id = LABEL_ID;
  label.className = STYLE_CLASS.label;

  label.innerText = '시도할 횟수를 입력해주세요';

  appendChildElement({ targetElement: label, parentId: DOM_ID.gameCount });
};

const renderGameCountInputField = (): void => {
  const container = document.createElement('div');
  container.className = STYLE_CLASS.labelContainer;
  container.id = CONTAINER_ID;

  appendChildElement({ parentId: LABEL_ID, targetElement: container });

  Input({
    id: DOM_ID.gameCountInput,
    parentId: CONTAINER_ID,
    inputType: 'number',
    placeholder: '10',
  });

  Button({
    id: DOM_ID.gameCountButton,
    parentId: CONTAINER_ID,
    clickAction: () => {
      handleGameCountInput();
    },
    buttonText: '확인',
  });
};

const GameCountInputField = (): void => {
  appendChildSection({ sectionId: DOM_ID.gameCount });
  renderLabel();
  renderGameCountInputField();
};

export default GameCountInputField;
