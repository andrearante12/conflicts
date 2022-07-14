import React from "react";

function Popup(props) {
  const generateEditableDescriptions = (key, todo) => {
    return props.roadmap[key]["descriptions"][todo].map((description) => (
      <>
        <textarea id={description} className="large-text-field" type="text">
          {description}
        </textarea>
      </>
    ));
  };

  const replaceKey = (o, old_key, new_key) => {
    if (old_key !== new_key) {
      Object.defineProperty(
        o,
        new_key,
        Object.getOwnPropertyDescriptor(o, old_key)
      );
      delete o[old_key];
    }
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h2>Stage Name</h2>

        <textarea id="title" type="text" className="todo-edit title-textarea">
          {props.stage}
        </textarea>

        <h2>Stage Todos</h2>
        {props.roadmap[props.id]["todos"].map((todo) => {
          return (
            <>
              <textarea
                id={todo}
                type="text"
                className="todo-edit title-textarea"
              >
                {todo}
              </textarea>
              <ul>{generateEditableDescriptions(props.id, todo)}</ul>
            </>
          );
        })}

        <button
          className="close-btn"
          onClick={() => {
            props.setTrigger(false);

            let new_roadmap = JSON.parse(JSON.stringify(props.roadmap));

            // Updates the stage title
            const title = document.getElementById("title");
            new_roadmap[props.id]["stage"] = title.value;

            for (let i = 0; i < props.roadmap[props.id]["todos"].length; i++) {
              // Updates todo
              const original_todo = props.roadmap[props.id]["todos"][i];
              let element = document.getElementById(original_todo);
              new_roadmap[props.id]["todos"][i] = element.value;

              // Updates description labels
              replaceKey(
                new_roadmap[props.id]["descriptions"],
                original_todo,
                element.value
              );

              // Updates descriptions

              const original_descriptions =
                props.roadmap[props.id]["descriptions"][original_todo];
              console.log(original_todo);

              for (let i = 0; i < original_descriptions.length; i++) {
                console.log(original_descriptions);

                const original_description = document.getElementById(
                  original_descriptions[i]
                );

                console.log(original_description);

                new_roadmap[props.id]["descriptions"][element.value][i] =
                  original_description.value;
              }
            }
            console.log("updated ", new_roadmap);

            props.updateRoadmap(new_roadmap);
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
