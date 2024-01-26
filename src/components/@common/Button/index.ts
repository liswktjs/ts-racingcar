import './index.css';

interface Props {
  id: string;
  buttonText: string;
  parentId: string;
  clickAction: () => void;
}

const Button = ({ buttonText, parentId, clickAction, id }: Props) => {
  const button = document.createElement('button');

  button.innerText = buttonText;
  button.id = id;
  button.classList.add('btn');
  button.addEventListener('click', clickAction);

  const parentElement = document.getElementById(parentId);
  if (parentElement) {
    parentElement.append(button);
  }
};

export default Button;
