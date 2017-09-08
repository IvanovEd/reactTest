import {expect} from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import {SAVE_COMMENT} from  '../../src/actions/types';

describe('Comments reducer', () => {
    it('handles action with unknown type', () => {
        const actualValue = commentReducer(undefined, {});
        expect(actualValue).to.eql([]);
    });

    it('handles action of type SAVE_COMMENT', () => {
        const action = {type: SAVE_COMMENT, payload: 'new comment'}
        const actualValue = commentReducer([], action);
        expect(actualValue).to.eql(['new comment']);
    });
});
