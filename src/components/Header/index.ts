import { DOM_ID } from '../../constant';
import { appendChildElement, appendChildSection } from '../../utils';

const renderTitle = (): void => {
  const titleElement = document.createElement('h1');
  titleElement.innerText = '자동차 경주 게임';

  appendChildElement({
    parentId: DOM_ID.header,
    targetElement: titleElement,
  });
};

const Header = (): void => {
  appendChildSection({ sectionId: DOM_ID.header });
  renderTitle();
};

export default Header;
