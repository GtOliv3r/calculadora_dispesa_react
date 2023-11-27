import React from 'react';

function CampoInput({ label, type, name, value, options, onChange }) {
  if (type === 'select') {
    return (
      <div>
        <label>{label}</label>
        <select name={name} value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <br />
      </div>
    );
  }

  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
      <br />
    </div>
  );
}

export default CampoInput;
