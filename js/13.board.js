var Board = React.createClass({
    getInitialState(){
        return {
            messages:[]
        }
    },
    leaveMsg(){
        var value = this.refs.txtMsg.value;
        this.state.messages.push(<li className="list-group-item">{value}</li>);
        this.setState({messages:this.state.messages});
        this.refs.txtMsg.value = '';
    },
    render(){
        return <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <h1>{this.props.title}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-9">
                    <input ref="txtMsg" className="form-control" type="text"/>
                </div>
                <div className="col-xs-3">
                    <button className="btn btn-primary" onClick={this.leaveMsg}>发言</button>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-9">
                    <ul className="list-group">
                        {this.state.messages}
                    </ul>
                </div>
            </div>
        </div>
    }
});
var props = {
    title:'珠峰留言版'
}
ReactDOM.render(<Board {...props} />,document.querySelector('#app'));