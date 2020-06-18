import React from "react";
import "./App.css";
import { ViewNotes } from "./ViewNotes";

/*
[
  {
    text: "Open Source Programming Club",
    active: true,
  },
  {
    text: "Introduction to React",
    active: true,
  }
]
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note_entry: "",
    };
    this.addNoteText = this.addNoteText.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  componentDidMount() {
    const mock_api_result = [
      {
        text: "Open Source Programming Club",
        active: true,
      },
      {
        text: "Introduction to React",
        active: true,
      },
    ];
    this.setState((state, _props) => ({
      notes: state.notes.concat(mock_api_result),
    }));
  }

  addNoteText = (event) => {
    event.preventDefault();
    // Note text will be added
    this.setState({ note_entry: event.target.value });
  };

  changeActiveStatus = (id) => {
    this.setState((state, _props) => ({
      notes: state.notes
        .slice(0, id)
        .concat({
          text: state.notes[id].text,
          active: !state.notes[id].active,
        })
        .concat(state.notes.slice(id + 1, state.notes.length)),
    }));
  };

  addNote = () => {
    if (this.state.note_entry === "") {
      alert("Note cannot be empty");
      return;
    }
    this.setState((state, _props) => ({
      note_entry: "",
      notes: state.notes.concat({
        text: state.note_entry,
        active: true,
      }),
    }));
  };

  deleteNote = (id) => {
    this.setState((state, _props) => ({
      notes: state.notes
        .slice(0, id)
        .concat(state.notes.slice(id + 1, state.notes.length)),
    }));
  };

  render() {
    const title = <h1>Introduction to React</h1>;
    const new_title = React.createElement("h2", {}, "Todo App");
    const { note_entry, notes } = this.state;
    return (
      <div>
        {title}
        {new_title}
        <input
          type="text"
          placeholder="Enter a note"
          value={note_entry}
          onChange={this.addNoteText}
        />
        <br />
        <br />
        <button type="button" onClick={() => this.addNote()}>
          Add Note
        </button>
        <br />
        <br />
        <ViewNotes
          notes={notes}
          deleteNote={this.deleteNote}
          changeActiveStatus={this.changeActiveStatus}
        />
      </div>
    );
  }
}

export default App;
