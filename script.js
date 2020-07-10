function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      tasks: ['task 1', 'task 2', 'task 3'] });_defineProperty(this, "handleSubmit",


    task => {
      this.setState({ tasks: [...this.state.tasks, task] });
    });_defineProperty(this, "handleDelete",

    index => {
      const newArr = [...this.state.tasks];
      newArr.splice(index, 1);
      this.setState({ tasks: newArr });
    });}

  render() {
    return (
      React.createElement("div", { className: "wrapper" },
      React.createElement("div", { className: "card frame" },
      React.createElement(Header, { numTodos: this.state.tasks.length }),
      React.createElement(TodoList, { tasks: this.state.tasks, onDelete: this.handleDelete }),
      React.createElement(SubmitForm, { onFormSubmit: this.handleSubmit }))));



  }}



class SubmitForm extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    { term: '' });_defineProperty(this, "handleSubmit",

    e => {
      e.preventDefault();
      if (this.state.term === '') return;
      this.props.onFormSubmit(this.state.term);
      this.setState({ term: '' });
    });}

  render() {
    return (
      React.createElement("form", { onSubmit: this.handleSubmit },
      React.createElement("input", {
        type: "text",
        className: "input",
        placeholder: "Enter Item",
        value: this.state.term,
        onChange: e => this.setState({ term: e.target.value }) }),

      React.createElement("button", { className: "button" }, "Add TODO")));


  }}



const Header = props => {
  return (
    React.createElement("div", { className: "card-header" },
    React.createElement("h1", { className: "card-header-title header" },
    props.numTodos > 0 ? `You Have ${props.numTodos} TODOs` : `Why Not Add Some TODOs?`)));



};


const TodoList = props => {
  const todos = props.tasks.map((todo, index) => {
    return React.createElement(Todo, { content: todo, key: index, id: index, onDelete: props.onDelete });
  });
  return (
    React.createElement("div", { className: "list-wrapper" },
    todos));


};

const Todo = props => {
  return (
    React.createElement("div", { className: "list-item" },
    props.content,
    React.createElement("button", { class: "delete is-pulled-right", onClick: () => {props.onDelete(props.id);} })));


};

ReactDOM.render(
React.createElement(App, null),
document.querySelector('#root'));