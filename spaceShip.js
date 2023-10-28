// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip{
    constructor(name, topSpeed) {
      this.name = name;
      this.topSpeed = topSpeed;
    
    }
      // Method
  accelerate() {
   console.log(`${this.name} moving to ${this.topSpeed}`)
  }

}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.
const voyager = new SpaceShip('Voyager','Warp 7');
voyager.accelerate()
const borgCube = new SpaceShip('Borg Cube','Warp 20');
borgCube.accelerate()
const ussEnterprise  = new SpaceShip('USS Enterprise','Warp 4');
ussEnterprise.accelerate()

