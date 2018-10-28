import React, { Component } from 'react';
import './logo.css';
import { TimelineMax } from 'gsap';
import DrawSVGplugin from '../../assets/js/DrawSVGPlugin';

class logo extends Component {
  tl = null;

  tl2 = null;

  ref = null;

  componentDidMount() {
    if (this.props.animate) this.handleAnimation();
  }

  handleAnimation = () => {
    const lines = this.ref.querySelectorAll('#layer1 > polyline');
    const lines2 = this.ref.querySelectorAll('#layer2 > polyline');

    this.tl = new TimelineMax();

    this.tl2 = new TimelineMax({ yoyo: true, repeat: -1 });

    const interval = 0.4;

    this.tl.to(lines, 0, { drawSVG: '0%' });
    this.tl.to(lines2, 0, { drawSVG: '0%', strokeOpacity: 1 });
    this.tl.to(lines2[0], 0, { drawSVG: '1%' });

    for (let i = 0; i < lines.length; i++) {
      const size = lines[i].points[2].x - lines[i].points[0].x;
      if (size > 45) {
        this.tl.to(lines[i], interval, { drawSVG: '100%' })
          .to(lines2[i], interval, { drawSVG: '99% 100%' }, `-=${interval}`);
        if (i === 5) {
          this.tl.to(lines[i], interval / 2, { drawSVG: '0%' })
            .to(lines2[i], interval / 2, { drawSVG: '0% 1%' }, `-=${interval / 2}`)
            .to(lines[i], interval, { drawSVG: '100%', stroke: '#e4b723' })
            .to(lines2[i], interval, { drawSVG: '99% 100%' }, `-=${interval}`);
        }
      } else if (size > 20) {
        this.tl.to(lines[i], interval / 2, { drawSVG: '100%' })
          .to(lines2[i], interval / 2, { drawSVG: '99% 100%' }, `-=${interval / 2}`);
      } else {
        this.tl.to(lines[i], interval / 3, { drawSVG: '100%' })
          .to(lines2[i], interval / 3, { drawSVG: '99% 100%' }, `-=${interval / 3}`);
      }
    }

    this.tl.to([lines[10], lines[11]], interval / 1.5, { y: -32, scale: 1.5 });
    this.tl.to([lines[10], lines[11]], interval / 1.5, { y: -84, scale: 1 });
    this.tl.to([lines[6], lines[7], lines[8], lines[9]], interval / 0.75, { y: 42 }, `-=${interval / 0.75}`);


    this.tl.play();
    // this.tlfromTo(circle, 0.3,{x:"0"}, {x:"33"}, '-=0.9')
    // .to(circle, 0.3, {x:"66"}, '-=0.6')
    // .to(circle, 0.3, {x:"100"}, '-=0.3').pause()

    this.tl2.fromTo(lines2, 0.2, { 'stroke-opacity': 1 }, { 'stroke-opacity': 0.5 });

    this.tl.restart();
    this.tl2.restart();
  };

