import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSettings } from '../redux/actions';

const Settings = () => {
  const [settings, setSettings] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSettings(settings));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Preference:
        <input
          type="text"
          value={settings.preference || ''}
          onChange={(e) => setSettings({ ...settings, preference: e.target.value })}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default Settings;
