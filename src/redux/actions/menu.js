import { createAction } from 'redux-actions';

// 菜单栏点击
export const NAV_CLICK = 'NAV_CLICK';

let navClick = createAction(NAV_CLICK);

export { navClick };
