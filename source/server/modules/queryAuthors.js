import memberProvider from './dataProvider/memberProvider'

const queryAuthors = authors => {
  if (!authors instanceof Array) throw new TypeError('Authors must be an array!');

  return authors.map(author => {
    let memberDetail;
    
    memberDetail = memberProvider.data.find(member => member.identity === author);

    if(!memberDetail) return { 
      name: author, 
      __offStaff: true
    }
    
    return {
      __fileName: memberDetail.__fileName,
      name: memberDetail.name,
      image: memberDetail.image,
      identity: memberDetail.identity,
      __offStaff: false,
    }
  });
};

export default queryAuthors