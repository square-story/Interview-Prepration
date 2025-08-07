const promise1 = Promise.resolve('one is printed')
const promise2 = Promise.reject('Two is printed')
const promise3 = Promise.reject('Three is printed')


Promise.any([promise1, promise2, promise3]).then(console.log).catch(console.error).finally(() => console.log('eyyys'))