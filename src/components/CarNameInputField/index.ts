import { DOM_ID, STYLE_CLASS } from '../../constant';
import { setCarNameList } from '../../state';
import {
  alertWrongInput,
  appendChildElement,
  appendChildSection,
  getInputValue,
  isValidCarNames,
} from '../../utils';
import Button from '../@common/Button';
import Input from '../@common/Input';

const LABEL_ID = 'game-name-label';
const CONTAINER_ID = 'game-name-container';

const handleCarNameInput = (): void => {
  const value = getInputValue(DOM_ID.gameNameInput);
  if (isValidCarNames(value)) {
    setCarNameList(value);
    return;
  }
  alertWrongInput('각각의 자동차 이름은 5글자 이하여야 합니다');
};

const renderLabel = (): void => {
  const label = document.createElement('label');
  label.id = LABEL_ID;
  label.className = STYLE_CLASS.label;

  label.innerText = '5자 이하의 자동차 이름을 콤마 로 구분하여 입력해주세요';

  appendChildElement({ targetElement: label, parentId: DOM_ID.gameName });
};

const renderGameNameInputField = (): void => {
  const container = document.createElement('div');
  container.className = STYLE_CLASS.labelContainer;
  container.id = CONTAINER_ID;

  appendChildElement({ parentId: LABEL_ID, targetElement: container });

  Input({
    id: DOM_ID.gameNameInput,
    parentId: CONTAINER_ID,
    inputType: 'text',
    placeholder: 'west',
  });

  Button({
    id: DOM_ID.gameNameButton,
    parentId: CONTAINER_ID,
    clickAction: () => {
      handleCarNameInput();
    },
    buttonText: '확인',
  });
};

const CarNameInputField = (): void => {
  appendChildSection({ sectionId: DOM_ID.gameName });
  renderLabel();
  renderGameNameInputField();
};

export default CarNameInputField;
