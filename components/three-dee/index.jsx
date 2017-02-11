import React, { Component } from 'react';
import * as THREE from 'three';
import monkeyJSON from '../../assets/meshes/monkey.json';

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
    this.scene = new THREE.Scene();
    this.setupRenderer();
    this.setupCamera()
    // const renderPasses = this.createPasses();
    // this.setupComposer(renderPasses);
    this.mesh = this.monkeyMesh()
    this.scene.add( this.mesh );
  }
  createPasses(){
    const renderPass = new THREE.RenderPass( this.scene, this.camera );
    const effectBloom = new THREE.BloomPass( 0.75 );
    return [renderPass, effectBloom]
  }
  monkeyMesh(){
    const material= new THREE.PointsMaterial( { color:0x2cfcd6, size:0.015 } )
    const loader = new THREE.JSONLoader();
    let monkeyParsed = loader.parse( monkeyJSON );
    return new THREE.Points( monkeyParsed.geometry, material);
  }
  setupCamera(){
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    this.camera.position.z = 3;
  }
  setupRenderer(){
    this.renderer = new THREE.WebGLRenderer({canvas:this.canvas, alpha:true});
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.renderer.setPixelRatio( window.devicePixelRatio );
  }
  setupComposer(renderPasses = []){
    this.composer = new THREE.EffectComposer( this.renderer );
    renderPasses.forEach(
      renderPass => {
        this.composer.addPass(renderPass)
      }
    )
  }
  animate(){
    requestAnimationFrame( this.animate );

    this.mesh.rotation.x += 0.001;
    this.mesh.rotation.y += 0.002;

    // this.renderer.clear();
    // this.composer.render( 0.01 );
    this.renderer.render( this.scene, this.camera );
  }
  render() {
    return (
      <canvas ref={ el => { this.canvas = el }} style={{position:'absolute',top:0,left:0}}></canvas>
    );
  }
}

export default ThreeDee;