import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState(null);
  const [welcomeContent, setWelcomeContent] = useState({
    title: 'Welcome to our form',
    description: 'This is the welcome screen',
  });
  const [formContent, setFormContent] = useState({
    title: 'Fill the Form',
    description: 'This is the Form Content',
  });
  const [formFields, setFormFields] = useState([]);
  const [endContent, setEndContent] = useState({
    title: 'Thank you!',
    description: 'This is the end screen',
  });

  const handleAddField = (fieldType) => {
    setFormFields([...formFields, fieldType]);
  };

  const renderContentEditor = () => {
    if (activeTab === 'welcome') {
      return (
        <div className='dropdown-content'>
          <h2>Edit Welcome Screen</h2>
          <input
            type='text'
            value={welcomeContent.title}
            onChange={(e) =>
              setWelcomeContent({ ...welcomeContent, title: e.target.value })
            }
            placeholder='Edit title'
          />
          <textarea
            value={welcomeContent.description}
            onChange={(e) =>
              setWelcomeContent({
                ...welcomeContent,
                description: e.target.value,
              })
            }
            placeholder='Edit Description'
          />
        </div>
      );
    } else if (activeTab === 'form') {
      return (
        <div className='dropdown-content'>
          <h2>Edit Form Content</h2>
          <input
            type='text'
            value={formContent.title}
            onChange={(e) =>
              setFormContent({ ...formContent, title: e.target.value })
            }
            placeholder='Edit title'
          />
          <textarea
            value={formContent.description}
            onChange={(e) =>
              setFormContent({
                ...formContent,
                description: e.target.value,
              })
            }
            placeholder='Edit Description'
          />
          <button onClick={() => handleAddField('name')}>Add Name Field</button>
          <button onClick={() => handleAddField('email')}>
            Add Email Field
          </button>

          {formFields.map((field, index) => (
            <div key={index}>
              {field === 'name' && (
                <div>
                  <label>Name:</label>
                  <input type='text' placeholder='Enter Name' />
                </div>
              )}
              {field === 'email' && (
                <div>
                  <label>Email:</label>
                  <input type='email' placeholder='Enter Email' />
                </div>
              )}
            </div>
          ))}
        </div>
      );
    } else if (activeTab === 'end') {
      return (
        <div className='dropdown-content'>
          <h2>Edit End Screen</h2>
          <input
            type='text'
            value={endContent.title}
            onChange={(e) =>
              setEndContent({ ...endContent, title: e.target.value })
            }
            placeholder='Edit title'
          />
          <textarea
            value={endContent.description}
            onChange={(e) =>
              setEndContent({
                ...endContent,
                description: e.target.value,
              })
            }
            placeholder='Edit Description'
          />
        </div>
      );
    }
  };

  const renderContentDisplay = () => {
    if (activeTab === 'welcome') {
      return (
        <div>
          <h1>{welcomeContent.title}</h1>
          <p>{welcomeContent.description}</p>
        </div>
      );
    } else if (activeTab === 'form') {
      return (
        <div>
          <h1>Form Content</h1>
          {formFields.map((field, index) => (
            <div key={index}>
              {field === 'name' && <p>Name Field</p>}
              {field === 'email' && <p>Email Field</p>}
            </div>
          ))}
        </div>
      );
    } else if (activeTab === 'end') {
      return (
        <div>
          <h1>{endContent.title}</h1>
          <p>{endContent.description}</p>
        </div>
      );
    }
  };

  return (
    <div className='app-container'>
      <div className='sidebar'>
        <h3>Steps</h3>
        <p>The steps users will take to complete the form</p>
        <div className='dropdown'>
          <button
            onClick={() =>
              setActiveTab(activeTab === 'welcome' ? null : 'welcome')
            }
          >
            Welcome Screen
          </button>
          {activeTab === 'welcome' && renderContentEditor()}
        </div>
        <div className='dropdown'>
          <button
            onClick={() => setActiveTab(activeTab === 'form' ? null : 'form')}
          >
            Form Content
          </button>
          {activeTab === 'form' && renderContentEditor()}
        </div>
        <div className='end'>
          <button
            onClick={() => setActiveTab(activeTab === 'end' ? null : 'end')}
          >
            End Screen
          </button>
          {activeTab === 'end' && renderContentEditor()}
        </div>
      </div>

      <div className='content'>
        <div className='display'>{renderContentDisplay()}</div>
      </div>
    </div>
  );
}

export default App;
