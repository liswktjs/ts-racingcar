import { isUndefinedOrNull } from '.';
import getElement from './getElement';

interface Props {
  parentId: string;
  targetElement: Element;
}

const appendChildElement = ({ parentId, targetElement }: Props): void => {
  const parentElement = getElement(parentId);
  if (!isUndefinedOrNull(parentElement)) {
    parentElement.appendChild(targetElement);
  }
};

export default appendChildElement;
