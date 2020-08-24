import React, { useState } from 'react';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        e.preventDefault();
        let selected = e.target.files[0];

        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setError(null);
        } else {
            setFile(null);
            setError('Seleziona il giusto formato (JPEG o PNG).');
        }
    }

    return (
        <form>
           <input type="file" onChange={changeHandler} /> 
           <div className="output">
                { error && <div className="error">{error}</div> }
                { file && <div>{file.name}</div> }
           </div>
        </form>
    );
};

export default UploadForm;
