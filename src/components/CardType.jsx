import React from 'react';

export default ({type, children, ...props}) => {

        
        
    if (type === 'warning') {
        return  <div>
                    <div>{children}</div>
                    <WarningCard {...props} />
                </div>
    }
    if (type === 'dealOffer') {
        return  <div>
                    <div>{children}</div>
                    <DealOfferCard {...props} />
                </div>
    }
    if (type === 'commonAnswer') {
        return  <div>
                    <div>{children}</div>
                    <CommonAnswerCard {...props} />
                </div>
    }
}

class WarningCard extends React.Component {
    render () {
        const {...props} = this.props;

        return <div style={{borderStyle: 'ridge', borderWidth: '10px 10px 10px 10px', borderColor: 'red'}} {...props}>
                    <h1>Warning!</h1>
                </div>
    }
}

class DealOfferCard extends React.Component {
    render () {
        const {...props} = this.props;

        return  <div style={{borderStyle: 'ridge', borderWidth: '10px 10px 10px 10px', borderColor: 'blue'}} {...props}>
                    <h1>Warning!</h1>
                </div>
    }
}

class CommonAnswerCard extends React.Component {
    render () {
        const {...props} = this.props;

        return <div style={{borderStyle: 'ridge', borderWidth: '10px 10px 10px 10px', borderColor: 'green'}} {...props}>
                    <h1>Warning!</h1>
                </div>
    }
}