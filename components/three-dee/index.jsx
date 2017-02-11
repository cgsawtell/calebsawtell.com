import React, { Component } from 'react';
import * as THREE from 'three';
class ThreeDee extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this)
  }
  
  componentDidMount() {
    this.setup()
    this.animate()
  }
  setup(){
    this._scene = new THREE.Scene();
    this._camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    this._camera.position.z = 1000;

    this._geometry = new THREE.BoxGeometry( 200, 200, 200 );
    this._material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

    this._mesh = new THREE.Mesh( this._geometry, this._material );
    this._scene.add( this._mesh );

    this._renderer = new THREE.WebGLRenderer({canvas:this._canvas,alpha:true});
    this._renderer.setSize( window.innerWidth, window.innerHeight );
  }
  animate(){
    requestAnimationFrame( this.animate );

    this._mesh.rotation.x += 0.01;
    this._mesh.rotation.y += 0.02;

    this._renderer.render( this._scene, this._camera );

  }
  render() {
    return (
      <canvas ref={ el => { this._canvas = el }} style={{position:'absolute',top:0,left:0}}></canvas>
    );
  }
}

export default ThreeDee;