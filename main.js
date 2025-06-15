const trackX = document.getElementById("x");
const trackY = document.getElementById("y");
const car = document.getElementById("car");

const animationX = [
  {
    transform: "translateX(0%)", //1
  },
  {
    transform: "translateX(25%)", //2
  },
  {
    transform: "translateX(50%)", //3
  },
  {
    transform: "translateX(75%)", //4
  },
  {
    transform: "translateX(100%)", //5
  },
  {
    transform: "translateX(100%)", //6
  },
  {
    transform: "translateX(100%)", //7
  },
  {
    transform: "translateX(75%)", //8
  },
  {
    transform: "translateX(50%)", //9
  },
  {
    transform: "translateX(50%)", //10
  },
  {
    transform: "translateX(50%)", //11
  },
  {
    transform: "translateX(75%)", //12
  },
  {
    transform: "translateX(75%)", //13
  },
  {
    transform: "translateX(75%)", //14
  },
  {
    transform: "translateX(75%)", //15
  },
  {
    transform: "translateX(75%)", //16
  },
  {
    transform: "translateX(50%)", //17
  },
  {
    transform: "translateX(25%)", //18
  },
  {
    transform: "translateX(0%)", //19
  },
  {
    transform: "translateX(0%)", //20
  },
  {
    transform: "translateX(0%)", //21
  },
  {
    transform: "translateX(0%)", //22
  },
  {
    transform: "translateX(0%)", //23
  },
  {
    transform: "translateX(0%)", //24
  },
  {
    transform: "translateX(0%)", //25
  },
  {
    transform: "translateX(0%)", //26
  },
  {
    transform: "translateX(0%)", //27
  },
];

const animationY = [
  {
    transform: "translateY(0%)", //1
  },
  {
    transform: "translateY(0%)", //2
  },
  {
    transform: "translateY(0%)", //3
  },
  {
    transform: "translateY(0%)", //4
  },
  {
    transform: "translateY(0%)", //5
  },
  {
    transform: "translateY(12.5%)", //6
  },
  {
    transform: "translateY(25%)", //7
  },
  {
    transform: "translateY(25%)", //8
  },
  {
    transform: "translateY(25%)", //9
  },
  {
    transform: "translateY(37.5%)", //10
  },
  {
    transform: "translateY(50%)", //11
  },
  {
    transform: "translateY(50%)", //12
  },
  {
    transform: "translateY(62.5%)", //13
  },
  {
    transform: "translateY(75%)", //14
  },
  {
    transform: "translateY(87.5%)", //15
  },
  {
    transform: "translateY(100%)", //16
  },
  {
    transform: "translateY(100%)", //17
  },
  {
    transform: "translateY(100%)", //18
  },
  {
    transform: "translateY(100%)", //19
  },
  {
    transform: "translateY(87.5%)", //20
  },
  {
    transform: "translateY(75%)", //21
  },
  {
    transform: "translateY(62.5%)", //22
  },
  {
    transform: "translateY(50%)", //23
  },
  {
    transform: "translateY(37.5%)", //24
  },
  {
    transform: "translateY(25%)", //25
  },
  {
    transform: "translateY(12.5%)", //26
  },
  {
    transform: "translateY(0%)", //27
  },
];

const animationCar = [
  {
    transform: "rotate(90deg)", //1
  },
  {
    transform: "rotate(90deg)", //2
  },
  {
    transform: "rotate(90deg)", //3
  },
  {
    transform: "rotate(90deg)", //4
  },
  {
    transform: "rotate(180deg)", //5
  },
  {
    transform: "rotate(180deg)", //6
  },
  {
    transform: "rotate(270deg)", //7
  },
  {
    transform: "rotate(270deg)", //8
  },
  {
    transform: "rotate(180deg)", //9
  },
  {
    transform: "rotate(180deg)", //10
  },
  {
    transform: "rotate(90deg)", //11
  },
  {
    transform: "rotate(180deg)", //12
  },
  {
    transform: "rotate(180deg)", //13
  },
  {
    transform: "rotate(180deg)", //14
  },
  {
    transform: "rotate(180deg)", //15
  },
  {
    transform: "rotate(270deg)", //16
  },
  {
    transform: "rotate(270deg)", //17
  },
  {
    transform: "rotate(270deg)", //18
  },
  {
    transform: "rotate(360deg)", //19
  },
  {
    transform: "rotate(360deg)", //20
  },
  {
    transform: "rotate(360deg)", //21
  },
  {
    transform: "rotate(360deg)", //22
  },
  {
    transform: "rotate(360deg)", //23
  },
  {
    transform: "rotate(360deg)", //24
  },
  {
    transform: "rotate(360deg)", //25
  },
  {
    transform: "rotate(450deg)", //26
  },
];

const timing = {
  duration: 6000,
  iterations: Infinity,
};

trackX.animate(animationX, timing);
trackY.animate(animationY, timing);
car.animate(animationCar, timing);
