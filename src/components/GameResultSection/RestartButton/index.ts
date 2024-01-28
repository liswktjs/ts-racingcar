import Button from '../../@common/Button';

interface Props {
  id: string;
  parentId: string;
  initGame: () => void;
}

const RestartButton = ({ id, initGame, parentId }: Props): void => {
  Button({
    id,
    parentId,
    buttonText: '다시 시작하시',
    clickAction: () => {
      initGame;
    },
  });
};

export default RestartButton;
