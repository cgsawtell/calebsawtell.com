import React from 'react';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { Grid, Span, Breakpoint } from 'react-responsive-grid';
import styles from './navigation.css';
import { rhythm } from '../../utils/typography'
import cross from '../../assets/cross.svg'

class Navigation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.showMobileOverlay = this.showMobileOverlay.bind(this)
    this.hideMobileOverlay = this.hideMobileOverlay.bind(this)    
    this.state = {
      showMenu:false
    }
  }
  showMobileOverlay(){
    this.setState({showMenu:true})
  }
  hideMobileOverlay(){
    this.setState({showMenu:false})
  }
 
  render(){
    const {navItems, pathname } = this.props
    return (
      <div 
        className={"navigation-container"}
        style={{right:rhythm(3/4)}}
      >
      <Breakpoint minWidth={700}>
        <div>
          {
            <NavItemContainer navItems={navItems} pathname={pathname} />
          }
        </div>
      </Breakpoint>
      <Breakpoint maxWidth={700}>
        <div>
          <p className={"navigation-menu-button"} onClick={this.showMobileOverlay}>Menu</p>
        </div>
      </Breakpoint>
      {this.state.showMenu ? <MobileOverlay hideMobileOverlay={this.hideMobileOverlay} navItems={navItems}/> : ""}
      </div>
    );
  }
}

const NavItemContainer = ( {navItems, pathname = '', containerClassName = '', onClickFunction = () => {} } ) =>{
  return (
  <div className={containerClassName}>
    {
      navItems.map(
        navItem => (
          <Link 
            className={"navigation-link"}
            key={navItem.title}
            style={{fontWeight: pathname === navItem.pathname ? 700 : 400}}
            to={prefixLink(navItem.pathname)}
            onClick={onClickFunction}
          >
            {navItem.title}
          </Link>
        )
      )
    }
  </div>

  )
}

class MobileOverlay extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.updateWindowHeight = this.updateWindowHeight.bind(this)
    this.debouncedWindowUpdate = this.debouncedWindowUpdate.bind(this)
    this.fadeOutMobileOverlay = this.fadeOutMobileOverlay.bind(this)
    this.state = {
      windowInnerHeight:window ? window.innerHeight : 0,
      animationName:'fade-in'
    }
  }
  updateWindowHeight(){
    this.setState({windowInnerHeight:window.innerHeight});
  }
  debouncedWindowUpdate(){
    debounce(this.updateWindowHeight,100)
  }
  componentDidMount(){
    window.addEventListener('resize',this.updateWindowHeight)
  }
  componentWillUnmount(){
    window.removeEventListener('resize',this.updateWindowHeight)
  }
  fadeOutMobileOverlay(){
    this.setState({animationName:'fade-out'})
  }
  render() {
    const {renderNavItems, navItems, hideMobileOverlay} = this.props;
    return (
      <div className={"mobile-navigation-overlay"}
        onAnimationEnd={ () => { if(this.state.animationName === "fade-out") { hideMobileOverlay() } }}
        style={{height:this.state.windowInnerHeight,animationName:this.state.animationName}}>
        <img className={"close-button"} onClick={this.fadeOutMobileOverlay} src={cross}/>
        <NavItemContainer navItems={navItems} containerClassName={'mobile-navigation-overlay-links'} onClickFunction={this.fadeOutMobileOverlay} />
      </div>
    )
  }
}



export default Navigation;