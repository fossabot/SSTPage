import React from 'react'

import { Helmet } from 'react-helmet'

import './stylesheets/Livere.less'

class Livere extends React.Component{
  render(){
    return (
      <div className="livere">
        <Helmet>
          <script type="text/javascript">{`
            (function(d, s) {
              let j, e = d.getElementsByTagName(s)[0];

              if (typeof LivereTower === 'function') { return }

              j = d.createElement(s);
              j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
              j.async = true;

              e.parentNode.insertBefore(j, e);
            })(document, 'script');
          `}</script>
        </Helmet>

        <div id="lv-container" data-id="city" data-uid={this.props.uid}></div>
      </div>
    )
  }
}

export default Livere