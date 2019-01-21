import {RECEIVE_IMGS,FILTER_IMGS} from '../action/actions.js';

function reducer  (state= {},action){
    switch(action.type) {
        case RECEIVE_IMGS : return action.imgs.map(data => ({
            'thumbnailImageURL': data.data.thumbnail,
            'url':data.data.url,
            'title':data.data.title,
            'authorName':data.data.author_fullname,
            'id':data.data.id
        }));
                            
        case FILTER_IMGS :  return state;
        default : return state
    }
}

export default reducer;