import React from "react";

export default function Question({ question, options, onAnswer }) {
  return (
    <div>
      <h2>{ question || 'No questions available...' }</h2>
      {options.map(option => {
        return (
          <button
            key={option}
            onClick={() => {
              onAnswer(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}