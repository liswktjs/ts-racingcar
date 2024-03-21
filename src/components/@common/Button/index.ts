import { appendChildElement } from '../../../utils';

interface Props {
  id: string;
  buttonText: string;
  parentId: string;
  clickAction: () => void;
}

const Button = ({ buttonText, parentId, clickAction, id }: Props): void => {
  const button = document.createElement('button');

  button.innerText = buttonText;
  button.id = id;
  button.classList.add('btn');
  button.addEventListener('click', clickAction);

  appendChildElement({ parentId, targetElement: button });
};

export default Button;
