const user = {  
    nested: { 
      a: 'foo',
      b: [
        'first item',
        'second item',
        'third item',
      ]
    }
  }
  
  const {  
    nested: {
      a,
      b: [first, , third]
    }
  } = user
  
  console.log({ a, first, third })  
  // {
  //   a: 'foo',
  //   first: 'first item',
  //   third: 'third item'
  // }