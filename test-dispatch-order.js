import dispatcher from "./js/stores/AppDispatcher";

let tokenC = dispatcher.register((action) => {
  console.log("C", action);
});

let tokenA = dispatcher.register((action) => {
  dispatcher.waitFor([tokenB]);
  console.log("A", action);
});

let tokenB = dispatcher.register((action) => {
  dispatcher.waitFor([tokenC]);
  console.log("B", action);
});


dispatcher.dispatch({type: "test"});