import React, { Component } from 'react';
import * as THREE from 'three';
import monkeyJSON from '../../assets/meshes/monkey.json';
import 'imports?THREE=three!exports?THREE.EffectComposer!../../node_modules/three/examples/js/postprocessing/EffectComposer.js'
import 'imports?THREE=three!exports?THREE.ShaderPass!../../node_modules/three/examples/js/postprocessing/ShaderPass.js'
import 'imports?THREE=three!exports?THREE.RenderPass!../../node_modules/three/examples/js/postprocessing/RenderPass.js'
import 'imports?THREE=three!exports?THREE.ConvolutionShader!../../node_modules/three/examples/js/shaders/ConvolutionShader.js'
import 'imports?THREE=three!exports?THREE.CopyShader!../../node_modules/three/examples/js/shaders/CopyShader.js'
import 'imports?THREE=three!exports?THREE.BloomPass!../../node_modules/three/examples/js/postprocessing/BloomPass.js'
import pointTexture from '../../assets/textures/point.png'

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
    this.clock = new THREE.Clock();
    this.scene = new THREE.Scene();
    this.setupRenderer();
    this.setupCamera()
    this.mesh = this.monkeyMesh()
    this.mesh.position.x = -2
    this.mesh.scale.set( 2, 2, 2 )
    this.scene.add( this.mesh );

    const renderPasses = this.createPasses();
    this.setupComposer(renderPasses);
  }
  createPasses(){
    const renderPass = new THREE.RenderPass( this.scene, this.camera );
    renderPass.renderToScreen = true;
    return [renderPass]
  }
  monkeyMesh(){
    const sprite = new THREE.TextureLoader().load( pointTexture );
    const material= new THREE.PointsMaterial( { color:0x2cfcd6, map:sprite, size:0.01 } )
    const loader = new THREE.JSONLoader();
    let monkeyParsed = loader.parse( monkeyJSON );
    return new THREE.Points( monkeyParsed.geometry, material);
  }
  setupCamera(){
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.5, 10000 );
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
        console.log(renderPass);        
        this.composer.addPass(renderPass)
      }
    )
  }
  animate(){
    const delta = this.clock.getDelta(); 
    this.mesh.rotation.y += 0.002;
    this.composer.render( delta );
    requestAnimationFrame( this.animate );
  }
  render() {
    return (
      <canvas ref={ el => { this.canvas = el }} style={{position:'absolute',top:0,left:0}}></canvas>
    );
  }
}

export default ThreeDee;