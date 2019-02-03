import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery';
import TimelineMax from 'gsap/TimelineMax';
import { Power4 } from 'gsap';
import { actions } from '../../common/ducks/index';
import Container from '../../common/components/container';
import '../../../assets/js/magicwall';
import pic from '../../../assets/img/pic1.jpg';
import './galleryPage.css';


class GalleryPage extends Component {
  elements = {
    background: null,
    container: null,
    button: null,
    h2: null,
  };

  animations = {
    init: null,
    button: null,
    h2: null,
  };

  componentDidMount() {
    this.handleAnimations();
    this.handleGallery();
  }

  prepareAnimations = () => {
    this.initAnimation = new TimelineMax().to(this.elements.container, 3, {
      immediateRender: false,
      opacity: 1,
      ease: Power4.linear,
    }).pause();
  };

  handleAnimations = () => {
    this.prepareAnimations();
    if (!this.props.app.isLoading) {
      console.log('starting default animation...');
      this.initAnimation.play();
    }
  };

  handleGallery = () => {
    $('.magicwall').magicWall({
      maxItemHeight: 300,
      maxItemWidth: 300,
      delay: 400,
      preloadBeforeSwitch: true,
      loadingMode: 'chain',
      pauseOnHover: 'item',
      animations: 'flipY,rollOutX,-rollOutX,rollOutY,-rollOutY,slideColumn,-slideColumn,slideRow,-slideRow,fade',
      duration: 800,

    });

    $('.colorbox').colorbox({
      maxWidth: '90%',
      maxHeight: '90%',
      onOpen() {
        $('.magicwall').magicWall('stop');
      },

      onClosed() {
        $('.magicwall').magicWall('start');
      },
    });
  };

  assignRef = (ref, element) => {
    this.elements[element] = ref;
  };

  render() {
    return (
      <Fragment>
        <Container
          delay={this.await}
          styleClass="home-page"
          assignRef={this.assignRef}
        >
          <div className="magicwall">
            <ul className="magicwall-grid">
              <li data-thumb={pic} />
              <li data-thumb={pic} />
              <li data-thumb={pic} />
              <li data-thumb={pic} />
              <li data-thumb={pic} />
              <li data-thumb={pic} />
              <li data-thumb={pic} />
              <li data-thumb={pic} />
              <li data-thumb={pic} />
              <li data-thumb={pic} />
              <li data-thumb={pic} />
              <li data-thumb={pic} />
              <li data-thumb={pic} />
              <li data-thumb={pic} />
              <li data-thumb={pic} />
              <li data-thumb={pic} />
            </ul>
          </div>
        </Container>
        {/* <Background assignRef={this.assignRef} /> */}
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  app: state.app,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);
