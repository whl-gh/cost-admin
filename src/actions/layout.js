// 动作类型常量
export const ActionTypes = {
    LAYOUT_COLLAPSED: "LAYOUT_COLLAPSED",//控制侧边栏折叠状态， true 是折叠起来
    LAYOUT_THEME: "LAYOUT_THEME",//控制全局样式 有 dark & light
};
// 枚举值常量
export const EnumValue = {
    DARK: "dark",
    LIGHT: "light"
}
// 设置皮肤动作
export const setTheme = (theme)=>({
    type: ActionTypes.LAYOUT_THEME,
    value: theme
});
// 侧边栏折叠动作
export const siderToggle = ()=>({
    type: ActionTypes.LAYOUT_COLLAPSED
});