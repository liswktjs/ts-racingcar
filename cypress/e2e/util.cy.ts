import cypress from 'cypress';
import {
  isUndefinedOrNull,
  isValidCarNames,
  isValidGameCount,
} from '../../src/utils';

describe('util 함수 테스트', () => {
  it('undefined를 인자로 넘겨받는 경우 true를 반환한다', () => {
    expect(isUndefinedOrNull(undefined)).to.eql(true);
    expect(isUndefinedOrNull('sss')).to.eql(false);
  });

  it('isValidCarNames를 사용하여 자동차이름들 중 하나가 5글자가 넘었을 경우 false를 반환한다', () => {
    const testArray = '123456,123,11';
    expect(isValidCarNames(testArray)).to.eql(false);
  });

  it('isValidGameCount를 사용하여 유저가 입력된 값이 숫자가 아닌 경우 false를 반환한다', () => {
    const test = '1234';
    expect(isValidGameCount(test)).to.eql(false);
  });
});
