import cypress from 'cypress';
import Button from '../../src/components/@common/Button';

describe('render 함수 테스트', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Button 함수를 사용하여 버튼을 생성할 수 있다', () => {
    cy.get('#header').should('exist');
    cy.document()
      .then(() => {
        Button({
          buttonText: 'button',
          parentId: 'header',
          clickAction: () => alert('click action'),
          id: 'test-button',
        });
      })
      .then(() => {
        cy.get('#test-button').should('exist');
      });
  });
});
