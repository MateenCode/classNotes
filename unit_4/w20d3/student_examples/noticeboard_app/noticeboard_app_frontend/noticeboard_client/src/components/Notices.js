import React, {Component} from 'react';


class Notices extends Component {
	
    render () {
        return (
            <div>
                {this.props.data.map( notice => {
                    return  (
                        <div key={notice.id} className="notice">
                            <h3>{ notice.title }</h3>
                            <p>{ notice.content }</p>
                            <small>{notice.author }</small>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Notices;

