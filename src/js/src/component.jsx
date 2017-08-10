import React from 'react';
import ReactDOM from 'react-dom';

export class SHOPPING_LIST_ITEM extends React.Component
{
    render()
    {
        return <div>name: {this.props.name}</div>
    }
}

export class SHOPPING_LIST extends React.Component
{
    render()
    {
        return <div>
                <h1>title: {this.props.vars.title}</h1>
                <SHOPPING_LIST_ITEM name={this.props.vars.item0} />
            </div>;
    }
}
