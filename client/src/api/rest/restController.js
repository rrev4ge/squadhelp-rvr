import http from '../interceptor';

// view - actionCreator(action) -> rootSaga -> itemSaga -> api

//Chat
export const getPreviewChat = () => http.post('/chat/getPreview');
export const getDialog = (data) => http.post('/chat/getChat', data);
export const newMessage = (data) => http.post('/chat/newMessage', data);
export const changeChatFavorite = (data) => http.post('/chat/favorite', data);
export const changeChatBlock = (data) => http.post('/chat/blackList', data);
export const getCatalogList = (data) => http.post('/chat/getCatalogs', data);
export const addChatToCatalog = (data) => http.post('/chat/addNewChatToCatalog', data);
export const createCatalog = (data) => http.post('/chat/createCatalog', data);
export const deleteCatalog = (data) => http.post('/chat/deleteCatalog', data);
export const removeChatFromCatalog = (data) => http.post('/chat/removeChatFromCatalog', data);
export const changeCatalogName = (data) => http.post('/chat/updateNameCatalog', data);

//Contests
export const getCustomersContests = ({offset, limit, contestStatus}) => {
    return http.get(`/contests/customer?offset=${offset}&limit=${limit}&contestStatus=${contestStatus}`);
};
export const getActiveContests = ({offset, limit, typeIndex, contestId, industry, awardSort, ownEntries}) => {
    return http.get(`/contests/active?offset=${offset}&limit=${limit}&typeIndex=${typeIndex}&contestId=${contestId}&industry=${industry}&awardSort=${awardSort}&ownEntries=${ownEntries}`);
};
export const getContestById = ({contestId}) => {
    return http.get(`/contests/id/${contestId}`);
};
export const updateContest = data => http.put(`/contests/id/${data.contestId}`, data);
export const dataForContest = (data) => http.post('/contests/data', data);
export const getContestFile = ({fileName}) => http.get(`/contests/getFile/${fileName}`);
export const setNewOffer = data => http.post('/contests/createNewOffer', data);
export const setOfferStatus = data => http.post('/contests/setOfferStatus', data);

//Users
export const updateUser = (data) => http.post('/users/update', data);
export const registerRequest = (data) => http.post('/users/registration', data);
export const loginRequest = (data) => http.post('/users/login', data);
export const getUser = () => http.get('/users/get');
export const cashOut = (data) => http.post('/users/cashout', data);
export const payMent = (data) => http.post('/users/pay', data.formData);
export const getUserTransactions = () => http.get('/users/transactions');
export const changeMark = (data) => http.post('/users/changeMark', data);