import { isUndefinedOrNull } from '../../utils';
import getElement from './getElement';

interface Props {
  parentId: string;
  targetElement: Element;
}

export const appendChildElement = ({
  parentId,
  targetElement,
}: Props): void => {
  const parentElement = getElement(parentId);
  if (!isUndefinedOrNull(parentElement)) {
    parentElement.appendChild(targetElement);
  }
};
