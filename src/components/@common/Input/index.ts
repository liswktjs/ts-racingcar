import { appendChildElement } from '../../../utils';

interface Props {
  id: string;
  inputType: 'text' | 'number';
  placeholder?: string;
  parentId: string;
}

const Input = ({ id, parentId, inputType, placeholder }: Props): void => {
  const input = document.createElement('input');

  input.placeholder = placeholder ?? '';
  input.id = id;
  input.type = inputType;
  input.classList.add('input');

  appendChildElement({ parentId, targetElement: input });
};

export default Input;