  render() {
    return (
      <a href="/" className="logo" style={{ width: this.props.width, height: this.props.height, opacity: this.props.opacity }}>
        <svg viewBox="0 0 196 200" width="100%" height="auto" id="bgSVG" ref={(ref) => { this.ref = ref; }}>
          <title>t logo</title>
          <g style={{ zIndex: 0 }}>
            <title>Layer 1</title>
            <g stroke="null" id="layer1">
              <polyline
                stroke="#94da00"
                points="15.277774810791016,14.981477737426758 45.277774810791016,14.981477737426758 75.27777481079102,14.981477737426758 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block1"
              />
              <polyline
                stroke="#00a882"
                points="109.77777481079102,14.981477737426758 122.77777481079102,14.981477737426758 135.77777481079102,14.981477737426758 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block2"
              />
              <polyline
                stroke="#ff3800"
                points="170.27777481079102,15.981477737426758 175.77777481079102,15.981477737426758 181.27777481079102,15.981477737426758 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block3"
              />
              <polyline
                stroke="#00bf6e"
                points="15.777774810791016,57.98147773742676 23.277774810791016,57.98147773742676 30.777774810791016,57.98147773742676 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block4"
              />
              <polyline
                stroke="#ffa800"
                points="65.77777481079102,57.98147773742676 78.77777481079102,57.98147773742676 91.77777481079102,57.98147773742676 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block5"
              />
              <polyline
                stroke="#94da00"
                points="124.77777481079102,57.98147773742676 152.27777481079102,57.98147773742676 179.77777481079102,57.98147773742676 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block6"
              />
              <polyline
                stroke="#b3b3b0"
                points="68.77777481079102,99.98147773742676 69.77777481079102,99.98147773742676 70.77777481079102,99.98147773742676 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block7"
              />
              <polyline
                stroke="#ff402c"
                points="104.27777481079102,99.98147773742676 114.27777481079102,99.98147773742676 124.27777481079102,99.98147773742676 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block8"
              />
              <polyline
                stroke="#00bf6e"
                points="70.27777481079102,142.9814853668213 80.77777481079102,142.9814853668213 91.27777481079102,142.9814853668213 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block9"
              />
              <polyline
                stroke="#b3b3b0"
                points="124.77777481079102,142.9814853668213 124.27777481079102,142.9814853668213 123.77777481079102,142.9814853668213 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block10"
              />
              <polyline
                stroke="#b3b3b0"
                points="74.77777481079102,184.9814853668213 72.77777481079102,184.9814853668213 70.77777481079102,184.9814853668213 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block11"
              />
              <polyline
                stroke="#00b08a"
                points="111.27777481079102,184.9814853668213 117.27777481079102,184.9814853668213 123.27777481079102,184.9814853668213 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block12"
              />
            </g>
          </g>
          <g style={{ zIndex: 1 }}>
            <title>Layer 2</title>
            <g stroke="null" id="layer2">
              <polyline
                stroke="white"
                points="15.277774810791016,14.981477737426758 45.277774810791016,14.981477737426758 75.27777481079102,14.981477737426758 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block1"
                strokeOpacity="0"
              />
              <polyline
                stroke="white"
                points="109.77777481079102,14.981477737426758 122.77777481079102,14.981477737426758 135.77777481079102,14.981477737426758 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block2"
                strokeOpacity="0"
              />
              <polyline
                stroke="white"
                points="170.27777481079102,15.981477737426758 175.77777481079102,15.981477737426758 181.27777481079102,15.981477737426758 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block3"
                strokeOpacity="0"

              />
              <polyline
                stroke="white"
                points="15.777774810791016,57.98147773742676 23.277774810791016,57.98147773742676 30.777774810791016,57.98147773742676 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block4"
                strokeOpacity="0"

              />
              <polyline
                stroke="white"
                points="65.77777481079102,57.98147773742676 78.77777481079102,57.98147773742676 91.77777481079102,57.98147773742676 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block5"
                strokeOpacity="0"

              />
              <polyline
                stroke="white"
                points="124.77777481079102,57.98147773742676 152.27777481079102,57.98147773742676 179.77777481079102,57.98147773742676 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block6"
                strokeOpacity="0"

              />
              <polyline
                stroke="white"
                points="68.77777481079102,99.98147773742676 69.77777481079102,99.98147773742676 70.77777481079102,99.98147773742676 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block7"
                strokeOpacity="0"

              />
              <polyline
                stroke="white"
                points="104.27777481079102,99.98147773742676 114.27777481079102,99.98147773742676 124.27777481079102,99.98147773742676 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block8"
                strokeOpacity="0"

              />
              <polyline
                stroke="white"
                points="70.27777481079102,142.9814853668213 80.77777481079102,142.9814853668213 91.27777481079102,142.9814853668213 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block9"
                strokeOpacity="0"

              />
              <polyline
                stroke="white"
                points="124.77777481079102,142.9814853668213 124.27777481079102,142.9814853668213 123.77777481079102,142.9814853668213 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block10"
                strokeOpacity="0"

              />
              <polyline
                stroke="white"
                points="74.77777481079102,184.9814853668213 72.77777481079102,184.9814853668213 70.77777481079102,184.9814853668213 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block11"
                strokeOpacity="0"

              />
              <polyline
                stroke="white"
                points="111.27777481079102,184.9814853668213 117.27777481079102,184.9814853668213 123.27777481079102,184.9814853668213 "
                strokeWidth="28"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                id="block12"
                strokeOpacity="0"

              />
            </g>
          </g>
        </svg>
      </a>
    );
  }
}

export default logo;
