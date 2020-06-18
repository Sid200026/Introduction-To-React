import React from "react";

function ViewNotes(props) {
  const notes = props.notes;

  function getNotes() {
    return notes.map((note, index) => {
      return (
        <div key={index} style={{ display: "flex", height: "20px" }}>
          <h6 style={{ margin: "0 10px" }}>{index + 1}</h6>
          <input
            type="checkbox"
            checked={note.active}
            onClick={() => props.changeActiveStatus(index)}
          />
          {note.active && <h5 style={{ margin: "0 10px 0 10px" }}>{note.text}</h5>}
          {!note.active && (
            <h5 style={{ margin: "0 10px 0 10px", textDecoration: "line-through" }}>
              {note.text}
            </h5>
          )}
          <button type="button" onClick={() => props.deleteNote(index)}>
            Delete Note
          </button>
          <br />
        </div>
      );
    });
  }

  return getNotes();
}

export { ViewNotes };
