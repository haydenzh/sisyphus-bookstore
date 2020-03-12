const INIT_STATE = {
  sections:[
    {
      id:1,
      title:'textbooks',
      size:'large',
      imageUrl:'https://i.ibb.co/c2rp4L9/textbooks.jpg',
      linkUrl:'/shop/textbooks'
    },
    {
      id:2,
      title:'computers',
      imageUrl:'https://i.ibb.co/ZdM4S2p/computers.jpg',
      linkUrl:'/shop/computers'
    },
    {
      id:3,
      title:'history',
      imageUrl:'https://i.ibb.co/84X21zJ/history.jpg',
      linkUrl:'/shop/history'
    },
    {
      id:4,
      title:'sciences',
      imageUrl:'https://i.ibb.co/PFwd91N/sciences.jpg',
      linkUrl:'/shop/sciences'
    },
    {
      id:5,
      title:'arts',
      imageUrl:'https://i.ibb.co/jhPYMRm/arts.jpg',
      linkUrl:'/shop/arts'
    }
  ]
};

const directoryReducer = (state = INIT_STATE,action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default directoryReducer;



