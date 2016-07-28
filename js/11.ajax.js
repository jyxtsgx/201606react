var Suggestion = React.createClass({
    getInitialState(){
      return {content:[]};
    },
    handleChange(event){
        var keyword = event.target.value;
        $.ajax({
            url:'http://www.baidu.com/su',
            method:'get',
            jsonp:'cb',//指定后台用来接收函数名的查询字符串参数值
            dataType:'jsonp',//告诉jquery如何处理响应xt
            context:this,
            data:{wd:keyword},
            success:function(data){
                var result = data.s;
                var lis = result.map(function(item){
                    return <li className="list-group-item">{item}</li>
                })
                this.setState({content:lis});
            }
        })
    },
    render(){
        return <div>
            <input className="form-control" type="text" onChange={this.handleChange}/><br/>
            <ul className="list-group">
                {this.state.content}
            </ul>
        </div>
    }
});

ReactDOM.render(<Suggestion/>,document.querySelector('#app'));