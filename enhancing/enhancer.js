module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  // console.log('item: ', item)
  // if(item.enhancement === 20){
  //   return { ...item }
  // }
  // item.enhancement += 1
  // console.log('item: ', { ...item } )
  // return { ...item };

  // 이 위 예제는 mutate 을 일으키기 때문에
  // mutate 이 되면, mutate 이 된 상태로
  // testing 을 하게 되면 또 오류 발생,,,
  // 이렇게 되면, 오류가 계속 발생한다

  return { 
    ...item, 
    enhancement: item.enhancement === 20 
    ? item.enhancement 
    : item.enhancement + 1
  }
}

function fail(item) {
  if(item.enhancement < 15){
    return { 
      ...item, 
      durability: item.durability - 5 
    }
  } else if(item.enhancement >= 15 && item.enhancement <= 16 ){
    return {
      ...item,
      durability: item.durability - 10
    }
  } else if(item.enhancement > 16){
    return {
      ...item,
      enhancement: item.enhancement - 1,
      durability: item.durability - 10
    }
  }
  return { ...item }
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
