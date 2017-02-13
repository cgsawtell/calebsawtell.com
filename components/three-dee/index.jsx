import React, { Component } from 'react';
import * as THREE from 'three';
import {cloneDeep} from 'lodash'
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
    this.geometries = {}
    this.meshes = {}
    this.monkeyPointLerpAlphas = {}
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
    this.meshes.monkey = this.setupMonkeyPoints()
    this.meshes.monkey.position.x = 2
    this.meshes.monkey.scale.set( 1.5, 1.5, 1.5 )
    this.meshes.monkey.rotateY(-0.5)
    this.thrasIt();
    this.scene.add( this.meshes.monkey );

    const renderPasses = this.createPasses();
    this.setupComposer(renderPasses);
    setInterval(this.updatePointsTargetPositions.bind(this), 300);
  }
  createPasses(){
    const renderPass = new THREE.RenderPass( this.scene, this.camera );
    renderPass.renderToScreen = true;
    return [renderPass]
  }
  setupMonkeyPoints(){
    const sprite = new THREE.TextureLoader().load( pointTexture );
    const material= new THREE.PointsMaterial( { color:0x2cfcd6, map:sprite, size:0.007 } )
    const loader = new THREE.JSONLoader();
    let monkeyParsed = loader.parse( monkeyJSON );
    this.geometries.monkey = cloneDeep(monkeyParsed.geometry)
    this.geometries.monkeyTargetPositions = cloneDeep(monkeyParsed.geometry)    
    return new THREE.Points(  monkeyParsed.geometry, material);
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
        this.composer.addPass(renderPass)
      }
    )
  }
  randomisePointTargets(magnatude, threshold){
    this.geometries.monkeyTargetPositions.vertices.forEach(
      (vertice, i) => {
        const orginalVector = this.geometries.monkey.vertices[i].clone()
        const dX = orginalVector.x + Math.random() * magnatude;
        const dY = orginalVector.y + Math.random() * magnatude;
        const dZ = orginalVector.z + Math.random() * magnatude;
        
        if(Math.random() < threshold){
          vertice.set(dX,dY,dZ);
        }
        else{
          vertice.set(orginalVector.x, orginalVector.y, orginalVector.z);
        }
      }
    )
  }
  thrasIt(){
    this.randomisePointTargets(50, 1)
  }
  updatePointsTargetPositions(){
    this.randomisePointTargets(0.1, 0.09)
  }
  animatePoints( delta ){
    this.meshes.monkey.geometry.vertices.forEach(
      (vertice, i) => {
        const incriment = 1 * delta
        const targetVector = this.geometries.monkeyTargetPositions.vertices[i]
        const controlAlpha = this.monkeyPointLerpAlphas[i] || incriment
        vertice.lerp(targetVector, controlAlpha);
        this.monkeyPointLerpAlphas[i] = controlAlpha + incriment ? 0 : controlAlpha + incriment
      }
    )
    this.meshes.monkey.geometry.verticesNeedUpdate = true;
  }
  animate(){
    const delta = this.clock.getDelta(); 
    this.animatePoints( delta );
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