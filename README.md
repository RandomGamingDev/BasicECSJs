# BasicECSJs
A basic javascript ECS system, with SceneManagers, Scenes and GameObjects with their own Start and Update functions. 

Simply spawn a `SceneManager` with an Array of `Scene`s and the integer/id pointing to the active scene. Create `Scene`s by specifying a `Linked.List` of `GameObject`s and then specifying the `sceneStart` and `sceneUpdate` functions. Then just push whatever `GameObject`s you want to the `Linked.List` used to store all the GameObjects by the `Scene`. When creating the `GameObject` just specify its `start` and `update` functions. The way the system works is that they all have their own `start` and `update` functions, with the calls cascading down from the `SceneManager` to its `Scene`s to its `GameObject`s allowing for a easy way to manage your game and a easy framework to build on top of.

This library depends on the Linked List implementation from https://github.com/RandomGamingDev/OneWayLinkedListLibJs. To use it you can simply include https://cdn.jsdelivr.net/gh/RandomGamingDev/OneWayLinkedListLibJs/list.js in your HTML file! If you want to you can also just download the file and include it in your HTML file that way.

To this library you can simply include https://cdn.jsdelivr.net/gh/RandomGamingDev/BasicECSJs/ecs.js in your HTML file! If you want to you can also just download the file and include it in your HTML file that way.

btw stuff updates so remember to specify a version/commit for your library if you want to use a link and don't want your code to automatically update to the newest version of the library
