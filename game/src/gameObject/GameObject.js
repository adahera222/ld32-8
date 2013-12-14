function GameObject(geometry, color, wireColor) {
    this.wireColor = wireColor ? wireColor : 0xffffff;
    this.color = color ? color : 0xffffff;

    this.pos = new THREE.Vector3(0, 0, 0);
    this.vel = new THREE.Vector3(0, 0, 0);
    this.rotation = new THREE.Vector3(0, 0, 0);

    //this.solidMat = new THREE.MeshPhongMaterial( { color: this.color, transparent:true, shading: THREE.FlatShading  } );
    this.wireMat = new THREE.MeshBasicMaterial({ color:this.wireColor, wireframe:false, shading: THREE.FlatShading  });

    //this.wireMat.opacity = 0.75;
    //this.wireMat.blending = THREE.AdditiveAlphaBlending;

   // this.solid = new THREE.Mesh(geometry, this.solidMat);
    this.wire = new THREE.Mesh(geometry, this.wireMat);
    //this.wire.scale = new THREE.Vector3(1.05, 1.05, 1.05);

    this.holder = new THREE.Object3D();
    this.holder.add(this.wire);
    //this.holder.add(this.solid);



    this.alive = true;
}

GameObject.prototype.update = function (dt) {

    if(!dt) dt = 0;

    this.pos.x += this.vel.x * dt * this.timeMult;
    this.pos.y += this.vel.y * dt * this.timeMult;
    this.pos.z += this.vel.z * dt * this.timeMult;

    this.holder.position = this.pos;

    //this.solid.rotation = this.rotation;
    this.wire.rotation = this.rotation;
};

GameObject.prototype.dispose = function () {
    //TODO: dispose meshes and materials
};