import { DOM_ID } from '../../constant';
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

const renderLabel = (): void => {
  const label = document.createElement('label');
  label.id = LABEL_ID;
  label.innerText = '시도할 횟수를 입력해주세요';

  appendChildElement({ targetElement: label, parentId: DOM_ID.gameCount });
};

const handleGameCountInput = (): void => {
  const value = getInputValue(DOM_ID.gameCountInput);
  if (isValidGameCount(Number(value))) {
    setGameCount(Number(value));
    return;
  }
  alertWrongInput('게임 횟수는 정수로 입력해주세요');
};

const GameCountInputField = (): void => {
  appendChildSection({ sectionId: DOM_ID.gameCount });
  renderLabel();

  Input({
    id: DOM_ID.gameCountInput,
    parentId: LABEL_ID,
    inputType: 'number',
    placeholder: '10',
  });

  Button({
    id: DOM_ID.gameCountButton,
    parentId: LABEL_ID,
    clickAction: () => {
      handleGameCountInput();
    },
    buttonText: '확인',
  });
};

export default GameCountInputField;
