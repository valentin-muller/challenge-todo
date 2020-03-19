import React, { Component } from 'react';


export default class TaskBox extends Component {

  // state = {
  //   quantity: 1
  // }

    render() {
        return (
          <div className="feed">
            <article className="post">
       
              <div className="">
                <div className="">
                  <p>
                    <strong>{this.props.title}</strong> <br />
                    <small>{this.props.body}</small>
                  </p>
                </div>
              </div>

              {/* <div className="media-right">
                  <div className="control">
                    <button className="button is-info">+</button>
                  </div> */}
              {/* </div> */}
              
            </article>
          </div>
        );
    }
}
