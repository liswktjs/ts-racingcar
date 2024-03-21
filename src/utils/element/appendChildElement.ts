import { isUndefinedOrNull, getElement } from '../../utils';

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
