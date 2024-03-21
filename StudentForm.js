const React = require('react');
const { useState } = require('react');
const axios = require('axios');

const StudentForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/students', { name, age });
      // Handle success
    } catch (err) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

module.exports = StudentForm;
