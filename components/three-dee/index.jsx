import React, { Component } from 'react';
import * as THREE from 'three';
import { cloneDeep } from 'lodash'
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
    this.facePointLerpAlphas = {}
  }  
  componentDidMount() {
    // this.setup()
    // this.animate()
    // require.ensure(["../../assets/meshes/face.json"], () => {
    //   const faceJSON = require('../../assets/meshes/face.json');
    //   const loader = new THREE.JSONLoader();
    //   faceJSON.faces=[]
    //   let faceParsed = loader.parse( faceJSON );
      
    //   this.meshes.pointCloud = this.setupPoints(faceParsed.geometry)
    //   this.meshes.pointCloud.position.z = -30   
    //   this.meshes.pointCloud.position.x = 150
    //   this.meshes.pointCloud.position.y = -20
    
    //   this.meshes.pointCloud.rotateX(THREE.Math.degToRad(-10))
    //   this.meshes.pointCloud.rotateY(THREE.Math.degToRad(30))

    //   this.thrasIt();
    //   this.scene.add( this.meshes.pointCloud );
    //   setInterval(this.updatePointsTargetPositions.bind(this), 300);
    // })    
  }
  setup(){
    this.clock = new THREE.Clock();
    this.scene = new THREE.Scene();
    this.setupRenderer();
    this.setupCamera()


    const renderPasses = this.createPasses();
    this.setupComposer(renderPasses);
  }
  createPasses(){
    const renderPass = new THREE.RenderPass( this.scene, this.camera );
    renderPass.renderToScreen = true;
    return [renderPass]
  }
  setupPoints(geometry){
    const sprite = new THREE.TextureLoader().load( pointTexture );
    const material= new THREE.PointsMaterial( { color:0xa8bffa, map:sprite, size:0.7 } )

    this.geometries.face = cloneDeep(geometry)
    this.geometries.faceTargetPositions = cloneDeep(geometry)
    return new THREE.Points(  geometry, material);
  }
  setupCamera(){
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.5, 10000 );
    this.camera.position.z = 200;
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
    this.geometries.faceTargetPositions.vertices.forEach(
      (vertice, i) => {
        const orginalVector = this.geometries.face.vertices[i].clone()
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
    this.randomisePointTargets(50000, 1)
  }
  updatePointsTargetPositions(){
    this.randomisePointTargets(5, 0.1)
  }
  animatePoints( speed, delta ){
    if(this.meshes.pointCloud === undefined){
      return
    }
    this.meshes.pointCloud.geometry.vertices.forEach(
      (vertice, i) => {
        const incriment = speed * delta
        const targetVector = this.geometries.faceTargetPositions.vertices[i]
        const controlAlpha = this.facePointLerpAlphas[i] || incriment
        vertice.lerp(targetVector, controlAlpha);
        this.facePointLerpAlphas[i] = controlAlpha + incriment ? 0 : controlAlpha + incriment
      }
    )
    this.meshes.pointCloud.geometry.verticesNeedUpdate = true;
  }
  animate(){
    const delta = this.clock.getDelta(); 
    this.animatePoints( 1.5, delta );
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