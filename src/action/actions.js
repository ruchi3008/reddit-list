export const RECEIVE_IMGS ="RECEIVE_IMGS";
export const FILTER_IMGS = "FILTER_IMGS";

export const receiveImgs = (imgs) => ({
    type:RECEIVE_IMGS,
    imgs
});

export const fetchImgs = () => dispatch => (
        fetch('https://www.reddit.com/r/pics/.json?jsonp=')
        .then(res => res.json())
        .then(data => {
            //console.log(data.data.children);
            dispatch(receiveImgs(data.data.children))})    
);