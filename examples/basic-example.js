// This example uses the p5.js library

let sceneManager = new SceneManager([
  new Scene(new Linked.List(), 
              function(manager, scene) {
       
              },
              function(manager, scene) {

              }
           )
], 0);

sceneManager.getCurrentScene().objects.push(new GameObject(
  function(manager, scene, object) {
  },
  function (manager, scene, object) {
    rect(100, 100, 100, 100);
  }
));

function setup() {
  createCanvas(400, 400);
  sceneManager.start();
}

function draw() {
  background(220);
  sceneManager.update();
}
