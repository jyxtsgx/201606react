//定义了一个组件
var Person = React.createClass({
    propTypes: {
        //定义msg的属性类型为字符串，必须传入
        name: React.PropTypes.string.isRequired,
        gender: React.PropTypes.string.isRequired
    },
    //定义默认属性
    getDefaultProps:function(){
        //返回默认属性对象
        return {
            gender:'男'
        }
    },
    render:function(){
        return <div>
            姓名: {this.props.name}
            性别: {this.props.gender}
        </div>
    }
})
//属性存放着初始化不能在组件内部修改的数据
var props = {
    name:'zfpx',
    gender:'女'
}
ReactDOM.render(
    <Person name={10} />,
    document.querySelector('#app')
);
/*
 * 属性是什么
 * 属性有什么特别
 * 如何传入属性
 * 在组件内容属性如何获取 this.props.name
 **/