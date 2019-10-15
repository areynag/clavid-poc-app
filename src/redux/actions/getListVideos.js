export const type = 'getListVideos';

const getListVideos = itemId => ({
    type,
    payload: +itemId,
});

export default getListVideos;