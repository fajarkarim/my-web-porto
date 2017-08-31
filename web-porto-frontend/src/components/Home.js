import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SearchBox from './SearchBox'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      images: [
        {
          id: 1,
          name: 'My Works',
          url: 'https://png.icons8.com/code-file/dusk/64',
          route: '/works'
        },
        {
          id: 2,
          name: 'Skill',
          url: 'https://png.icons8.com/property-with-timer/dusk/64',
          route: '/skill'
        },
        {
          id: 3,
          name: 'Contact Me',
          url: 'https://png.icons8.com/linkedin/dusk/64',
          route: '/contact'
        },
        {
          id: 4,
          name: 'About Me',
          url: 'https://png.icons8.com/user/dusk/64',
          route: '/me'
        },
        {
          id: 5,
          name: 'Interest',
          url: 'https://png.icons8.com/lego-head/dusk/64',
          route: '/interest'
        },
        {
          id: 6,
          name: 'Other',
          url: 'https://png.icons8.com/swiss-army-knife/dusk/64',
          route: '/other'
        }
      ]
    }
  }
  render () {
    return (
      <section>
        <div className="container">
          <SearchBox/>
          <div className="row justify-content-around">
            {this.state.images.map((image, i) => {
              return (
                <div key={i} className="col-4 pb-md-4 pt-4">
                  <div className="row justify-content-center">
                    <div class="card-body">
                      <Link to={image.route}>
                        <img src={image.url} title={image.name} width="64" height="64"/>
                      </Link>
                      <p className="text-center">{image.name}</p>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </section>
    )
  }
}

export default Home
