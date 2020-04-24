import React from 'react';

export default ({type, children, ...props}) => {

    if (type === 'basic') {
        return  <div>
                    <div>{children}</div>
                    <BasicCard {...props} />
                </div>
    }
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


class BasicCard extends React.Component {
    render () {
        const {...props} = this.props;

        return <div style={{borderStyle: 'ridge', borderWidth: '10px 10px 10px 10px'}} {...props}>
                    <h2>Basic Card</h2>
               </div>
    }
}

class WarningCard extends React.Component {
    render () {
        const {...props} = this.props;

        return <div style={{borderStyle: 'ridge', borderWidth: '10px 10px 10px 10px', borderColor: 'red'}} {...props}>
                    <h2>Warning</h2>
               </div>
    }
}

class DealOfferCard extends React.Component {
    render () {
        const {...props} = this.props;

        return  <div style={{borderStyle: 'ridge', borderWidth: '10px 10px 10px 10px', borderColor: 'blue'}} {...props}>
                    <h1>Deal Offer</h1>
                </div>
    }
}

class CommonAnswerCard extends React.Component {
    render () {
        const {...props} = this.props;

        return <div style={{borderStyle: 'ridge', borderWidth: '10px 10px 10px 10px', borderColor: 'green'}} {...props}>
                    <h1>Common Answer</h1>
                </div>
    }
}