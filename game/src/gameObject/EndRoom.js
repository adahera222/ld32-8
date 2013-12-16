/**
 * Created with JetBrains WebStorm.
 * User: Roushey
 * Date: 12/15/13
 * Time: 8:08 PM
 */

EndRoom = function () {
    this.holder = new THREE.Object3D();


    var materials = [
        new THREE.MeshBasicMaterial({ color:0xffffff, wireframe:false, shading: THREE.FlatShading }),
        new THREE.MeshBasicMaterial( { color: 0x000000, shading: THREE.FlatShading, wireframe: true, transparent: true } )
    ];
    
    var scale = 100
    var groupSize = 6
    var spacing = 2
    
    for(var i = 0; i < groupSize; i++) {
    	
   	 	for(var j = 0; j < groupSize; j++) {
    		
    		for( var k = 0; k < groupSize; k++) {
    				
    				//randomly replace (groupSize * 2) bricks with bombs 
    				//randomly replace (groupSize * 4) bricks with gems
    				
    				//something is wonky with positioning, it seems slightly random each time
    					//if you can, see if you can center the group in the room
    				
    				var brick = THREE.SceneUtils.createMultiMaterialObject(window.main.loader.get("assets/models/brick.js"), materials );
    				brick.scale.set(scale, scale, scale);
    				brick.position.z = i * scale * spacing - (scale * groupSize * .5 * spacing);
    				brick.position.y = 3000 + k * scale * spacing * 2;
    				brick.position.x = j * scale * spacing - (scale * groupSize * .5 * spacing);
    				this.holder.add(brick);
    			
    		}
    	}
    }
    
    
    
    
    var endWall = THREE.SceneUtils.createMultiMaterialObject( new THREE.CubeGeometry(4000,200,2000,1,1,1), materials );
    endWall.position.x = 0;
    endWall.position.y = 8000;
    endWall.position.z = 0;
    this.holder.add(endWall);
};

EndRoom.prototype = {
    init:function () {
        //TODO: init
    }
};