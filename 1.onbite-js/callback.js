// // 콜백함수
// function add(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 3000);
// }
// add(1, 2, (value) => {
//   console.log(value);
// });

//음식 주문
function order(callback) {
  setTimeout(() => {
    const food = "피자";
    callback(food);
  }, 3000);
}

function coolDownFood(food, callback) {
  setTimeout(() => {
    const coolDownedFood = `식은 ${food} 완성`;
    callback(coolDownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

order((food) => {
  console.log(food);

  coolDownFood(food, (coolDownedFood) => {
    console.log(coolDownedFood);

    freezeFood(coolDownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
