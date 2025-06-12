const promise1 = Promise.resolve('helloo')
const promise2 = Promise.resolve('helllooo')
const promise3 = Promise.reject('something wrorng')


Promise.all([promise1,promise2,promise3]).then((message)=>console.log(message)).catch(err=>console.log(err))