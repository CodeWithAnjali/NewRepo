import React from 'react';
import PropTypes from 'prop-types';

// PhoneInput Component (Add implementation if needed)
export const PhoneInput = () => {
  // component code
};
export const TextArea = () => {
    // Component code here
  };
  

// TextInput Component
export const TextInput = ({ id, name, label, value, type = 'text', placeholder, onChange }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-semibold text-blue-700 capitalize">{label}</label>
    <input
      type={type}
      id={id}
      name={name}
      className="w-full p-3 border border-blue-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  type: 'text',
  placeholder: '',
};

// TextAreaInput Component
export const TextAreaInput = ({ id, name, label, value, placeholder, rows = 3, onChange }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-semibold text-blue-700 capitalize">{label}</label>
    <textarea
      id={id}
      name={name}
      className="w-full p-3 border border-blue-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      placeholder={placeholder}
      rows={rows}
      onChange={onChange}
    />
  </div>
);

TextAreaInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

TextAreaInput.defaultProps = {
  placeholder: '',
  rows: 3,
};

// FileInput Component
export const FileInput = ({ id, label, onChange, multiple = false }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-semibold text-blue-700 capitalize">{label}</label>
    <input
      type="file"
      id={id}
      className="w-full p-3 border border-blue-300 rounded-lg shadow-md"
      onChange={onChange}
      multiple={multiple}
    />
  </div>
);

FileInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
};

FileInput.defaultProps = {
  multiple: false,
};

// EmailInput Component
export const EmailInput = ({ id, name, label, value, placeholder, onChange }) => (
  <TextInput
    id={id}
    name={name}
    label={label}
    value={value}
    type="email"
    placeholder={placeholder}
    onChange={onChange}
  />
);

EmailInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

// DynamicList Component
export const DynamicList = ({ items, fields, onFieldChange, addItem, removeItem }) => (
  <div className="space-y-6">
    {items.map((item, index) => (
      <div key={index} className="space-y-4">
        {fields.map(({ field, label }) => (
          <div key={field} className="space-y-2">
            <label className="block text-sm font-semibold text-blue-700 capitalize">{label}</label>
            {field === 'details' ? (
              <textarea
                className="w-full p-3 border border-blue-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={item[field]}
                onChange={(e) => onFieldChange(field, e.target.value, index)}
              />
            ) : (
              <input
                type="text"
                className="w-full p-3 border border-blue-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={item[field]}
                onChange={(e) => onFieldChange(field, e.target.value, index)}
              />
            )}
          </div>
        ))}
        {removeItem && (
          <button
            className="bg-red-500 text-white p-2 rounded-lg"
            onClick={() => removeItem(index)}
          >
            Remove
          </button>
        )}
      </div>
    ))}
    <button
      className="bg-blue-900 text-white p-4 rounded-lg text-sm font-bold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={addItem}
    >
      Add Item
    </button>
  </div>
);

DynamicList.propTypes = {
  items: PropTypes.array.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  onFieldChange: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func,
};

DynamicList.defaultProps = {
  removeItem: null,
};
