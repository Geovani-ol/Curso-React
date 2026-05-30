const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //! Yo quiero mi dinero !!
    reject("Mi amigo se perdió");
    // resolve(200);
  }, 2000); // 2 segundos
});

myPromise
  .then((myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
  })
  .catch((reason) => {
    console.warn(reason);
  })
  .finally(() => {
    console.log("Pues a seguir mi vida");
  });
