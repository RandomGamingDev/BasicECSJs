class SceneManager {
  constructor(scenes, currentScene) {
    this.scenes = scenes;
    this.currentScene = currentScene;
  }
  
  getCurrentScene() {
    return this.scenes[this.currentScene];
  }
  
  start(scene = this.getCurrentScene()) {
    scene.start(this);
  }
  
  update(scene = this.getCurrentScene()) {
    scene.update(this);
  }
}

class Scene {
  constructor(objects = new Linked.List(), startScene = () => {}, updateScene = () => {}) {
    this.objects = objects;
    this.startScene = startScene;
    this.updateScene = updateScene;
  }
  
  startObjects(manager) {
    for (let i = this.objects.head; i != undefined; i = i.next)
      i.data.start(manager, this, i.data);
  }

  updateObjects(manager) {
    for (let i = this.objects.head; i != undefined; i = i.next)
      i.data.update(manager, this, i.data);
  }
  
  start(manager) {
    this.startScene(manager, this);
    this.startObjects(manager);
  }
  
  update(manager) {
    this.updateScene(manager, this);
    this.updateObjects(manager);
  }
}

class GameObject {
  constructor(start = () => {}, update = () => {}) {
    this.start = start;
    this.update = update;
  }
}
