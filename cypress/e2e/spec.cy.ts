import cypress from 'cypress';
import { DOM_ID } from '../../src/constant/index';

describe('요구사항에 따라 앱이 동작할 수 있는지 테스트 한다', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('자동차 이름을 5글자를 초과 입력했을 경우 alert를 유저에게 보여준다', () => {
    cy.get(`#${DOM_ID.gameNameInput}`).type('123456');
    cy.get(`#${DOM_ID.gameNameButton}`).click();
    cy.on('window:alert', (text) => {
      expect(text).to.equal('각각의 자동차 이름은 5글자 이하여야 합니다');
    });
  });

  it('유저가 게임 횟수로 정수를 입력하지 않았을 경우 alert를 보여준다', () => {
    cy.get(`#${DOM_ID.gameCountInput}`).type('sss');
    cy.get(`#${DOM_ID.gameCountButton}`).click();
    cy.on('window:alert', (text) => {
      expect(text).to.equal('게임 횟수는 정수로 입력해주세요');
    });
  });

  it('유저가 자동차 이름과 게임 횟수를 올바르게 입력한 경우 게임 결과를 확인할 수 있다', () => {
    cy.get(`#${DOM_ID.gameNameInput}`).type('12345,123,1234');
    cy.get(`#${DOM_ID.gameNameButton}`).click();
    cy.get(`#${DOM_ID.gameCountInput}`).type('3');
    cy.get(`#${DOM_ID.gameCountButton}`).click();
    cy.get(`#${DOM_ID.gameResult}`).should('be.visible');
  });

  it('유저가 자동차 이름과 게임 횟수를 올바르게 입력한 경우 자동차 이름을 게임 결과 내에서 확인 할 수 있다', () => {
    const carNames = '12345,123,1234';

    cy.get(`#${DOM_ID.gameNameInput}`).type(carNames);
    cy.get(`#${DOM_ID.gameNameButton}`).click();
    cy.get(`#${DOM_ID.gameCountInput}`).type('3');
    cy.get(`#${DOM_ID.gameCountButton}`).click();

    carNames.split(',').forEach((item) => {
      cy.get(`.car-element`).contains(item).should('be.visible');
    });
  });

  it('유저가 다시 시작하기 버튼을 클릭했을 경우 게임 결과 영역이 사라진다', () => {
    cy.get(`#${DOM_ID.gameNameInput}`).type('12345,123,1234');
    cy.get(`#${DOM_ID.gameNameButton}`).click();
    cy.get(`#${DOM_ID.gameCountInput}`).type('3');
    cy.get(`#${DOM_ID.gameCountButton}`).click();
    cy.get(`#${DOM_ID.gameRestartButton}`).click();

    cy.get(`#${DOM_ID.gameResult}`).should('not.be.visible');
  });
});
