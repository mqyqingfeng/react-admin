import { createAction } from 'redux-actions';

// 选择产品
export const SELECT_PRODUCT = 'SELECT_PRODUCT';

let selectProduct = createAction(SELECT_PRODUCT);

export { selectProduct };
