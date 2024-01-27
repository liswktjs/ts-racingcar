import { DOM_ID } from '../../constant';
import { appendChildElement } from './appendChildElement';

interface Props {
  sectionId: (typeof DOM_ID)[keyof typeof DOM_ID];
}

export const appendChildSection = ({ sectionId }: Props): void => {
  const sectionElement = document.createElement('section');
  sectionElement.id = sectionId;

  appendChildElement({
    parentId: DOM_ID.root,
    targetElement: sectionElement,
  });
};
