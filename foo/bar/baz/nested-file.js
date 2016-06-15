import {getNumber} from 'foo/one-level-deep-file';

export const getAddedNumber = () => {
    return getNumber() + 2;
};