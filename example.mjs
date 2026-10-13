// 独立示例，主题只影响显示信息。
const themes = new Map([
  ['night', {background: '#241f42', accent: '#e6bd64'}],
  ['city', {background: '#277ac4', accent: '#ffe276'}]
]);
export function makeView(games, themeId) {
  const theme = themes.get(themeId) ?? themes.get('night');
  const ids = new Set();
  const items = games.map(game => {
    if (!game || typeof game.id !== 'string' || !game.id ||
        typeof game.name !== 'string' || !game.name)
      throw new TypeError('玩法信息不完整');
    if (ids.has(game.id)) throw new Error('玩法标识重复');
    ids.add(game.id);
    return {id: game.id, name: game.name};
  });
  return {theme: {...theme}, items};
}
